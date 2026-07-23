import HeroBird from "./HeroBird";

import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.root}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <p className={`uppercaseLabel ${styles.eyebrow}`}>
            QA / UI・UX Design
          </p>

          <h1 className={`fontEn ${styles.title}`}>
            <span>DAICHI</span>
            <span>KUBOKAWA</span>
          </h1>

          <p className={styles.description}>
            情報が多く迷いやすい場面を、選びやすい体験へ。
          </p>
        </div>
      </div>

      <HeroBird />
    </section>
  );
}
