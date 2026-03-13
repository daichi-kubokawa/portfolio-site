import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.root}>
      <div className={`container ${styles.inner}`}>
        <nav className={styles.nav} aria-label="Footer navigation">
          <Link href="/#works" className={`fontEn ${styles.link}`}>
            WORKS
          </Link>

          <Link href="/about" className={`fontEn ${styles.link}`}>
            ABOUT
          </Link>

          <a
            href="mailto:contact@daichikubokawa.com"
            className={`fontEn ${styles.link}`}
          >
            CONTACT
          </a>
        </nav>
        <p className={`fontEn ${styles.copy}`}>
          &copy; {new Date().getFullYear()} DAICHI KUBOKAWA
        </p>
      </div>
    </footer>
  );
}
