import styles from "./Skills.module.css";

const skills = [
  "Figma",
  "Miro",
  "Illustrator",
  "Photoshop",
  "HTML",
  "CSS",
  "Next.js",
  "Vercel",
  "GitHub",
  "Notion",
];

export default function Skills() {
  return (
    <section className={styles.root}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.headingArea}>
            <p className={`uppercaseLabel ${styles.eyebrow}`}>Skills</p>
            <h2 className={styles.title}>できること</h2>
          </div>

          <ul className={styles.list}>
            {skills.map((skill) => (
              <li key={skill} className={`fontEn ${styles.tag}`}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
