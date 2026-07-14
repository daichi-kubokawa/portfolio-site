import styles from "./Skills.module.css";

const skillGroups = [
  {
    label: "開発理解・品質観点",
    items: [
      "仕様理解",
      "要件整理",
      "仕様書作成",
      "テスト設計",
      "品質検証",
      "自動化テスト",
      "業務改善",
    ],
  },
  {
    label: "デザイン",
    items: [
      "UI設計",
      "UX設計",
      "情報設計",
      "ワイヤーフレーム",
      "プロトタイピング",
    ],
  },
  {
    label: "企画・設計",
    items: [
      "課題定義",
      "仮説設計",
      "ユーザーフロー",
      "カスタマージャーニーマップ",
      "競合分析",
    ],
  },
  {
    label: "ツール",
    items: [
      "Figma",
      "FigJam",
      "Miro",
      "Illustrator",
      "Photoshop",
      "VS Code",
      "GitHub",
      "VBA",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
];

export default function Skills() {
  return (
    <section className={styles.root}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.headingArea}>
            <p className={`uppercaseLabel ${styles.eyebrow}`}>Skills</p>
            <h2 className={styles.title}>スキル</h2>
            <p className={styles.description}>
              実務で培った開発理解・品質観点と、UI/UX学習・制作で取り組んだ設計スキルを整理しています。
            </p>
          </div>

          <div className={styles.groups}>
            {skillGroups.map((group) => (
              <section key={group.label} className={styles.group}>
                <p className={styles.groupLabel}>{group.label}</p>

                <ul className={styles.list}>
                  {group.items.map((skill) => (
                    <li key={skill} className={styles.tag}>
                      {skill}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
