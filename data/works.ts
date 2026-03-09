import { Work } from "@/types/work";

export const works: Work[] = [
  {
    slug: "graduation-project",
    title: "ヒケタネ",
    titleFont: "sans",
    category: "Service Design",
    description:
      "楽器挫折者の再挑戦を支えるリハビリアプリのコンセプトプロジェクト。",
    thumbnail: "/images/works/graduation.jpg",
    role: "Service Design / UX Research",
    period: "2024 / 3 months",
    tools: ["Figma", "FigJam", "Notion"],
    result:
      "卒業制作として、課題整理からコンセプト設計、体験設計まで一貫して取り組んだサービスデザインプロジェクト。",
    content: [
      {
        type: "text",
        title: "Overview",
        body: "HIKETANEは、楽器を挫折してしまった人が再び演奏を楽しめるようにすることを目的としたリハビリアプリのコンセプトプロジェクトです。小さな成功体験を積み重ねることで、再挑戦のハードルを下げる体験設計を行いました。",
      },
      {
        type: "text",
        title: "Problem",
        body: "多くの人が楽器を始めても継続できずに挫折してしまいます。一度挫折した人は『また続かないのではないか』という心理的ハードルがあり、再挑戦のきっかけを持ちにくい状態にあります。",
      },
      {
        type: "text",
        title: "Research",
        body: "楽器経験者へのインタビューを行い、挫折理由を整理しました。主な要因は『上達の実感が得られない』『目標が曖昧』『モチベーションが維持しづらい』という点でした。",
      },
      {
        type: "image",
        src: "/images/works/graduation-detail-01.jpg",
        alt: "HIKETANE research board",
        caption: "Research and insight整理",
      },
      {
        type: "text",
        title: "Insight",
        body: "挫折の大きな要因は、技術不足そのものではなく『小さな成功体験を感じられないこと』だと分かりました。継続のためには、短時間でも達成感を得られる仕組みが必要だと考えました。",
      },
      {
        type: "text",
        title: "Design",
        body: "短時間で達成できる練習タスク、進捗の可視化、段階的な目標設定を設計し、ユーザーが再挑戦しやすく継続しやすい体験づくりを行いました。",
      },
      {
        type: "image",
        src: "/images/works/graduation-detail-02.jpg",
        alt: "HIKETANE UI design",
        caption: "UI design proposal",
      },
    ],
  },
  {
    slug: "resonote",
    title: "RESONOTE",
    titleFont: "en",
    category: "App Design",
    description:
      "共通の趣味や感性をきっかけに人とつながるSNSアプリのUIデザイン。",
    thumbnail: "/images/works/resonote.jpg",
    role: "UI Design / UX Design",
    period: "2024 / Hackathon",
    tools: ["Figma", "Illustrator"],
    result: "プロトタイプコンテストで最優秀賞を受賞したアプリコンセプト。",
    content: [
      {
        type: "text",
        title: "Overview",
        body: "RESONOTEは、共通の趣味や感性をきっかけに人とつながることを目指したSNSアプリです。ユーザーが投稿・閲覧・つながりを自然に理解できるUI設計を行いました。",
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
        body: "SNSアプリは初回利用時に機能が多く、ユーザーが使い方を理解するまでに迷いやすいという課題があります。特に最初の体験で魅力が伝わらないと離脱につながりやすい状態でした。",
      },
      {
        type: "text",
        title: "Design Approach",
        body: "投稿・閲覧・つながりという基本行動の導線を見直し、情報の優先順位を整理することで、直感的に理解しやすい体験を目指しました。",
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
    titleFont: "en",
    category: "Web Design",
    description: "ブランドの世界観を伝えるECサイトのUIデザインと実装。",
    thumbnail: "/images/works/naterra.jpg",
    role: "UI Design / Frontend",
    period: "2024",
    tools: ["Figma", "Next.js", "Vercel"],
    result:
      "中間課題として制作し、UIと情報整理の面で高評価を得たECサイトデザイン。",
    content: [
      {
        type: "text",
        title: "Overview",
        body: "Naterraはブランドの世界観を伝えるためのECサイトデザインプロジェクトです。ビジュアルの魅力を活かしながら、ユーザーが情報を読み取りやすい構造を目指しました。",
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
        body: "ブランドの雰囲気を損なわずに商品情報や導線を整理し、閲覧しやすく購入行動につながるレイアウトにする必要がありました。",
      },
      {
        type: "text",
        title: "Design",
        body: "余白やタイポグラフィを活かしながら、視線の流れが自然になるレイアウトを設計し、フロントエンド実装まで一貫して行いました。",
      },
    ],
  },
];
