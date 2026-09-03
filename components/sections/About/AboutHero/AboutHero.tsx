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
              課題を整理し、よりよい体験を形にする。
            </p>

            <p className={styles.text}>
              オフィス機器関連ソフトウェア・業務システムの開発に約7年携わり、要件・仕様の整理から設計、品質検証、改修まで、プロダクト開発のさまざまな工程を経験してきました。
            </p>

            <p className={styles.text}>
              開発の中で大切にしてきたのは、目の前の機能だけを見るのではなく、「なぜ必要なのか」「誰がどのように使うのか」を捉え、関係者の認識を揃えながら、解くべき課題を明確にしていくことです。
            </p>

            <p className={styles.text}>
              現在はUI/UXデザインや生成AIを活用したプロトタイピングにも領域を広げています。これまで培ってきた技術・仕様・品質への理解にUXの視点も掛け合わせ、ユーザーや顧客の課題を捉え、仮説を形にして検証しながら、よりよいサービスやシステムをつくることを目指しています。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
