import type { Metadata } from "next";
import styles from "./page.module.css";
import AboutHero from "@/components/sections/About/AboutHero/AboutHero";
import Strength from "@/components/sections/About/Strength/Strength";
import Skills from "@/components/sections/About/Skills/Skills";
import Certificates from "@/components/sections/About/Certificates/Certificates";
import Learning from "@/components/sections/About/Learning/Learning";
import ViewWorks from "@/components/sections/About/ViewWorks/ViewWorks";
import FadeInOnScroll from "@/components/FadeInOnScroll";

export const metadata: Metadata = {
  title: "About",
  description:
    "UI/UXデザイナー窪川大地のプロフィール。サービスデザイン、UXデザイン、Webデザインを中心に活動しています。",
};

export default function AboutPage() {
  return (
    <main className={styles.root}>
      <FadeInOnScroll>
        <AboutHero />
      </FadeInOnScroll>

      <FadeInOnScroll>
        <Strength />
      </FadeInOnScroll>

      <FadeInOnScroll>
        <Skills />
      </FadeInOnScroll>

      <FadeInOnScroll>
        <Learning />
      </FadeInOnScroll>

      <FadeInOnScroll>
        <Certificates />
      </FadeInOnScroll>

      <FadeInOnScroll>
        <ViewWorks />
      </FadeInOnScroll>
    </main>
  );
}
