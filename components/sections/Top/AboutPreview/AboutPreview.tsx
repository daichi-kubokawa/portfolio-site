import Link from "next/link";
import styles from "./AboutPreview.module.css";

export default function AboutPreview() {
  return (
    <section className={styles.root}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.headingArea}>
            <p className={styles.eyebrow}>About</p>
            <h2 className={styles.title}>A little about me</h2>
          </div>

          <div className={styles.content}>
            <p className={styles.text}>
              神奈川県出身。音楽活動やSEの経験を経て、
              現在はUI/UXデザインとフロントエンドを学んでいます。
              情報を整理し、伝わる形に落とし込むことを意識して制作しています。
            </p>

            <Link href="/about" className={styles.link}>
              View About
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
