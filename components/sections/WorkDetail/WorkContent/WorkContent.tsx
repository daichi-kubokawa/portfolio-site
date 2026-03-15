"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./WorkContent.module.css";
import type { WorkContent as WorkContentType } from "@/types/work";
import FadeInOnScroll from "@/components/FadeInOnScroll";

type Props = {
  content: WorkContentType[];
};

type ActiveImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export default function WorkContent({ content }: Props) {
  const [activeImage, setActiveImage] = useState<ActiveImage | null>(null);

  useEffect(() => {
    if (!activeImage) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImage]);

  const openImage = (image: ActiveImage) => {
    setActiveImage(image);
  };

  const closeImage = () => {
    setActiveImage(null);
  };

  return (
    <>
      {content.map((block, index) => {
        if (block.type === "text") {
          const titleFontClass =
            block.titleFont === "en" ? "fontEn" : "fontSans";

          return (
            <FadeInOnScroll key={`${block.type}-${index}`}>
              <section className={styles.section}>
                {block.label && (
                  <p className={`uppercaseLabel ${styles.label}`}>
                    {block.label}
                  </p>
                )}

                <h2 className={`${titleFontClass} ${styles.heading}`}>
                  {block.title}
                </h2>

                <p className={styles.text}>{block.body}</p>

                {block.linkHref && block.linkLabel && (
                  <Link
                    href={block.linkHref}
                    className={`fontEn ${styles.button}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {block.linkLabel}
                  </Link>
                )}
              </section>
            </FadeInOnScroll>
          );
        }

        if (block.type === "image") {
          return (
            <FadeInOnScroll key={`${block.type}-${index}`}>
              <figure className={styles.figure}>
                <button
                  type="button"
                  className={styles.figureButton}
                  onClick={() =>
                    openImage({
                      src: block.src,
                      alt: block.alt,
                      width: block.width,
                      height: block.height,
                    })
                  }
                  aria-label={`${block.alt} を拡大表示`}
                >
                  <Image
                    src={block.src}
                    alt={block.alt}
                    width={block.width}
                    height={block.height}
                    className={styles.figureImage}
                    sizes="100vw"
                    quality={95}
                    unoptimized
                  />
                </button>

                {block.caption && (
                  <figcaption className={styles.caption}>
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            </FadeInOnScroll>
          );
        }

        return null;
      })}

      {activeImage && (
        <div
          className={styles.overlay}
          onClick={closeImage}
          role="dialog"
          aria-modal="true"
          aria-label="画像の拡大表示"
        >
          <button
            type="button"
            className={styles.overlayClose}
            onClick={closeImage}
            aria-label="閉じる"
          >
            <span className="material-symbols-outlined">close</span>
          </button>

          <div
            className={styles.overlayInner}
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              width={activeImage.width}
              height={activeImage.height}
              className={styles.overlayImage}
              quality={95}
              unoptimized
            />
          </div>
        </div>
      )}
    </>
  );
}
