import { useState } from "react";
import data from "../../../../shared/data/projects.json";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState<string>("featured");

    const filteredProjects = (() => {
        if (activeCategory === "featured") {
            return data.projects.filter((p) => data.featured.includes(p.id));
        }

        if (activeCategory === "all") {
            return data.projects;
        }

        return data.projects.filter((p) =>
            p.categories.includes(activeCategory)
        );
    })();

    return (
        <section className={styles.wrapper} id="projects">
            <div className={styles.header}>
                <h2 className={styles.title}>Projects</h2>
                <div className={styles.underline} />
            </div>

            {/* Filters */}
            <div className={styles.filters}>
                <button
                    className={activeCategory === "featured" ? styles.active : ""}
                    onClick={() => setActiveCategory("featured")}
                >
                    Featured
                </button>

                <button
                    className={activeCategory === "all" ? styles.active : ""}
                    onClick={() => setActiveCategory("all")}
                >
                    All
                </button>

                {data.categories.map((cat) => (
                    <button
                        key={cat.id}
                        className={activeCategory === cat.id ? styles.active : ""}
                        onClick={() => setActiveCategory(cat.id)}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className={styles.grid}>
                {filteredProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}
