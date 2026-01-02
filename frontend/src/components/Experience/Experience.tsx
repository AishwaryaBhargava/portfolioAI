import experienceData from "../../../../shared/data/experience.json";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <div className={styles.wrapper}>
      {/* SECTION TITLE */}
      <div className={styles.header}>
        <h2 className={styles.title}>Experience</h2>
        <div className={styles.underline} />
      </div>

      {experienceData.sections.map((section) => (
        <div key={section.title} className={styles.section}>
          <h3 className={styles.sectionTitle}>{section.title}</h3>

          <div className={styles.cards}>
            {section.items.map((item, index) => (
              <div
                key={`${item.company}-${index}`}
                className={`${styles.card} ${
                  section.collapsed ? styles.collapsed : ""
                }`}
              >
                {/* HEADER */}
                <div className={styles.cardHeader}>
                  <div>
                    <div className={styles.companyRow}>
                    {item.logo && (
                        <img
                        src={`/company_logos/${item.logo}`}
                        alt={item.company}
                        className={styles.logo}
                        />
                    )}
                    <h4 className={styles.company}>{item.company}</h4>
                    </div>
                    <p className={styles.role}>
                      {item.role} · {item.type}
                    </p>
                  </div>
                  <span className={styles.duration}>{item.duration}</span>
                </div>

                {/* METRICS */}
                <div className={styles.metrics}>
                  {item.metrics.map((m) => (
                    <span key={m} className={styles.metricChip}>
                      {m}
                    </span>
                  ))}
                </div>

                {/* HIGHLIGHTS */}
                <ul className={styles.highlights}>
                  {item.highlights.map((point, i) => (
                    <li
                      key={i}
                      dangerouslySetInnerHTML={{
                        __html: point.replace(
                          /\*\*(.*?)\*\*/g,
                          "<strong>$1</strong>"
                        )
                      }}
                    />
                  ))}
                </ul>

                {/* AWARDS */}
                {item.awards && (
                  <div className={styles.awards}>
                    {item.awards.map((a) => (
                      <span key={a} className={styles.awardBadge}>
                        {a}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
