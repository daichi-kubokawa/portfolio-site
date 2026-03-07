import styles from "./Strength.module.css";

const strengths = [
  {
    title: "情報を整理して、伝わる形にすること",
    text: "要件や考えを整理し、見る人に伝わりやすい情報設計やUIに落とし込むことを意識しています。",
  },
  {
    title: "デザインと実装をつなげて考えられること",
    text: "Figmaでの設計だけでなく、Next.jsで実装する視点も持ちながら制作を進めています。",
  },
  {
    title: "学びながら改善し続けること",
    text: "わからないことをそのままにせず、試しながら理解し、少しずつ精度を上げていくのが得意です。",
  },
];

export default function Strength() {
  return (
    <section className={styles.root}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.headingArea}>
            <h2 className={styles.title}>Strength</h2>
            <p className={styles.caption}>強み</p>
          </div>

          <div className={styles.list}>
            {strengths.map((strength) => (
              <article key={strength.title} className={styles.item}>
                <h3 className={styles.itemTitle}>{strength.title}</h3>
                <p className={styles.text}>{strength.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
