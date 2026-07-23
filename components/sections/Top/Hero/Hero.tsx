import HeroBird from "./HeroBird";

import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.root}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <p className={`uppercaseLabel ${styles.eyebrow}`}>
            UI/UX Design / Engineering
          </p>

          <h1 className={`fontEn ${styles.title}`}>
            <span>DAICHI</span>
            <span>KUBOKAWA</span>
          </h1>
        </div>
      </div>

      <HeroBird />
    </section>
  );
}
