import Image from "next/image";
import styles from "./WorkContent.module.css";
import type { WorkContent as WorkContentType } from "@/types/work";

type Props = {
  content: WorkContentType[];
};

export default function WorkContent({ content }: Props) {
  return (
    <>
      {content.map((block, index) => {
        if (block.type === "text") {
          return (
            <section key={`${block.type}-${index}`} className={styles.section}>
              <h2 className={`fontEn ${styles.heading}`}>{block.title}</h2>
              <p className={styles.text}>{block.body}</p>
            </section>
          );
        }

        if (block.type === "image") {
          return (
            <figure key={`${block.type}-${index}`} className={styles.figure}>
              <div className={styles.figureImageWrap}>
                <Image
                  src={block.src}
                  alt={block.alt}
                  fill
                  className={styles.figureImage}
                />
              </div>

              {block.caption && (
                <figcaption className={styles.caption}>
                  {block.caption}
                </figcaption>
              )}
            </figure>
          );
        }

        return null;
      })}
    </>
  );
}
