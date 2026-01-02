import homeData from "../../../../shared/data/home.json";
import { useTypewriter } from "../../hooks/useTypewriter";
import styles from "./Home.module.css";
import profileImg from "../../assets/my_pictures/profile.jpeg"; // add your image here

export default function Home() {
  const typedRole = useTypewriter(homeData.roles);

  return (
    <div className={styles.wrapper}>
      {/* LEFT */}
      <div className={styles.left}>
        <h1 className={styles.name}>{homeData.name}</h1>

        <h2 className={styles.role}>
          {typedRole}
          <span className={styles.cursor}>|</span>
        </h2>

        <p className={styles.tagline}>{homeData.tagline}</p>

        <div className={styles.chips}>
          {homeData.keywords.map((k) => (
            <span key={k} className={styles.chip}>
              {k}
            </span>
          ))}
        </div>

        <div className={styles.links}>
            {/* <a className={styles.linkPill} href={homeData.links.linkedin} target="_blank">
                LinkedIn
            </a> */}
            <a className={styles.linkPill} href={homeData.links.github} target="_blank">
                View My Work
            </a>
            {/* <a className={styles.linkPill} href={homeData.links.resume} target="_blank">
                Resume
            </a>
            <a className={styles.linkPill} href={homeData.links.email}>
                Email
            </a> */}
            <button
                className={styles.linkPill}
                onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
            >
                Contact Me
            </button>
        </div>


      </div>

      {/* RIGHT */}
      <div className={styles.right}>
        <img src={profileImg} alt="Aishwarya" />
      </div>

      {/* STATS */}
      <div className={styles.stats}>
        {homeData.stats.map((s) => (
          <div key={s.label} className={styles.statCard}>
            <div className={styles.statValue}>{s.value}</div>
            <div className={styles.statLabel}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
