import type { Work } from "@/types/work";

export const hiketane: Work = {
  slug: "hiketane",
  title: "ヒケタネ",
  titleFont: "sans",
  category: "Service Design",
  description: "地域や人との小さな出会いを、次の行動につなげる体験を設計。",
  thumbnail: "/images/works/hiketane/thumbnail.png",
  // heroImage: "/images/works/hiketane/hero.png",
  summary: {
    challenge:
      "地域や人との接点は偶発的に生まれても、それを継続的な行動や関係性につなげる仕組みが少なく、出会いが一度きりで終わってしまうことが課題だと考えました。",
    solution: [
      "出会いや発見を記録し、次の行動へつながる体験として設計。",
      "迷わず参加できる導線と、継続的に関わりたくなる流れを重視しました。",
    ],
    role: {
      text: "Service Design",
      font: "en",
    },
    time: {
      text: "2026 / 仮制作中",
      font: "sans",
    },
    task: {
      text: "リサーチ、UI/UX設計、プロトタイプ制作",
      font: "sans",
    },
    tools: [
      { text: "FigJam", font: "en" },
      { text: "Figma", font: "en" },
    ],
    linkLabel: "View Prototype",
    linkHref:
      "https://www.figma.com/proto/T0SnpcN0Z5jBXUxMVHKKgQ/%E3%83%92%E3%82%B1%E3%82%BF%E3%83%8D?node-id=437-4000&viewport=554%2C201%2C0.25&t=dtLUPRN5nOooDRtw-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=437%3A4000",
  },
  content: [
    {
      type: "text",
      label: "Overview",
      title: "プロジェクト概要",
      titleFont: "sans",
      body: "ヒケタネは、地域や人との小さな出会いを記録し、その余韻を次の行動へとつなげる体験を目指したサービスです。一度のきっかけで終わらず、関わりが少しずつ育っていく流れを構想しました。",
    },
    {
      type: "text",
      label: "Problem",
      title: "課題",
      titleFont: "sans",
      body: "地域イベントや場との接点は生まれても、その出会いを継続的な参加や関係性へつなげる仕組みは十分ではありません。出会いの余韻を受け止め、次の行動に移りやすくする体験設計が必要だと考えました。",
    },
    {
      type: "text",
      label: "Research / Insight",
      title: "着想と洞察",
      titleFont: "sans",
      body: "観察を進める中で、ユーザーは情報量の多さよりも、自分にとって意味のあるきっかけや、小さな一歩を後押ししてくれる体験を求めているのではないかと考えました。参加そのものだけでなく、行動のきっかけを育てることが価値になると整理しています。",
    },
    {
      type: "image",
      src: "/images/works/hiketane/hiketane-detail-01.webp",
      alt: "ヒケタネのリサーチと洞察資料",
      caption: "リサーチと洞察の整理",
      width: 1800,
      height: 1080,
    },
    {
      type: "text",
      label: "Persona & Journey",
      title: "想定ユーザーと体験の流れ",
      titleFont: "sans",
      body: "地域に関心はあるものの、参加のきっかけや継続の仕組みがなく、一歩を踏み出しづらいユーザーを想定しました。出会い、記録、振り返り、再参加の流れを通して、関係性が少しずつ深まる体験を設計の起点にしました。",
    },
    {
      type: "image",
      src: "/images/works/hiketane/hiketane-detail-02.webp",
      alt: "ヒケタネのペルソナとカスタマージャーニー",
      caption: "ペルソナとカスタマージャーニー",
      width: 1800,
      height: 1080,
    },
    {
      type: "text",
      label: "Wireframe",
      title: "ワイヤーフレーム",
      titleFont: "sans",
      body: "初回導線から参加、記録、振り返りまでの流れを整理し、どの順番で体験を見せると自然に行動へつながるかを検討しました。負担なく参加できることを意識しながら、画面遷移と情報配置を設計しています。",
    },
    {
      type: "image",
      src: "/images/works/hiketane/hiketane-detail-03.webp",
      alt: "ヒケタネのワイヤーフレーム",
      caption: "ワイヤーフレーム",
      width: 1800,
      height: 1080,
    },
    {
      type: "text",
      label: "Design Process",
      title: "設計プロセス",
      titleFont: "sans",
      body: "リサーチで得た気づきをもとに、届けたい価値と必要な機能を整理し、出会いから次の行動までが自然につながる体験構造を検討しました。その上で、迷わず参加できる導線と、継続したくなる体験を両立するUIへ落とし込んでいます。",
    },
    {
      type: "image",
      src: "/images/works/hiketane/hiketane-detail-04.webp",
      alt: "ヒケタネの設計プロセス資料",
      caption: "価値整理・機能定義・設計プロセス",
      width: 1800,
      height: 1080,
    },
    {
      type: "text",
      label: "Prototype Flow",
      title: "プロトタイプの流れ",
      titleFont: "sans",
      body: "プロトタイプでは、導入から参加、記録、振り返りまでを一連の体験として設計しました。一度の出会いを一度きりで終わらせず、次の行動へつながる感覚を重視しています。",
      linkLabel: "View Prototype",
      linkHref:
        "https://www.figma.com/proto/T0SnpcN0Z5jBXUxMVHKKgQ/%E3%83%92%E3%82%B1%E3%82%BF%E3%83%8D?node-id=437-4000&viewport=554%2C201%2C0.25&t=dtLUPRN5nOooDRtw-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=437%3A4000",
    },
    {
      type: "image",
      src: "/images/works/hiketane/hiketane-detail-05.webp",
      alt: "ヒケタネのプロトタイプフロー",
      caption: "プロトタイプフロー",
      width: 1800,
      height: 1080,
    },
    {
      type: "text",
      label: "Reflection / Next Step",
      title: "振り返りと今後のステップ",
      titleFont: "sans",
      body: "本プロジェクトでは、出会いのきっかけを継続的な関係へつなげる体験設計を試みました。今後は、行動の継続を支える仕組みや、より多様なユーザーに届く体験の広がり方まで含めて検討を深めていきたいと考えています。",
    },
  ],
};
