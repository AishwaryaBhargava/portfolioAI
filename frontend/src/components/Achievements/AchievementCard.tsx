import styles from "./Achievements.module.css";

interface Item {
    id: string;
    title: string;
    organization?: string;
    issuer?: string;
    date: string;
    description?: string;
    url?: string;
    credentialUrl?: string;
    credentialId?: string;
    category: string;
}

const ICON_MAP: Record<string, string> = {
    award: "🏆",
    publication: "📄",
    talk: "🎤",
    certification: "📜"
};

export default function AchievementCard({ item }: { item: Item }) {
    return (
        <div className={styles.card}>
            <div className={styles.icon}>{ICON_MAP[item.category]}</div>

            <div className={styles.content}>
                <h4 className={styles.cardTitle}>{item.title}</h4>

                {(item.organization || item.issuer) && (
                    <p className={styles.org}>
                        {item.organization || item.issuer}
                    </p>
                )}

                <span className={styles.date}>{item.date}</span>

                {item.description && (
                    <p className={styles.description}>{item.description}</p>
                )}

                {/* CTA on its own line */}
                {(item.url || item.credentialUrl) && (
                    <div className={styles.ctaRow}>
                        <a
                            href={item.url || item.credentialUrl}
                            target="_blank"
                            rel="noreferrer"
                            className={styles.pillBtn}
                        >
                            View
                        </a>
                    </div>
                )}

                {item.credentialId && (
                    <p className={styles.credential}>
                        Credential ID: <span>{item.credentialId}</span>
                    </p>
                )}

            </div>
        </div>
    );
}
