import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { works } from "@/data/works";
import styles from "./page.module.css";
import WorkHero from "@/components/sections/WorkDetail/WorkHero/WorkHero";
import WorkMeta from "@/components/sections/WorkDetail/WorkMeta/WorkMeta";
import WorkContent from "@/components/sections/WorkDetail/WorkContent/WorkContent";
import NextProject from "@/components/sections/WorkDetail/NextProject/NextProject";

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
          <WorkHero work={work} />
          <WorkMeta work={work} />
          <WorkContent content={work.content} />
        </article>

        <NextProject work={nextWork} />
      </div>
    </main>
  );
}
