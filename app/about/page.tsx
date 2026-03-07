import type { Metadata } from "next";
import styles from "./page.module.css";
import AboutHero from "@/components/sections/About/AboutHero/AboutHero";
import Career from "@/components/sections/About/Career/Career";
import Strength from "@/components/sections/About/Strength/Strength";
import Skills from "@/components/sections/About/Skills/Skills";
import Pieces from "@/components/sections/About/Pieces/Pieces";

export const metadata: Metadata = {
  title: "About",
  description:
    "UI/UXデザイナー窪川大地のプロフィール。サービスデザイン、UXデザイン、Webデザインを中心に活動しています。",
};

export default function AboutPage() {
  return (
    <main className={styles.root}>
      <AboutHero />
      <Career />
      <Strength />
      <Skills />
      <Pieces />
    </main>
  );
}
