import data from "../../../../shared/data/education.json";
import EducationCard from "./EducationCard";
import styles from "./Education.module.css";

export default function Education() {
  return (
    <section className={styles.wrapper} id="education">
      <div className={styles.header}>
        <h2 className={styles.title}>Education</h2>
        <div className={styles.underline} />
      </div>

      <div className={styles.stack}>
        {data.education.map((edu) => (
          <EducationCard key={edu.id} education={edu} />
        ))}
      </div>
    </section>
  );
}
