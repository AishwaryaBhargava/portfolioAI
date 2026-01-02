import type { ReactNode } from "react";
import styles from "./Section.module.css";

interface Props {
  id: string;
  children: ReactNode;
}

export default function Section({ id, children }: Props) {
  return (
    <section id={id} className={styles.section}>
      {children}
    </section>
  );
}
