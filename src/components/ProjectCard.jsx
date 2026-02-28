import styles from './ProjectCard.module.css'

export default function ProjectCard({ project }) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.name}>{project.name}</div>
        <div className={styles.links}>
          {project.demo && (
            <a className={styles.link} href={project.demo} target="_blank" rel="noreferrer">Live Demo</a>
          )}
          {/* {project.source && (
            <a className={styles.link} href={project.source} target="_blank" rel="noreferrer">Source</a>
          )} */}
        </div>
      </div>
      <div className={styles.stack}>
        {project.stack.map((t, i) => <span key={i} className={styles.tag}>{t}</span>)}
      </div>
      <ul className={styles.bullets}>
        {project.bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
    </div>
  )
}
