import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.root}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>UI / UX Designer & Frontend Learner</p>

          <h1 className={styles.title}>
            Daichi
            <br />
            Kubokawa
          </h1>

          <p className={styles.description}>
            UI/UXデザインとフロントエンド開発を学びながら、
            情報を整理し、伝わる形に落とし込むことを意識して制作しています。
          </p>
        </div>

        <div className={styles.visual} aria-hidden="true">
          Visual
        </div>
      </div>
    </section>
  );
}
