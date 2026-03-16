import styles from "./Skills.module.css";

const skillGroups = [
  {
    label: "Design",
    items: ["Figma", "Miro", "Illustrator", "Photoshop"],
  },
  {
    label: "Front-end",
    items: ["HTML", "CSS", "JavaScript"],
  },
];

export default function Skills() {
  return (
    <section className={styles.root}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.headingArea}>
            <p className={`uppercaseLabel ${styles.eyebrow}`}>Skills</p>
            <h2 className={styles.title}>スキル</h2>
          </div>

          <div className={styles.groups}>
            {skillGroups.map((group) => (
              <div key={group.label} className={styles.group}>
                <p className={`fontEn ${styles.groupLabel}`}>{group.label}</p>

                <ul className={styles.list}>
                  {group.items.map((skill) => (
                    <li key={skill} className={`fontEn ${styles.tag}`}>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
