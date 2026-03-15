import Link from "next/link";
import styles from "./ViewWorks.module.css";

export default function ViewWorks() {
  return (
    <section className={styles.root}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.heading}>
            <p className={`uppercaseLabel ${styles.eyebrow}`}>Works</p>
            <h2 className={styles.title}>制作事例</h2>
          </div>

          <p className={styles.text}>
            これまでに制作したUI/UXデザインやサービスデザインの事例を掲載しています。
          </p>

          <Link href="/#works" className={`fontEn ${styles.button}`}>
            View Works
          </Link>
        </div>
      </div>
    </section>
  );
}
