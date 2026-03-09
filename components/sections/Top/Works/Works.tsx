import styles from "./Works.module.css";
import { works } from "@/data/works";
import WorkCard from "@/components/ui/WorkCard/WorkCard";

export default function Works() {
  return (
    <section id="works" className={styles.root}>
      <div className="container">
        <div className={styles.heading}>
          <p className={`uppercaseLabel ${styles.eyebrow}`}>
            Selected Projects
          </p>
          <h2 className={styles.title}>Works</h2>
          <p className={styles.intro}>
            UI/UXデザイン、サービスデザイン、Webデザインの制作事例を掲載しています。
          </p>
        </div>

        <div className={styles.grid}>
          {works.map((work) => (
            <WorkCard key={work.slug} work={work} />
          ))}
        </div>
      </div>
    </section>
  );
}
