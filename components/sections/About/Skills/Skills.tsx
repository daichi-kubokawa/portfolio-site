import styles from "./Skills.module.css";

const skillGroups = [
  {
    label: "Product / Planning",
    items: [
      "課題定義",
      "要件整理",
      "仮説設計",
      "競合分析",
      "ユーザーフロー",
      "カスタマージャーニーマップ",
      "業務フロー整理",
      "仕様整理",
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
      "仕様理解",
      "仕様書作成",
      "基本設計",
      "テスト設計",
      "品質検証",
      "自動化テスト",
      "不具合分析",
      "業務改善",
    ],
  },
  {
    label: "AI / Tools",
    items: [
      "Figma",
      "FigJam",
      "Figma Make",
      "Miro",
      "Claude Code",
      "NotebookLM",
      "Gemini",
      "GitHub",
      "VS Code",
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
