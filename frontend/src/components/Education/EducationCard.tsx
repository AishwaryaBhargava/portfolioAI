import { useState } from "react";
import styles from "./Education.module.css";

interface Education {
    id: string;
    institution: string;
    location: string;
    degree: string;
    major: string;
    duration: string;
    gpa: string;
    keyCoursework: string[];
    honorsAndLeadership: string[];
    // fullCoursework?: Record<string, string[]>;
}

export default function EducationCard({
    education,
}: {
    education: Education;
}) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className={styles.card}>
            {/* Header */}
            <div className={styles.top}>
                <h3 className={styles.institution}>{education.institution}</h3>
                <span className={styles.location}>{education.location}</span>
            </div>

            {/* Degree row */}
            <div className={styles.meta}>
                <span>
                    {education.degree}, <strong>{education.major}</strong>
                </span>
                <span>{education.duration}</span>
            </div>

            {/* GPA */}
            <div className={styles.gpa}>GPA: {education.gpa}</div>

            {/* Course chips */}
            <div className={styles.chips}>
                {education.keyCoursework.map((course) => (
                    <span key={course} className={styles.chip}>
                        {course}
                    </span>
                ))}
            </div>

            {/* Honors & leadership chips */}
            <div className={styles.honorChips}>
                {education.honorsAndLeadership.map((item) => (
                    <span key={item.label} className={styles.honorChip}>
                        <span className={styles.icon}>
                            {item.icon === "trophy" && "🏆"}
                            {item.icon === "award" && "🎓"}
                            {item.icon === "star" && "⭐"}
                            {item.icon === "leadership" && "👥"}
                            {item.icon === "globe" && "🌍"}
                            {item.icon === "megaphone" && "📣"}
                            {item.icon === "leaf" && "🍃"}
                        </span>
                        {item.label}
                    </span>
                ))}
            </div>


            {/* Expand coursework */}
            {/* {education.fullCoursework && (
                <>
                    <button
                        className={styles.expandBtn}
                        onClick={() => setExpanded(!expanded)}
                    >
                        {expanded ? "Hide Full Coursework" : "View Full Coursework"}
                    </button>

                    {expanded && (
                        <div className={styles.coursework}>
                            {Object.entries(education.fullCoursework).map(
                                ([term, courses]) => (
                                    <div key={term} className={styles.term}>
                                        <strong>{term}</strong>
                                        <ul>
                                            {courses.map((c) => (
                                                <li key={c}>{c}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )
                            )}
                        </div>
                    )}
                </>
            )} */}
        </div>
    );
}
