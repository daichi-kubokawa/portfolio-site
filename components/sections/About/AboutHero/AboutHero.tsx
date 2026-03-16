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
              無意識の心地よさまで含めて、自然と伝わる体験を考えています。
            </p>

            <p className={styles.text}>
              神奈川県出身。音楽活動やSEの経験を経て、現在はUI/UXデザインを中心に学んでいます。
            </p>

            <p className={styles.text}>
              制作では、見た目を整えるだけでなく、なぜ迷うのか、どこで伝わりにくくなるのかを考えながら、情報や体験の流れを整理しています。表面的な課題だけでなく、その背景にある感情や無意識の違和感にも目を向けることを大切にしています。
            </p>

            <p className={styles.text}>
              リサーチからUI、実装まで行き来しながら、使う人にとって自然で心地よい体験を形にできるデザイナーを目指しています。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
