import Link from "next/link";
import styles from "./WorkSummary.module.css";
import type {
  WorkSummary as WorkSummaryType,
  WorkTextValue,
} from "@/types/work";

type Props = {
  summary: WorkSummaryType;
};

function getFontClass(font?: "sans" | "en") {
  return font === "en" ? "fontEn" : "fontSans";
}

function SummaryValue({
  value,
  className,
}: {
  value: WorkTextValue;
  className: string;
}) {
  const fontClass = getFontClass(value.font);

  if (value.href) {
    return (
      <a
        href={value.href}
        target="_blank"
        rel="noreferrer"
        className={`${fontClass} ${className}`}
      >
        {value.text}
      </a>
    );
  }

  return <p className={`${fontClass} ${className}`}>{value.text}</p>;
}

export default function WorkSummary({ summary }: Props) {
  return (
    <section className={styles.root}>
      <div className={styles.left}>
        <h2 className={`fontEn ${styles.title}`}>Summary</h2>

        <div className={styles.block}>
          <p className={`uppercaseLabel ${styles.label}`}>Challenge</p>
          <p className={styles.text}>{summary.challenge}</p>
        </div>

        <div className={styles.block}>
          <p className={`uppercaseLabel ${styles.label}`}>Solution</p>
          <ul className={styles.list}>
            {summary.solution.map((item, index) => (
              <li key={index} className={styles.listItem}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {summary.linkHref && summary.linkLabel && (
          <Link
            href={summary.linkHref}
            className={`fontEn ${styles.button}`}
            target="_blank"
            rel="noreferrer"
          >
            {summary.linkLabel}
          </Link>
        )}
      </div>

      <div className={styles.right}>
        <div className={styles.metaItem}>
          <p className={`uppercaseLabel ${styles.metaLabel}`}>Role</p>
          <SummaryValue value={summary.role} className={styles.metaText} />
        </div>

        <div className={styles.metaItem}>
          <p className={`uppercaseLabel ${styles.metaLabel}`}>Time</p>
          <SummaryValue value={summary.time} className={styles.metaText} />
        </div>

        <div className={styles.metaItem}>
          <p className={`uppercaseLabel ${styles.metaLabel}`}>Task</p>
          <SummaryValue value={summary.task} className={styles.metaText} />
        </div>

        <div className={styles.metaItem}>
          <p className={`uppercaseLabel ${styles.metaLabel}`}>Tools</p>
          <div className={styles.toolsList}>
            {summary.tools.map((tool, index) => (
              <SummaryValue
                key={`${tool.text}-${index}`}
                value={tool}
                className={styles.metaText}
              />
            ))}
          </div>
        </div>

        {summary.award && (
          <div className={styles.metaItem}>
            <p className={`uppercaseLabel ${styles.metaLabel}`}>Award</p>
            <SummaryValue value={summary.award} className={styles.metaLink} />
          </div>
        )}
      </div>
    </section>
  );
}
