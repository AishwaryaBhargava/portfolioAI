import data from "../../../../shared/data/skills.json";
import styles from "./Skills.module.css";

export default function Skills() {
    return (
        <section className={styles.wrapper} id="skills">
            {/* Header */}
            <div className={styles.header}>
                <h2 className={styles.title}>Skills</h2>
                <div className={styles.underline} />
            </div>

            {/* Categories */}
            <div className={styles.grid}>
                {data.categories.map((category) => (
                    <div key={category.id} className={styles.card}>
                        <div className={styles.cardHeader}>
                            <img
                                src={category.icon}
                                alt={`${category.label} icon`}
                                className={styles.icon}
                            />
                            <h3 className={styles.cardTitle}>{category.label}</h3>
                        </div>

                        <div className={styles.skills}>
                            {category.skills.map((skill) => (
                                <span key={skill} className={styles.skillChip}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
