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
              src="/images/about/profile.jpg"
              alt="Daichi Kubokawa"
              fill
              className={styles.image}
            />
          </div>

          <div className={styles.textArea}>
            <p className={styles.lead}>
              複雑な情報や感情を整理し、自然と伝わる体験へ落とし込むことを得意としています。
            </p>

            <p className={styles.text}>
              神奈川県出身。音楽活動やSEの経験を経て、現在はUI/UXデザインとフロントエンドを学び中。
            </p>

            <p className={styles.text}>
              これまでの経験を通して、相手の立場で物事を捉え、情報を整理し、伝わる形に整えることの大切さを学びました。いまの制作でも、見た目だけでなく「なぜそこで迷うのか」「どうすれば自然に使えるのか」を考えながら設計しています。
            </p>

            <p className={styles.text}>
              体験の流れを整理し、使いやすさと心地よさの両方を意識しながら、UI/UXデザインとフロントエンドを行き来して制作しています。
            </p>

            <p className={styles.text}>
              課題の背景を丁寧に捉え、複雑さをほどきながら、使う人にとって自然で伝わる体験をつくれるデザイナーを目指しています。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
