import styles from "./SectionHeading.module.css";

interface Props {
  text: string;
}

export default function SectionHeading({ text }: Props) {
  return <div className={styles.heading}>{text}</div>;
}
