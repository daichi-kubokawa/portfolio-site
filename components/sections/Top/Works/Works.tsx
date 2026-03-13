import Image from "next/image";
import Link from "next/link";
import styles from "./Works.module.css";
import { works } from "@/data/works";

export default function Works() {
  return (
    <section id="works" className={styles.root}>
      <div className="container">
        <div className={styles.heading}>
          <div className={styles.headingLeft}>
            <p className={`uppercaseLabel ${styles.eyebrow}`}>Works</p>
            <h2 className={styles.title}>Works</h2>
          </div>

          <p className={styles.intro}>
            ユーザー体験を起点に考えながら、リサーチや情報設計をもとに制作した
            UI/UXデザインとWebデザインの事例です。伝わる見せ方と、使いやすさの
            両立を意識して取り組んでいます。
          </p>
        </div>

        <div className={styles.grid}>
          {works.map((work, index) => {
            const titleFontClass =
              work.titleFont === "en" ? "fontEn" : "fontSans";

            return (
              <Link
                key={work.slug}
                href={`/works/${work.slug}`}
                className={`${styles.item} ${index % 2 === 0 ? styles.offsetA : styles.offsetB}`}
              >
                <div className={styles.imageWrap}>
                  {work.thumbnail ? (
                    <Image
                      src={work.thumbnail}
                      alt={work.title}
                      fill
                      className={styles.image}
                    />
                  ) : (
                    <div className={styles.imageFallback}>{work.title}</div>
                  )}
                </div>

                <div className={styles.meta}>
                  <h3 className={`${titleFontClass} ${styles.itemTitle}`}>
                    {work.title}
                  </h3>
                  <p className={styles.itemDescription}>{work.description}</p>
                  <p className={styles.itemSub}>
                    {work.role} / {work.category}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
