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
                  業務システムや印刷系システムに携わる中で、仕様理解・品質検証・認識ずれの整理を通じて、利用者や関係者がどこで迷うのかを捉えてきました。
                </p>

                <p className={styles.text}>
                  現在はその視点を活かし、業務やユーザーのつまずきを整理しながら、次に取るべき行動が分かるUIとプロダクト体験を設計しています。
                </p>
              </div>

              <Link href="/about" className={`fontEn ${styles.link}`}>
                View About
              </Link>
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
