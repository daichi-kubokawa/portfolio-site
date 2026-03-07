import { Work } from "@/types/work";

export const works: Work[] = [
  {
    slug: "graduation-project",
    title: "Graduation Project",
    category: "Service Design",
    description: "卒業制作のサービスデザインプロジェクト。",
    thumbnail: "/images/works/graduation.jpg",
    role: "Service Design / UX Research",
    period: "2024 / 3 months",
    tools: ["Figma", "FigJam", "Notion"],
    content: [
      {
        type: "text",
        title: "Overview",
        body: "卒業制作として取り組んだサービスデザインプロジェクトです。課題整理からコンセプト設計、体験設計まで一貫して取り組みました。",
      },
      {
        type: "text",
        title: "Challenge",
        body: "ユーザーの課題が広く曖昧になりやすかったため、情報を整理しながら本質的な課題を見極めることが重要でした。",
      },
      {
        type: "image",
        src: "/images/works/graduation-detail-01.jpg",
        alt: "Graduation Project overview image",
        caption: "Project overview",
      },
      {
        type: "text",
        title: "Solution",
        body: "インタビューや整理を通して課題を絞り込み、ユーザーが迷わず価値を感じられる体験設計へ落とし込みました。",
      },
    ],
  },
  {
    slug: "resonote",
    title: "RESONOTE",
    category: "App Design",
    description: "SNSアプリのUIデザイン。",
    thumbnail: "/images/works/resonote.jpg",
    role: "UI Design / UX Design",
    period: "2024 / Hackathon",
    tools: ["Figma", "Illustrator"],
    content: [
      {
        type: "text",
        title: "Overview",
        body: "RESONOTEは、共通の趣味や感性をきっかけに人とつながることを目指したSNSアプリです。",
      },
      {
        type: "image",
        src: "/images/works/resonote-detail-01.jpg",
        alt: "RESONOTE main UI",
        caption: "Main UI screens",
      },
      {
        type: "text",
        title: "Problem",
        body: "初回利用時に機能の魅力や使い方が伝わりづらく、ユーザーが迷いやすいことが課題でした。",
      },
      {
        type: "text",
        title: "Design Approach",
        body: "導線整理と情報の優先順位を見直し、投稿・閲覧・つながりの流れが自然に理解できるUIを意識しました。",
      },
      {
        type: "image",
        src: "/images/works/resonote-detail-02.jpg",
        alt: "RESONOTE design process",
        caption: "Design process",
      },
    ],
  },
  {
    slug: "naterra",
    title: "Naterra",
    category: "Web Design",
    description: "ブランドサイトのUIデザイン。",
    thumbnail: "/images/works/naterra.jpg",
    role: "UI Design / Frontend",
    period: "2024",
    tools: ["Figma", "Next.js", "Vercel"],
    content: [
      {
        type: "text",
        title: "Overview",
        body: "Naterraはブランドの世界観を伝えるためのWebサイトデザインプロジェクトです。",
      },
      {
        type: "image",
        src: "/images/works/naterra-detail-01.jpg",
        alt: "Naterra website design",
        caption: "Website design",
      },
      {
        type: "text",
        title: "Challenge",
        body: "ブランドの雰囲気を損なわずに情報を整理し、閲覧しやすい構造にする必要がありました。",
      },
      {
        type: "text",
        title: "Output",
        body: "余白やタイポグラフィを活かしながら、視線の流れが自然になるレイアウトと実装を行いました。",
      },
    ],
  },
];
