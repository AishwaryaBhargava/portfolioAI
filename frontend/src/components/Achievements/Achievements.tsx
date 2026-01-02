import { useState } from "react";
import data from "../../../../shared/data/achievements.json";
import AchievementCard from "./AchievementCard";
import styles from "./Achievements.module.css";

const FILTERS = [
  { id: "all", label: "All" },
  { id: "award", label: "Awards & Scholarships" },
  { id: "publication", label: "Publications" },
  { id: "talk", label: "Talks" },
  { id: "certification", label: "Certifications" }
];

export default function Achievements() {
  const [active, setActive] = useState("all");

  const items = [
    ...data.achievements.map(a => ({ ...a, category: "award" })),
    ...data.publications.map(p => ({ ...p, category: "publication" })),
    ...data.talks.map(t => ({ ...t, category: "talk" })),
    ...data.certifications.map(c => ({ ...c, category: "certification" }))
  ];

  const filtered =
    active === "all"
      ? items
      : items.filter(i => i.category === active);

  return (
    <section className={styles.wrapper} id="achievements">
      <div className={styles.header}>
        <h2 className={styles.title}>Achievements</h2>
        <div className={styles.underline} />
      </div>

      <div className={styles.filters}>
        {FILTERS.map(f => (
          <button
            key={f.id}
            className={active === f.id ? styles.active : ""}
            onClick={() => setActive(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filtered.map(item => (
          <AchievementCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
