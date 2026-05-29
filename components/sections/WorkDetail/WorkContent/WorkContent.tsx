"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";

import styles from "./WorkContent.module.css";
import type { WorkContent as WorkContentType } from "@/types/work";
import FadeInOnScroll from "@/components/FadeInOnScroll";

type Props = {
  content: WorkContentType[];
};

export default function WorkContent({ content }: Props) {
  const [openIndex, setOpenIndex] = useState<number>(-1);

  const imageSlides = useMemo(
    () =>
      content
        .filter(
          (block): block is Extract<WorkContentType, { type: "image" }> =>
            block.type === "image",
        )
        .map((block) => ({
          src: block.src,
          alt: block.alt,
          width: block.width,
          height: block.height,
          title: block.caption,
        })),
    [content],
  );

  let imageCursor = -1;

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

                <div className={styles.textGroup}>
                  {block.body.split("\n\n").map((paragraph) => (
                    <p key={paragraph} className={styles.text}>
                      {paragraph}
                    </p>
                  ))}
                </div>
                {block.links && block.links.length > 0 && (
                  <div className={styles.linkGroup}>
                    {block.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`fontEn ${styles.button}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </section>
            </FadeInOnScroll>
          );
        }

        if (block.type === "image") {
          imageCursor += 1;
          const currentImageIndex = imageCursor;

          return (
            <FadeInOnScroll key={`${block.type}-${index}`}>
              <figure className={styles.figure}>
                <button
                  type="button"
                  className={styles.figureButton}
                  onClick={() => setOpenIndex(currentImageIndex)}
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

      <Lightbox
        open={openIndex >= 0}
        close={() => setOpenIndex(-1)}
        index={openIndex >= 0 ? openIndex : 0}
        slides={imageSlides}
        plugins={[Counter, Zoom]}
        controller={{ closeOnBackdropClick: true }}
        carousel={{ finite: false }}
        counter={{ container: { style: { top: 20, bottom: "auto" } } }}
        zoom={{
          maxZoomPixelRatio: 2,
          zoomInMultiplier: 2,
          doubleTapDelay: 300,
          doubleClickDelay: 300,
          scrollToZoom: true,
        }}
        render={{
          buttonPrev: imageSlides.length <= 1 ? () => null : undefined,
          buttonNext: imageSlides.length <= 1 ? () => null : undefined,
        }}
      />
    </>
  );
}
