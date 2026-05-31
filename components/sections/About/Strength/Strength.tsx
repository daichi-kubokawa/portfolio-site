import styles from "./Strength.module.css";

const strengths = [
  {
    title: "課題を構造化する",
    text: "情報が多く判断に迷いやすい場面で、誰が・どの状態で・何を判断するのかを整理します。仕様書や業務フローを読み解いてきた経験を活かし、表面的な要望だけでなく、背景にあるつまずきや認識ずれを捉えることを大切にしています。",
  },
  {
    title: "次に進みやすい情報設計",
    text: "利用者が迷わず進めるように、情報の優先度、状態表示、導線、フィードバックを整理します。複雑な情報や内部の仕組みも、利用者や関係者が同じ理解で判断できる形に落とし込むことを意識しています。",
  },
  {
    title: "仮説から形にして検証する",
    text: "課題設定、仮説、情報設計、UI設計、プロトタイピングまでを行き来しながら、考えを具体的な画面や体験に落とし込みます。実装や運用を想定しながら、現実的に使える設計を目指しています。",
  },
];

export default function Strength() {
  return (
    <section className={styles.root}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.headingArea}>
            <p className={`uppercaseLabel ${styles.eyebrow}`}>Strength</p>
            <h2 className={styles.title}>強み</h2>
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
