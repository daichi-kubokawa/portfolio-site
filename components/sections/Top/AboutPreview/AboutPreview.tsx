import Link from "next/link";
import styles from "./AboutPreview.module.css";
import FadeInOnScroll from "@/components/FadeInOnScroll";

export default function AboutPreview() {
  return (
    <section className={styles.root}>
      <div className="container">
        <FadeInOnScroll>
          <div className={styles.inner}>
            <div className={styles.headingArea}>
              <p className={`uppercaseLabel ${styles.eyebrow}`}>About</p>
              <h2 className={styles.title}>私について</h2>
            </div>

            <div className={styles.content}>
              <div className={styles.textGroup}>
                <p className={styles.text}>
                  約7年、ソフトウェア・業務システムの開発に携わり、要件・仕様の整理から設計、品質検証、改修まで経験してきました。
                  現在はUI/UXや生成AIを活用したプロトタイピングにも領域を広げ、課題を整理し、仮説を形にして検証しながら、プロダクトを前に進めることに取り組んでいます。
                </p>
              </div>

              <Link href="/about" className={`fontEn ${styles.button}`}>
                詳しく見る
              </Link>
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
