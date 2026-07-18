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
