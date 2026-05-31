import styles from "./Certificates.module.css";

const certificates = [
  "応用情報技術者試験",
  "基本情報技術者試験",
  "色彩検定 3級",
];

export default function Certificates() {
  return (
    <section className={styles.root}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.headingArea}>
            <p className={`uppercaseLabel ${styles.eyebrow}`}>Certificates</p>
            <h2 className={styles.title}>資格</h2>
            <p className={styles.description}>
              IT・情報処理の基礎理解に加え、UI設計や品質観点を支える学習歴として掲載しています。
            </p>
          </div>

          <ul className={styles.list}>
            {certificates.map((certificate) => (
              <li key={certificate} className={styles.item}>
                {certificate}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
