import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { works } from "@/data/works";
import styles from "./page.module.css";
import type { Metadata } from "next";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const work = works.find((item) => item.slug === slug);

  if (!work) {
    return {
      title: "Work",
    };
  }

  return {
    title: work.title,
    description: work.description,
    openGraph: {
      title: `${work.title} | Daichi Kubokawa`,
      description: work.description,
      images: work.thumbnail ? [work.thumbnail] : ["/ogp.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${work.title} | Daichi Kubokawa`,
      description: work.description,
      images: work.thumbnail ? [work.thumbnail] : ["/ogp.jpg"],
    },
  };
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;

  const currentIndex = works.findIndex((item) => item.slug === slug);
  const work = works[currentIndex];

  if (!work) {
    notFound();
  }

  const nextWork = works[(currentIndex + 1) % works.length];

  return (
    <main className={styles.root}>
      <div className="container">
        <article className={styles.article}>
          <header className={styles.header}>
            <p className={styles.category}>{work.category}</p>
            <h1 className={styles.title}>{work.title}</h1>
            <p className={styles.description}>{work.description}</p>
          </header>

          <div className={styles.thumbnail}>
            {work.thumbnail ? (
              <Image
                src={work.thumbnail}
                alt={work.title}
                fill
                className={styles.image}
              />
            ) : (
              <span>{work.title}</span>
            )}
          </div>

          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Role</span>
              <span>{work.role}</span>
            </div>

            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Period</span>
              <span>{work.period}</span>
            </div>

            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Tools</span>
              <span>{work.tools.join(", ")}</span>
            </div>
          </div>

          {work.content.map((block, index) => {
            if (block.type === "text") {
              return (
                <section
                  key={`${block.type}-${index}`}
                  className={styles.section}
                >
                  <h2 className={styles.heading}>{block.title}</h2>
                  <p className={styles.text}>{block.body}</p>
                </section>
              );
            }

            if (block.type === "image") {
              return (
                <figure
                  key={`${block.type}-${index}`}
                  className={styles.figure}
                >
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
        </article>

        <section className={styles.nextProject}>
          <p className={styles.nextLabel}>Next Project</p>

          <Link href={`/works/${nextWork.slug}`} className={styles.nextCard}>
            <div className={styles.nextCardBody}>
              <p className={styles.nextCategory}>{nextWork.category}</p>
              <h2 className={styles.nextTitle}>{nextWork.title}</h2>
              <span className={styles.nextLink}>View Project →</span>
            </div>
          </Link>
        </section>
      </div>
    </main>
  );
}
