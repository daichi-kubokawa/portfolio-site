import styles from "./LearningCertificates.module.css";

const learningItems = [
  {
    title: "デジタルハリウッド",
    course: "本科 UI/UXデザイン専攻 サービスデザインコース",
    period: "2025.04 - 2026.03 修了",
  },
];

const certificates = [
  "応用情報技術者試験",
  "基本情報技術者試験",
  "色彩検定 3級",
];

export default function LearningCertificates() {
  return (
    <section className={styles.root}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.headingArea}>
            <p className={`uppercaseLabel ${styles.eyebrow}`}>
              Learning & Certificates
            </p>
            <h2 className={styles.title}>学習・資格</h2>
          </div>

          <div className={styles.grid}>
            <section className={styles.card}>
              <p className={`uppercaseLabel ${styles.cardLabel}`}>Learning</p>

              <div className={styles.learningList}>
                {learningItems.map((item) => (
                  <article key={item.title} className={styles.learningItem}>
                    <div>
                      <h3 className={styles.itemTitle}>{item.title}</h3>
                      <p className={styles.course}>{item.course}</p>
                    </div>

                    <p className={`fontEn ${styles.period}`}>{item.period}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className={styles.card}>
              <p className={`uppercaseLabel ${styles.cardLabel}`}>
                Certificates
              </p>

              <ul className={styles.certificateList}>
                {certificates.map((certificate) => (
                  <li key={certificate} className={styles.certificateItem}>
                    {certificate}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
