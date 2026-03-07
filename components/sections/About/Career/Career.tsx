import styles from "./Career.module.css";

const careers = [
  {
    year: "2020/3",
    text: "4年制大学を卒業",
  },
  {
    year: "2020/4",
    text: "アルバム会社に新卒で入社",
  },
  {
    year: "2022/5",
    text: "デジLIGに入学",
  },
  {
    year: "2023/2",
    text: "職業訓練を始める",
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
