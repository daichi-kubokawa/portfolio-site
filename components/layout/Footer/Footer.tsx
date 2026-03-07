import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.root}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.copy}>
          &copy; {new Date().getFullYear()} Daichi Kubokawa
        </p>

        <nav className={styles.nav}>
          <Link href="/#works" className={styles.link}>
            Works
          </Link>

          <Link href="/about" className={styles.link}>
            About
          </Link>

          <a href="mailto:contact@daichikubokawa.com" className={styles.link}>
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}
