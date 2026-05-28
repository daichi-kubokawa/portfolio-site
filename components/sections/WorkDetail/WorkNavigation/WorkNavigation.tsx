import Link from "next/link";
import styles from "./WorkNavigation.module.css";
import type { Work } from "@/types/work";

type Props = {
  prevWork: Work;
  nextWork: Work;
};

export default function WorkNavigation({ prevWork, nextWork }: Props) {
  const prevTitleFontClass =
    prevWork.titleFont === "en" ? "fontEn" : "fontSans";
  const nextTitleFontClass =
    nextWork.titleFont === "en" ? "fontEn" : "fontSans";

  return (
    <nav className={styles.workNavigation} aria-label="Work navigation">
      <Link href={`/works/${prevWork.slug}`} className={styles.navLink}>
        <span className={`fontEn ${styles.navDirection}`}>← Prev Work</span>
        <span className={`${prevTitleFontClass} ${styles.navTitle}`}>
          {prevWork.title}
        </span>
      </Link>

      <Link
        href={`/works/${nextWork.slug}`}
        className={`${styles.navLink} ${styles.nextLink}`}
      >
        <span className={`fontEn ${styles.navDirection}`}>Next Work →</span>
        <span className={`${nextTitleFontClass} ${styles.navTitle}`}>
          {nextWork.title}
        </span>
      </Link>
    </nav>
  );
}
