import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={`${styles.root} section`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <h1 className={styles.title}>
            DAICHI
            <br />
            KUBOKAWA
            <br />
            PORTFOLIO
          </h1>

          <p className={styles.description}>
            UI / UX Design × Frontend Development
          </p>
        </div>

        <div className={styles.visual}>Visual</div>
      </div>
    </section>
  );
}
