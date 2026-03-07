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
        <h2 className={styles.title}>Skills</h2>

        <ul className={styles.list}>
          {skills.map((skill) => (
            <li key={skill} className={styles.tag}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
