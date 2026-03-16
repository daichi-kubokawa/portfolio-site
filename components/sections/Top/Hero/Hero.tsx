import styles from "./Hero.module.css";
import FadeInOnScroll from "@/components/FadeInOnScroll";

export default function Hero() {
  return (
    <section className={styles.root}>
      <div className={`container ${styles.inner}`}>
        <FadeInOnScroll>
          <div className={styles.copy}>
            <p className={`uppercaseLabel ${styles.eyebrow}`}>UI/UX Designer</p>

            <h1 className={`fontEn ${styles.title}`}>
              <span>DAICHI</span>
              <span>KUBOKAWA</span>
            </h1>

            <p className={styles.description}>
              自然と伝わる、心地よい体験をデザインする。
            </p>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
