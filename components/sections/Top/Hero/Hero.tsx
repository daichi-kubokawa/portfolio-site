import styles from "./Hero.module.css";
import FadeInOnScroll from "@/components/FadeInOnScroll";

export default function Hero() {
  return (
    <section className={styles.root}>
      <div className={`container ${styles.inner}`}>
        <FadeInOnScroll>
          <div className={styles.copy}>
            <p className={`uppercaseLabel ${styles.eyebrow}`}>
              UI/UX / Product Design
            </p>

            <h1 className={`fontEn ${styles.title}`}>
              <span>DAICHI</span>
              <span>KUBOKAWA</span>
            </h1>

            <p className={styles.description}>
              業務とユーザーのつまずきを構造化し、
              使いやすさと成果につながる体験を設計する。
            </p>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
