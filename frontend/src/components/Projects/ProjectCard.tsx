import styles from "./Projects.module.css";
import ReactMarkdown from "react-markdown";

interface Project {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    highlights: string[];
    tech: string[];
    metrics?: string[];
    links?: {
        github?: string;
        video?: string;
        live?: string;
    };
}

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <div className={styles.card}>
            {/* Title */}
            <h4 className={styles.cardTitle}>{project.title}</h4>

            {/* Subtitle */}
            <p className={styles.cardSubtitle}>{project.subtitle}</p>

            {/* Metrics */}
            {project.metrics && project.metrics.length > 0 && (
                <div className={styles.metrics}>
                    {project.metrics.map((metric) => (
                        <span key={metric} className={styles.metricChip}>
                            {metric}
                        </span>
                    ))}
                </div>
            )}

            {/* Description */}
            <p className={styles.description}>
                <strong>Description:</strong>
                <ReactMarkdown>{project.description}</ReactMarkdown>
            </p>

            {/* Highlights */}
            <ul className={styles.highlights}>
                {project.highlights.map((point) => (
                    <li key={point}><ReactMarkdown>{point}</ReactMarkdown></li>
                ))}
            </ul>

            {/* Tech stack */}
            <div className={styles.tech}>
                {project.tech.map((t) => (
                    <span key={t}>{t}</span>
                ))}
            </div>

            {/* Links */}
            <div className={styles.links}>
                {project.links?.github && (
                    <a
                        href={project.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.githubBtn}
                    >
                        GitHub
                    </a>
                )}

                {project.links?.video && (
                    <a
                        href={project.links.video}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.videoBtn}
                    >
                        Demo Video
                    </a>
                )}

                {project.links?.live && (
                    <a
                        href={project.links.live}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.liveBtn}
                    >
                        Live Site
                    </a>
                )}

            </div>
        </div>
    );
}
