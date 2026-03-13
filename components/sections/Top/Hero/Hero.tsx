import styles from "./Hero.module.css";
import FadeInOnScroll from "@/components/FadeInOnScroll";

export default function Hero() {
  return (
    <section className={styles.root}>
      <div className={`container ${styles.inner}`}>
        <FadeInOnScroll>
          <div className={styles.copy}>
            <p className={`uppercaseLabel ${styles.eyebrow}`}>
              UI / UX Designer
            </p>

            <h1 className={`fontEn ${styles.title}`}>DAICHI KUBOKAWA</h1>

            <p className={styles.description}>
              自然と使える体験をデザインする。
            </p>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
