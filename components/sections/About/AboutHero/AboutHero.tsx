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
              課題を整理し、プロダクトを前に進める。
            </p>

            <p className={styles.text}>
              オフィス機器関連ソフトウェア・業務システムの開発に約7年携わり、
              要件・仕様の整理から設計、品質検証、改修まで、プロダクト開発のさまざまな工程を経験してきました。
            </p>

            <p className={styles.text}>
              開発の中で大切にしてきたのは、目の前の機能だけを見るのではなく、
              「なぜ必要なのか」「誰がどのように使うのか」を捉え、
              関係者の認識を揃えながら、次に判断できる状態をつくることです。
            </p>

            <p className={styles.text}>
              現在はUI/UXや生成AIを活用したプロトタイピングにも領域を広げ、
              ユーザー体験・技術・品質の複数の視点から仮説を具体化し、検証することに取り組んでいます。
              これまでの経験を活かし、プロダクトの方向性や優先順位の意思決定に関わりながら、
              チームで価値を形にしていくことを目指しています。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
