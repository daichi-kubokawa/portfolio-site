import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.root}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <p className={`uppercaseLabel ${styles.eyebrow}`}>
            UI / UX Designer & Frontend Learner
          </p>

          <h1 className={`fontEn ${styles.title}`}>DAICHI KUBOKAWA</h1>

          <p className={styles.description}>
            UI/UXデザインとフロントエンド開発を学びながら、
            情報を整理し、伝わる形に落とし込むことを意識して制作しています。
          </p>

          <div className={styles.actions}>
            <Link href="/#works" className={`fontEn ${styles.primaryLink}`}>
              View Works
            </Link>

            <Link href="/about" className={`fontEn ${styles.secondaryLink}`}>
              About Me
            </Link>
          </div>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <div className={styles.visualInner}>
            <span className={`uppercaseLabel ${styles.visualLabel}`}>
              Portfolio
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
