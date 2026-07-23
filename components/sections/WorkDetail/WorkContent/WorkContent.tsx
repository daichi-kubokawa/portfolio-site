"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";

import FadeInOnScroll from "@/components/FadeInOnScroll";
import type { WorkContent as WorkContentType } from "@/types/work";

import styles from "./WorkContent.module.css";

type Props = {
  content: WorkContentType[];
};

type ImageBlock = Extract<WorkContentType, { type: "image" }>;

function isImageBlock(block: WorkContentType): block is ImageBlock {
  return block.type === "image";
}

function getImageIndex(
  content: readonly WorkContentType[],
  contentIndex: number,
): number {
  const imageCount = content
    .slice(0, contentIndex + 1)
    .filter(isImageBlock).length;

  return imageCount - 1;
}

export default function WorkContent({ content }: Props) {
  const [openIndex, setOpenIndex] = useState(-1);

  const imageSlides = useMemo(
    () =>
      content.filter(isImageBlock).map((block) => ({
        src: block.src,
        alt: block.alt,
        width: block.width,
        height: block.height,
        title: block.caption,
      })),
    [content],
  );

  return (
    <>
      {content.map((block, index) => {
        const blockKey = `${block.type}-${index}`;

        if (block.type === "text") {
          const titleFontClass =
            block.titleFont === "en" ? "fontEn" : "fontSans";

          const paragraphs = block.body.split("\n\n");

          return (
            <FadeInOnScroll key={blockKey}>
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
                  {paragraphs.map((paragraph, paragraphIndex) => (
                    <p
                      key={`${blockKey}-paragraph-${paragraphIndex}`}
                      className={styles.text}
                    >
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
          const currentImageIndex = getImageIndex(content, index);

          return (
            <FadeInOnScroll key={blockKey}>
              <figure className={styles.figure}>
                <button
                  type="button"
                  className={styles.figureButton}
                  onClick={() => setOpenIndex(currentImageIndex)}
                  aria-label={`${block.alt}を拡大表示`}
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

        if (block.type === "figma") {
          const titleFontClass =
            block.titleFont === "en" ? "fontEn" : "fontSans";

          const deviceClass =
            block.device === "mobile" ? styles.mobile : styles.desktop;

          const embedUrl =
            `https://www.figma.com/embed?embed_host=share&url=` +
            encodeURIComponent(block.href);

          const paragraphs = block.body?.split("\n\n") ?? [];

          return (
            <FadeInOnScroll key={blockKey}>
              <section className={styles.section}>
                {block.label && (
                  <p className={`uppercaseLabel ${styles.label}`}>
                    {block.label}
                  </p>
                )}

                <h2 className={`${titleFontClass} ${styles.heading}`}>
                  {block.title}
                </h2>

                {paragraphs.length > 0 && (
                  <div className={styles.textGroup}>
                    {paragraphs.map((paragraph, paragraphIndex) => (
                      <p
                        key={`${blockKey}-paragraph-${paragraphIndex}`}
                        className={styles.text}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}

                <div className={`${styles.figmaEmbed} ${deviceClass}`}>
                  <iframe
                    src={embedUrl}
                    title={`${block.title}のFigmaプロトタイプ`}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </section>
            </FadeInOnScroll>
          );
        }

        return null;
      })}

      <Lightbox
        open={openIndex >= 0}
        close={() => setOpenIndex(-1)}
        index={Math.max(openIndex, 0)}
        slides={imageSlides}
        plugins={[Counter, Zoom]}
        controller={{
          closeOnBackdropClick: true,
        }}
        carousel={{
          finite: false,
        }}
        counter={{
          container: {
            style: {
              top: 20,
              bottom: "auto",
            },
          },
        }}
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
