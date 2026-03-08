import styles from "./Career.module.css";

const careers = [
  {
    year: "2008/3",
    text: "神奈川県立生田東高等学校 卒業",
  },
  {
    year: "2008/4",
    text: "音楽活動を開始（作曲・音源制作・動画作品への楽曲提供など）",
  },
  {
    year: "2018/6",
    text: "株式会社シャインテック 入社",
  },
  {
    year: "2025/4",
    text: "デジタルハリウッド 本科UI/UXデザイン専攻 入学",
  },
  {
    year: "2025/10",
    text: "株式会社シャインテック 退社",
  },
  {
    year: "2026/3",
    text: "デジタルハリウッド 本科UI/UXデザイン専攻 修了予定",
  },
];

export default function Career() {
  return (
    <section className={styles.root}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.headingArea}>
            <h2 className={styles.title}>Career</h2>
            <p className={styles.caption}>経歴</p>
          </div>

          <ul className={styles.list}>
            {careers.map((career) => (
              <li key={career.year} className={styles.item}>
                <p className={styles.year}>{career.year}</p>
                <p className={styles.text}>{career.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
