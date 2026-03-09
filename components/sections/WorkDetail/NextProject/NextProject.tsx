import Link from "next/link";
import styles from "./NextProject.module.css";
import type { Work } from "@/types/work";

type Props = {
  work: Work;
};

export default function NextProject({ work }: Props) {
  const titleFontClass = work.titleFont === "en" ? "fontEn" : "fontSans";

  return (
    <section className={styles.nextProject}>
      <p className={`uppercaseLabel ${styles.nextLabel}`}>Next Project</p>

      <Link href={`/works/${work.slug}`} className={styles.nextCard}>
        <div className={styles.nextCardBody}>
          <p className={`uppercaseLabel ${styles.nextCategory}`}>
            {work.category}
          </p>
          <h2 className={`${titleFontClass} ${styles.nextTitle}`}>
            {work.title}
          </h2>
          <span className={`fontEn ${styles.nextLink}`}>View Project →</span>
        </div>
      </Link>
    </section>
  );
}
