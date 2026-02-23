import SectionTitle from './SectionTitle'
import styles from './Sidebar.module.css'

export function Highlights({ data }) {
  return (
    <section aria-label="Career Highlights" className={styles.section}>
      <SectionTitle>Highlights</SectionTitle>
      <div className={styles.statList}>
        {data.map((s, i) => (
          <div key={i} className={styles.statPill}>
            <span className={styles.statIcon}>{s.icon}</span>
            <div>
              <div className={styles.statLabel}>{s.label}</div>
              <div className={styles.statValue}>{s.value}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export function Skills({ data }) {
  return (
    <section aria-label="Technical Skills" className={styles.section}>
      <SectionTitle>Technical Skills</SectionTitle>
      {data.map((group, gi) => (
        <div key={gi} className={styles.skillGroup}>
          <div className={styles.groupLabel}>{group.group}</div>
          <div className={styles.tagRow}>
            {group.tags.map((tag, ti) => (
              <span
                key={ti}
                className={`${styles.tag} ${group.primary ? styles.primary : ''} ${group.active ? styles.active : ''}`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

export function Education({ data }) {
  return (
    <section aria-label="Education" className={styles.section}>
      <SectionTitle>Education</SectionTitle>
      {data.map((edu, i) => (
        <div key={i} className={styles.eduItem}>
          <div className={styles.eduDegree}>{edu.degree}</div>
          <div className={styles.eduSchool}>{edu.school}</div>
          <div className={styles.eduPeriod}>{edu.period}</div>
          <div className={styles.eduCgpa}>⭐ {edu.cgpa}</div>
        </div>
      ))}
    </section>
  )
}

export function References({ data }) {
  return (
    <section aria-label="References" className={styles.section}>
      <SectionTitle>References</SectionTitle>
      {data.map((ref, i) => (
        <div key={i} className={styles.refItem}>
          <div className={styles.refName}>{ref.name}</div>
          <div className={styles.refRole}>{ref.role}</div>
          <div className={styles.refCompany}>{ref.company}</div>
          <a href={`tel:${ref.phone.replace(/\s/g,'')}`} className={styles.refContact}>{ref.phone}</a>
          <a href={`mailto:${ref.email}`} className={styles.refContact}>{ref.email}</a>
        </div>
      ))}
    </section>
  )
}

export function Achievements({ data }) {
  return (
    <section aria-label="Achievements" className={styles.section}>
      <SectionTitle>Achievements</SectionTitle>
      {data.map((a, i) => (
        <div key={i} className={styles.achievement}>
          <span className={styles.achIcon}>{a.icon}</span>
          <div className={styles.achText}>
            <strong>{a.title}</strong>
            {a.desc}
          </div>
        </div>
      ))}
    </section>
  )
}
