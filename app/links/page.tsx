import Link from "next/link";
import styles from "./page.module.css";

export default function LinksPage() {
  return (
    <main className={styles.root}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.list}>
            <Link href="/" className={styles.card}>
              <div className={styles.cardBody}>
                <h2 className={`fontEn ${styles.cardTitle}`}>Portfolio</h2>
                <p className={styles.cardNote}>ポートフォリオ</p>
              </div>
              <span className={`material-symbols-outlined ${styles.icon}`}>
                east
              </span>
            </Link>

            <a href="mailto:contact@daichikubokawa.com" className={styles.card}>
              <div className={styles.cardBody}>
                <h2 className={`fontEn ${styles.cardTitle}`}>Contact</h2>
                <p className={styles.cardNote}>お問い合わせ</p>
              </div>
              <span className={`material-symbols-outlined ${styles.icon}`}>
                east
              </span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
