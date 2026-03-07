import styles from "./SkillCard.module.css";
import { Skill } from "@/types/skill";

type Props = {
  skill: Skill;
};

export default function SkillCard({ skill }: Props) {
  return (
    <div className={styles.root}>
      <p className={styles.name}>{skill.name}</p>

      <div className={styles.icon} aria-hidden="true">
        {skill.icon ? skill.icon : "icon"}
      </div>
    </div>
  );
}
