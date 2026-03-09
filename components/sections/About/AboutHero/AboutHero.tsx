import Image from "next/image";
import styles from "./AboutHero.module.css";

export default function AboutHero() {
  return (
    <section className={styles.root}>
      <div className="container">
        <div className={styles.heading}>
          <p className={`uppercaseLabel ${styles.eyebrow}`}>About me</p>
          <h1 className={styles.title}>
            こんにちは。
            <br />
            くぼかわだいちです。
          </h1>
        </div>

        <div className={styles.content}>
          <div className={styles.imageWrap}>
            <Image
              src="/images/about/profile.jpg"
              alt="Daichi Kubokawa"
              fill
              className={styles.image}
            />
          </div>

          <div className={styles.textArea}>
            <p className={styles.lead}>
              複雑な情報を整理し、伝わる体験へ落とし込むことを得意としています。
            </p>

            <p className={styles.text}>
              神奈川県出身。音楽活動やSEの経験を経て、現在はUI/UXデザインと
              フロントエンドを学んでいます。
            </p>

            <p className={styles.text}>
              情報を整理して、相手に伝わる形に落とし込むことが好きです。
              これまでの経験を活かしながら、使いやすく心地よい体験を作れる
              デザイナーを目指しています。
            </p>

            <p className={styles.text}>
              社会人経験を通じて、コミュニケーションや課題整理の大切さを学びました。
              その経験を、いまの制作にもつなげています。
            </p>

            <p className={styles.text}>
              UI/UXデザインとフロントエンドを行き来しながら、課題を整理し、
              伝わる形に落とし込むことを意識して制作しています。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
