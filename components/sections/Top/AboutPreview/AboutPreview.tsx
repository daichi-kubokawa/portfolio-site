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
                  約7年、オフィス機器関連ソフトウェア・業務システムの品質保証・上流工程に携わり、仕様理解や検証を通じて利用者がどこで迷うかを捉える視点を培いました。
                  その経験を活かし、次の行動が分かるUI/UX設計に取り組んでいます。
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
