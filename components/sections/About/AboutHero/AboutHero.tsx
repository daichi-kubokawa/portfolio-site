import Image from "next/image";
import styles from "./AboutHero.module.css";

export default function AboutHero() {
  return (
    <section className={styles.root}>
      <div className="container">
        <div className={styles.heading}>
          <p className={`uppercaseLabel ${styles.eyebrow}`}>About</p>
          <h1 className={styles.title}>窪川 大地</h1>
        </div>

        <div className={styles.content}>
          <div className={styles.imageWrap}>
            <Image
              src="/images/about/profile.webp"
              alt="Daichi Kubokawa"
              fill
              className={styles.image}
            />
          </div>

          <div className={styles.textArea}>
            <p className={styles.lead}>
              複雑な情報と迷いを整理し、次に進みやすい体験へ。
            </p>

            <p className={styles.text}>
              元SESエンジニアとして、複合機・印刷系システムや業務システムに携わってきました。
              仕様理解、設計書・説明資料の作成、テスト設計、品質検証、改修対応を通じて、仕様と現場運用の両面からシステムに関わってきました。
            </p>

            <p className={styles.text}>
              前職では、確認作業の効率化や不具合の早期発見、関係者間の認識ずれの整理にも取り組みました。
              誰が、どの状態で、何を判断する必要があるのかを整理し、関係者が同じ理解で進められる形にすることを大切にしてきました。
            </p>

            <p className={styles.text}>
              仕様や不具合を整理する中で、問題の原因は機能そのものだけでなく、情報の伝わり方、判断のしづらさ、認識ずれにもあると感じるようになりました。
              現在はその経験を活かし、情報が多く判断に迷いやすい場面でも、利用者が納得して次の一歩に進めるUI/UX設計に取り組んでいます。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
