import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.root}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.copy}>© 2026 Daichi Kubokawa</p>

        <a href="mailto:contact@daichikubokawa.com" className={styles.link}>
          Get in touch
        </a>
      </div>
    </footer>
  );
}
