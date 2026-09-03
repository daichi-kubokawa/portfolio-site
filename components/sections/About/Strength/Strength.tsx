"use client";

import { useState } from "react";
import styles from "./Strength.module.css";

const strengths = [
  {
    title: "課題を構造化する",
    text: "要望や事象をそのまま受け取るのではなく、背景・目的・制約・影響範囲を整理し、何を解くべきかを明確にします。仕様や業務フローを読み解いてきた経験を活かし、表面的な問題だけでなく、その裏にある認識ずれや判断の難しさまで捉えることを大切にしています。",
  },
  {
    title: "関係者の認識を揃える",
    text: "立場によって異なる情報や前提を整理し、関係者が同じ理解で判断できる状態をつくります。仕様書や説明資料の作成、レビュー、品質検証を通じて培った経験を活かし、曖昧な内容を具体化しながら、次の意思決定につなげることを意識しています。",
  },
  {
    title: "仮説を形にして検証する",
    text: "課題設定から仮説を立て、情報整理やUI/UX設計、プロトタイピングなどを通じて、早い段階で具体的な形にします。生成AIも活用しながら検証可能な状態まで落とし込み、フィードバックをもとに改善を重ねることで、考えるだけで終わらせず次の判断につなげます。",
  },
];

export default function Strength() {
  const [openItems, setOpenItems] = useState<boolean[]>(
    strengths.map(() => false),
  );

  const handleToggle = (index: number) => {
    setOpenItems((current) =>
      current.map((isOpen, i) => (i === index ? !isOpen : isOpen)),
    );
  };

  return (
    <section className={styles.root}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.headingArea}>
            <p className={`uppercaseLabel ${styles.eyebrow}`}>Strength</p>
            <h2 className={styles.title}>強み</h2>
          </div>

          <div className={styles.list}>
            {strengths.map((strength, index) => {
              const isOpen = openItems[index];

              return (
                <article key={strength.title} className={styles.item}>
                  <button
                    type="button"
                    className={styles.cardButton}
                    onClick={() => handleToggle(index)}
                    aria-expanded={isOpen}
                  >
                    <div className={styles.cardHeader}>
                      <h3 className={styles.itemTitle}>{strength.title}</h3>

                      <span
                        className={`${styles.icon} ${
                          isOpen ? styles.iconOpen : ""
                        }`}
                        aria-hidden="true"
                      />
                    </div>

                    <div
                      className={`${styles.content} ${
                        isOpen ? styles.contentOpen : ""
                      }`}
                    >
                      <div className={styles.contentInner}>
                        <p className={styles.text}>{strength.text}</p>
                      </div>
                    </div>
                  </button>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
