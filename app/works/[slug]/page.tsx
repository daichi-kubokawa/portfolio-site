import { notFound } from "next/navigation";
import { works } from "@/data/works";
import styles from "./page.module.css";

type Props = {
  params: {
    slug: string;
  };
};

export default function WorkDetailPage({ params }: Props) {
  const work = works.find((item) => item.slug === params.slug);

  if (!work) {
    notFound();
  }

  return (
    <main className={styles.root}>
      <div className="container">
        <article className={styles.article}>
          <p className={styles.category}>{work.category}</p>
          <h1 className={styles.title}>{work.title}</h1>
          <p className={styles.description}>{work.description}</p>

          <div className={styles.thumbnail}>
            <span>{work.title}</span>
          </div>

          <section className={styles.section}>
            <h2 className={styles.heading}>Overview</h2>
            <p className={styles.text}>
              このプロジェクトの概要をここに入れます。まずは仮テキストでOKです。
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>Problem</h2>
            <p className={styles.text}>どんな課題があったのかを記載します。</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>Solution</h2>
            <p className={styles.text}>どのように解決したかを書きます。</p>
          </section>
        </article>
      </div>
    </main>
  );
}
