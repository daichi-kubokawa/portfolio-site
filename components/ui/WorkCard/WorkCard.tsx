import Image from "next/image";
import Link from "next/link";
import styles from "./WorkCard.module.css";
import { Work } from "@/types/work";

type Props = {
  work: Work;
};

export default function WorkCard({ work }: Props) {
  const titleFontClass = work.titleFont === "en" ? "fontEn" : "fontSans";

  return (
    <article className={styles.root}>
      <div className={styles.card}>
        <div className={styles.thumbnail}>
          {work.thumbnail ? (
            <Image
              src={work.thumbnail}
              alt={work.title}
              fill
              className={styles.image}
            />
          ) : (
            <span className={styles.thumbnailLabel}>{work.title}</span>
          )}
        </div>

        <div className={styles.body}>
          <p className={`uppercaseLabel ${styles.category}`}>{work.category}</p>

          <h3 className={`${titleFontClass} ${styles.title}`}>{work.title}</h3>

          {work.result && <p className={styles.result}>{work.result}</p>}

          <p className={styles.description}>{work.description}</p>

          <Link href={`/works/${work.slug}`} className={`fontEn ${styles.cta}`}>
            View Case Study
          </Link>
        </div>
      </div>
    </article>
  );
}
