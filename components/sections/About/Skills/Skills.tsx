import styles from "./Skills.module.css";

const skillGroups = [
  {
    label: "Product / Planning",
    items: [
      "課題定義",
      "要件整理",
      "仮説設計",
      "業務フロー整理",
      "仕様整理",
      "ユーザーフロー",
      "競合分析",
      "カスタマージャーニーマップ",
    ],
  },
  {
    label: "UX / Design",
    items: [
      "UI設計",
      "UX設計",
      "情報設計",
      "ワイヤーフレーム",
      "プロトタイピング",
      "ユーザーインタビュー",
    ],
  },
  {
    label: "Engineering / Quality",
    items: [
      "要件定義",
      "基本設計",
      "仕様書作成",
      "テスト設計",
      "品質保証",
      "不具合分析",
      "テスト自動化",
      "検証環境構築",
      "業務改善",
    ],
  },
  {
    label: "Technology / Tools",
    items: [
      "AWS",
      "Azure",
      "HTML",
      "CSS",
      "JavaScript",
      "Figma",
      "FigJam",
      "Figma Make",
      "Miro",
      "GitHub",
      "VS Code",
      "Claude Code",
      "Gemini",
      "NotebookLM",
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
