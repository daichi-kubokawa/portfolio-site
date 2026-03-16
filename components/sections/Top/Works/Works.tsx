import Image from "next/image";
import Link from "next/link";
import styles from "./Works.module.css";
import { works } from "@/data/works/index";
import FadeInOnScroll from "@/components/FadeInOnScroll";

export default function Works() {
  return (
    <section id="works" className={styles.root}>
      <div className="container">
        <FadeInOnScroll>
          <div className={styles.heading}>
            <div className={styles.headingLeft}>
              <p className={`uppercaseLabel ${styles.eyebrow}`}>Works</p>
              <h2 className={styles.title}>制作事例</h2>
            </div>
          </div>
        </FadeInOnScroll>

        <div className={styles.grid}>
          {works.map((work, index) => {
            const titleFontClass =
              work.titleFont === "en" ? "fontEn" : "fontSans";

            return (
              <FadeInOnScroll key={work.slug} delay={index * 0.03}>
                <Link
                  href={`/works/${work.slug}`}
                  className={`${styles.item} ${
                    index % 2 === 0 ? styles.offsetA : styles.offsetB
                  }`}
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
                    <p className={`fontEn ${styles.itemSub}`}>
                      {work.category}
                    </p>

                    <h3 className={`${titleFontClass} ${styles.itemTitle}`}>
                      {work.title}
                    </h3>

                    <p className={styles.itemDescription}>{work.description}</p>

                    {work.cardAward && (
                      <p className={styles.itemAward}>{work.cardAward}</p>
                    )}
                  </div>
                </Link>
              </FadeInOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
