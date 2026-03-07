import Image from "next/image";
import Link from "next/link";
import styles from "./WorkCard.module.css";
import { Work } from "@/types/work";

type Props = {
  work: Work;
};

export default function WorkCard({ work }: Props) {
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
          <h3 className={styles.title}>{work.title}</h3>

          <p className={styles.description}>{work.description}</p>

          <Link href={`/works/${work.slug}`} className={styles.cta}>
            ケーススタディを読む
          </Link>
        </div>
      </div>
    </article>
  );
}
