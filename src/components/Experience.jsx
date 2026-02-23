import SectionTitle from './SectionTitle'
import styles from './Experience.module.css'

function Role({ role, isFirst }) {
  return (
    <div className={`${styles.role} ${!isFirst ? styles.roleIndent : ''}`}>
      <div className={styles.roleHeader}>
        <span className={styles.roleTitle}>
          {role.title}
          {role.subtitle && <em className={styles.roleSub}> ({role.subtitle})</em>}
        </span>
        <span className={styles.period}>{role.period}</span>
      </div>
      {role.note && <div className={styles.note}>{role.note}</div>}
      <ul className={styles.bullets}>
        {role.bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
    </div>
  )
}

export default function Experience({ data }) {
  return (
    <section aria-label="Work Experience">
      <SectionTitle>Work Experience</SectionTitle>
      {data.map((job, ji) => (
        <div key={ji} className={styles.job}>
          <div className={styles.dot} />
          <div className={styles.jobBody}>
            <div className={styles.company}>{job.company}</div>
            {job.roles.map((role, ri) => (
              <Role key={ri} role={role} isFirst={ri === 0} />
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
