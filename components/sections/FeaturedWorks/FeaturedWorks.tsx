import styles from "./FeaturedWorks.module.css";
import { works } from "@/data/works";
import WorkCard from "@/components/ui/WorkCard/WorkCard";

export default function FeaturedWorks() {
  return (
    <section className={`${styles.root} section`}>
      <div className="container">
        <div className={styles.heading}>
          <p className={styles.eyebrow}>Selected Projects</p>
          <h2 className={styles.title}>Featured Works</h2>
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
