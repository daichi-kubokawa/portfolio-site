import styles from "./WorkMeta.module.css";
import type { Work } from "@/types/work";

type Props = {
  work: Work;
};

export default function WorkMeta({ work }: Props) {
  return (
    <>
      <div className={styles.meta}>
        <div className={styles.metaItem}>
          <span className={`uppercaseLabel ${styles.metaLabel}`}>Role</span>
          <span className={styles.metaValue}>{work.role}</span>
        </div>

        <div className={styles.metaItem}>
          <span className={`uppercaseLabel ${styles.metaLabel}`}>Period</span>
          <span className={styles.metaValue}>{work.period}</span>
        </div>

        <div className={styles.metaItem}>
          <span className={`uppercaseLabel ${styles.metaLabel}`}>Tools</span>
          <span className={styles.metaValue}>{work.tools.join(", ")}</span>
        </div>
      </div>

      {work.result && (
        <div className={styles.result}>
          <span className={`uppercaseLabel ${styles.resultLabel}`}>Result</span>
          <p className={styles.resultText}>{work.result}</p>
        </div>
      )}
    </>
  );
}
