import HeroBird from "./HeroBird";

import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.root}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <h1 className={`fontEn ${styles.title}`}>
            <span>DAICHI</span>
            <span>KUBOKAWA</span>
          </h1>
          <p className={`uppercaseLabel ${styles.eyebrow}`}>
            UI/UX Design | Engineering
          </p>
        </div>
      </div>

      <HeroBird />
    </section>
  );
}
