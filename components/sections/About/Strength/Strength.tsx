import styles from "./Strength.module.css";

const strengths = [
  {
    title: "業務を構造化する",
    text: "仕様書や業務フローを読み解き、誰が・どの状態で・何を判断するのかを整理します。設計書や説明資料の作成、品質検証の経験を活かし、背景にあるつまずきや認識ずれを捉えることを大切にしています。",
  },
  {
    title: "迷わず使える情報設計",
    text: "利用者が次に何をすればよいか分かるように、情報の優先度、状態表示、導線、フィードバックを整理します。複雑な仕様や内部処理も、関係者が同じ理解で判断できる形に落とし込むことを意識しています。",
  },
  {
    title: "仮説から形にする",
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
