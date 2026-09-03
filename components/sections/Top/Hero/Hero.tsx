import type { CSSProperties } from "react";
import HeroBird from "./HeroBird";
import styles from "./Hero.module.css";

const name = ["DAICHI", "KUBOKAWA"];

const CHAR_START_DELAY = 0.5;
const CHAR_INTERVAL = 0.05;
const CHAR_DURATION = 0.05;

const totalChars = name.join("").length;

const eyebrowDelay =
  CHAR_START_DELAY + (totalChars - 1) * CHAR_INTERVAL + CHAR_DURATION + 0.4;

export default function Hero() {
  let charIndex = 0;

  return (
    <section className={styles.root}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <h1 className={`fontEn ${styles.title}`}>
            {name.map((line) => (
              <span key={line} className={styles.line}>
                {line.split("").map((char) => {
                  const index = charIndex++;

                  return (
                    <span
                      key={`${line}-${index}`}
                      className={styles.char}
                      style={
                        {
                          "--char-delay": `${
                            CHAR_START_DELAY + index * CHAR_INTERVAL
                          }s`,
                        } as CSSProperties
                      }
                    >
                      {char}
                    </span>
                  );
                })}
              </span>
            ))}
          </h1>

          <p
            className={`uppercaseLabel ${styles.eyebrow}`}
            style={
              {
                "--eyebrow-delay": `${eyebrowDelay}s`,
              } as CSSProperties
            }
          >
            Design | Engineering
          </p>
        </div>
      </div>

      <HeroBird />
    </section>
  );
}
