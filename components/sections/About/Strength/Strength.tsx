import styles from "./Strength.module.css";

const strengths = [
  {
    title: "本質を捉える",
    text: "表面的な要望だけでなく、迷いや使いにくさの背景まで捉えながら、本当に解くべき課題を整理します。",
  },
  {
    title: "自然に伝える",
    text: "複雑な情報や流れを整理し、使う人が迷わず理解できるUIと体験へ落とし込むことを大切にしています。",
  },
  {
    title: "行き来してつくる",
    text: "リサーチや設計で得た考えをUIに落とし込み、実装の視点も持ちながら一貫して形にします。",
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
