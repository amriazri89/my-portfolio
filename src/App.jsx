import { useState } from 'react'
import { resumeData } from "./data/resume";
import Header from "./components/Header";
import Experience from "./components/Experience";
import ProjectCard from "./components/ProjectCard";
import SectionTitle from "./components/SectionTitle";
import {
  Highlights,
  Skills,
  Education,
  Achievements,
  References,
} from "./components/Sidebar";
import styles from "./App.module.css";
import { downloadPdf } from './utils/downloadPdf';

export default function App() {
  const d = resumeData;
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    await downloadPdf();
    setLoading(false);
  };

  const handlePublicDownload = () => {
    const link = document.createElement('a');
    link.href = '/Amri_Azri_Resume.pdf';
    link.download = 'Amri_Azri_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={styles.page} id="resume-page">
      <Header data={d} />

      <div className={styles.body}>
        {/* ── MAIN COLUMN ── */}
        <main className={styles.main}>
          {/* Summary */}
          <section className={styles.section} aria-label="Professional Summary">
            <SectionTitle>Professional Summary</SectionTitle>
            <p className={styles.summary}>{d.summary}</p>
          </section>

          {/* Experience */}
          <section className={styles.section}>
            <Experience data={d.experience} />
          </section>

          {/* Featured Project testtt*/}
          <section className={styles.section} aria-label="Featured Projects">
            <SectionTitle>Featured Project</SectionTitle>
            {d.projects.map((p, i) => (
              <ProjectCard key={i} project={p} />
            ))}
          </section>

          {/* FYP */}
          <section className={styles.section} aria-label="Final Year Project">
            <SectionTitle>Final Year Project</SectionTitle>
            <ProjectCard project={d.fyp} />
          </section>
        </main>

        {/* ── SIDEBAR ── */}
        <aside className={styles.sidebar}>
          <Highlights data={d.highlights} />
          <Skills data={d.skills} />
          <Education data={d.education} />
          <Achievements data={d.achievements} />
          <References data={d.references} />
        </aside>
      </div>

      {/* Buttons */}
      <div className={`${styles.printBar} no-print`}>
        <button
          className={styles.printBtn}
          onClick={handlePublicDownload}
        >
          ⬇ Resume PDF
        </button>
        {/* <button
          className={styles.printBtn}
          onClick={handleDownload}
          disabled={loading}
        >
          {loading ? '⏳ Generating...' : '🌐 Generate from Web'}
        </button>
        <button
          className={styles.printBtn}
          onClick={() => window.print()}
        >
          🖨 Print
        </button> */}
      </div>
    </div>
  );
}