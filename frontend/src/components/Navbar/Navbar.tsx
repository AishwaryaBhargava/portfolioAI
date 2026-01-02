import { useEffect, useState } from "react";
import { SECTIONS } from "../../config/sections";
import styles from "./Navbar.module.css";

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("home");
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
    const sectionObserver = new IntersectionObserver(
        (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            }
        });
        },
        {
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
        }
    );

    const homeObserver = new IntersectionObserver(
        ([entry]) => {
        if (entry.isIntersecting) {
            setActiveSection(""); // 👈 CLEAR active state
        }
        },
        {
        threshold: 0.6,
        }
    );

    // Observe navbar sections
    SECTIONS.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) sectionObserver.observe(el);
    });

    // Observe home separately
    const homeEl = document.getElementById("home");
    if (homeEl) homeObserver.observe(homeEl);

    return () => {
        sectionObserver.disconnect();
        homeObserver.disconnect();
    };
    }, []);


    const handleClick = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
        }
    };

    return (
        <header className={styles.navbar}>
        <div className={styles.container}>
            <div
            className={styles.logo}
            onClick={() => {
            const el = document.getElementById("home");
            el?.scrollIntoView({ behavior: "smooth" });
            }}
            >
            Aishwarya Bhargava
            </div>


            <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
            {SECTIONS.map((section) => (
                <button
                key={section.id}
                className={`${styles.link} ${
                    activeSection === section.id ? styles.active : ""
                }`}
                onClick={() => handleClick(section.id)}
                >
                {section.label}
                </button>
            ))}
            </nav>

            <button
            className={styles.menuButton}
            onClick={() => setMenuOpen((prev) => !prev)}
            >
            ☰
            </button>
        </div>
        </header>
    );
}
