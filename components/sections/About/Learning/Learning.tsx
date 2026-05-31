import styles from "./Learning.module.css";

const learningItems = [
  {
    title: "デジタルハリウッド",
    course: "本科 UI/UXデザイン専攻 サービスデザインコース",
    period: "2025.04 - 2026.03",
    text: "UX基礎、サービス企画設計、情報設計、UI設計、プロトタイピング、Webサービス制作を学びました。",
  },
];

export default function Learning() {
  return (
    <section className={styles.root}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.headingArea}>
            <p className={`uppercaseLabel ${styles.eyebrow}`}>Learning</p>
            <h2 className={styles.title}>学習歴</h2>
            <p className={styles.description}>
              UI/UXデザインへの転向に向けて、ユーザー視点の設計、情報設計、UI制作を体系的に学びました。
            </p>
          </div>

          <div className={styles.list}>
            {learningItems.map((item) => (
              <article key={item.title} className={styles.item}>
                <div className={styles.itemHeader}>
                  <div>
                    <h3 className={styles.itemTitle}>{item.title}</h3>
                    <p className={styles.course}>{item.course}</p>
                  </div>

                  <p className={`fontEn ${styles.period}`}>{item.period}</p>
                </div>

                <p className={styles.text}>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
