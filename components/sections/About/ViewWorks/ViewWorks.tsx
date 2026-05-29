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
            業務改善、体験設計、サービスデザインを中心に、課題設定からUI設計・プロトタイピングまで取り組んだ制作事例を掲載しています。
          </p>

          <Link href="/#works" className={`fontEn ${styles.button}`}>
            View Works
          </Link>
        </div>
      </div>
    </section>
  );
}
