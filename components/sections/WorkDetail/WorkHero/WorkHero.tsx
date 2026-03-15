import Image from "next/image";
import styles from "./WorkHero.module.css";
import type { Work } from "@/types/work";

type Props = {
  work: Work;
};

export default function WorkHero({ work }: Props) {
  const titleFontClass = work.titleFont === "en" ? "fontEn" : "fontSans";
  const heroSrc = work.heroImage || work.thumbnail;

  return (
    <>
      <header className={styles.header}>
        <h1 className={`${titleFontClass} ${styles.title}`}>{work.title}</h1>
        <p className={styles.description}>{work.description}</p>
      </header>

      <div className={styles.thumbnail}>
        {heroSrc ? (
          <Image src={heroSrc} alt={work.title} fill className={styles.image} />
        ) : (
          <span>{work.title}</span>
        )}
      </div>
    </>
  );
}
