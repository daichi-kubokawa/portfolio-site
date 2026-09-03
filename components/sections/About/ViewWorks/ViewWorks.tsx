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
            業務課題やユーザー課題を起点に、課題整理・仮説設計・要件整理から、UI/UX設計やプロトタイピングまで取り組んだ事例を掲載しています。アウトプットだけでなく、どのように課題を捉え、判断し、検証したかというプロセスもまとめています。
          </p>

          <Link href="/#works" className={styles.button}>
            制作事例を見る
          </Link>
        </div>
      </div>
    </section>
  );
}
