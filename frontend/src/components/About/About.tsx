import aboutData from "../../../../shared/data/about.json";
import styles from "./About.module.css";
import gradImg from "../../assets/my_pictures/graduation.jpg"; // add image here

export default function About() {
  return (
    <div className={styles.wrapper}>
      {/* TITLE */}
      <div className={styles.header}>
        <h2 className={styles.title}>{aboutData.title}</h2>
        <div className={styles.underline} />
      </div>

      {/* CONTENT */}
      <div className={styles.contentGrid}>
        {/* LEFT: TEXT */}
        <div className={styles.text}>
          {aboutData.content.map((para, index) => (
            <p
                key={index}
                dangerouslySetInnerHTML={{
                __html: para.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                }}
            />
            ))}

        </div>

        {/* RIGHT: IMAGE */}
        <div className={styles.imageWrapper}>
          <img src={gradImg} alt="Graduation" />
        </div>
      </div>

      {/* METRICS */}
      <div className={styles.metrics}>
        {aboutData.metrics.map((m) => (
          <span key={m} className={styles.metricChip}>
            {m}
          </span>
        ))}
      </div>
    </div>
  );
}
