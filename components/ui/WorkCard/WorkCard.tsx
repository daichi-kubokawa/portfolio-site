import Link from "next/link";
import styles from "./WorkCard.module.css";
import { Work } from "@/types/work";

type Props = {
  work: Work;
};

export default function WorkCard({ work }: Props) {
  return (
    <article className={styles.root}>
      <Link href={`/works/${work.slug}`} className={styles.link}>
        <div className={styles.thumbnail}>
          <span className={styles.thumbnailLabel}>{work.title}</span>
        </div>

        <div className={styles.body}>
          <p className={styles.category}>{work.category}</p>
          <h3 className={styles.title}>{work.title}</h3>
          <p className={styles.description}>{work.description}</p>
          <span className={styles.cta}>View Case Study</span>
        </div>
      </Link>
    </article>
  );
}
