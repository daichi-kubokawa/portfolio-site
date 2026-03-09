import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.root}>
      <div className={`container ${styles.inner}`}>
        <p className={`fontEn ${styles.copy}`}>
          &copy; {new Date().getFullYear()} Daichi Kubokawa
        </p>

        <nav className={styles.nav} aria-label="Footer navigation">
          <Link href="/#works" className={`fontEn ${styles.link}`}>
            Works
          </Link>

          <Link href="/about" className={`fontEn ${styles.link}`}>
            About
          </Link>

          <a
            href="mailto:contact@daichikubokawa.com"
            className={`fontEn ${styles.link}`}
          >
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}
