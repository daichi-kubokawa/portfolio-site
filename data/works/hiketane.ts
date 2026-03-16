import type { Work } from "@/types/work";

export const hiketane: Work = {
  slug: "hiketane",
  title: "ヒケタネ",
  titleFont: "sans",
  category: "Service Design",
  description: "もう一度楽器のある日常をつくる練習支援アプリ。",
  thumbnail: "/images/works/hiketane/thumbnail.png",
  cardAward: "クリエイターズオーディション vol.72 ノミネート",
  summary: {
    challenge:
      "好きな曲を目標に始めても、途中の成長を実感しにくく、自然と楽器から離れてしまう体験をどう変えられるかがテーマでした。",
    solution: [
      "曲を弾けるサイズまで分解し、小さな成功体験を積み重ねられる練習体験を設計。",
      "今の練習が曲のどこにつながるかを示し、達成の記録を通して成長を見える化しました。",
    ],
    role: {
      text: "Concept / UX Research / UI Design / Logo Design",
      font: "en",
    },
    type: {
      text: "卒業制作作品",
      font: "sans",
    },
    time: {
      text: "2025",
      font: "sans",
    },
    task: {
      text: "ユーザーリサーチ、体験設計、UIデザイン、プロトタイプ制作、企画書作成",
      font: "sans",
    },
    tools: [
      { text: "Miro", font: "en" },
      { text: "Figma", font: "en" },
      { text: "Illustrator", font: "en" },
    ],
    award: {
      text: "クリエイターズオーディション vol.72 ノミネート",
      font: "sans",
    },
    links: [
      {
        label: "View Prototype",
        href: "https://www.figma.com/proto/T0SnpcN0Z5jBXUxMVHKKgQ/%E3%83%92%E3%82%B1%E3%82%BF%E3%83%8D?node-id=437-4000&viewport=554%2C201%2C0.25&t=dtLUPRN5nOooDRtw-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=437%3A4000",
      },
      {
        label: "View Proposal",
        href: "/files/hiketane/proposal.pdf",
      },
    ],
  },
  content: [
    {
      type: "text",
      label: "Overview",
      title: "サービス概要",
      titleFont: "sans",
      body: "ヒケタネは、挫折しやすい楽器練習を“小さな達成の積み重ね”に変えることで、もう一度楽器に触れるきっかけをつくる練習支援アプリです。大きすぎる目標を細かい練習単位に分解し、続けやすい体験を目指しました。",
    },
    {
      type: "image",
      src: "/images/works/hiketane/hiketane-detail-01.webp",
      alt: "ヒケタネのサービス概要資料",
      caption: "サービス概要",
      width: 3840,
      height: 2160,
    },
    {
      type: "text",
      label: "Problem",
      title: "課題",
      titleFont: "sans",
      body: "インタビューでは、好きな曲を弾けるようになりたくて始めても、弾けている実感を持てないまま練習が止まってしまう流れが見えてきました。特に、最初の目標が大きすぎることで、途中の成長に気づきにくいことが課題でした。",
    },
    {
      type: "text",
      label: "Research",
      title: "リサーチと着想",
      titleFont: "sans",
      body: "ユーザーインタビューやエンパシーマップ、ペルソナ、CJMを通して、練習が続かない背景を整理しました。その結果、必要なのは厳しい管理ではなく、今できたことを実感できる小さな成功体験だと考えました。",
    },
    {
      type: "image",
      src: "/images/works/hiketane/hiketane-detail-02.webp",
      alt: "ヒケタネのリサーチ資料",
      caption: "課題の整理",
      width: 2900,
      height: 2900,
    },
    {
      type: "text",
      label: "Concept",
      title: "コンセプト",
      titleFont: "sans",
      body: "コンセプトは「もう一度、楽器に触れる喜びを。」です。曲をそのまま目標にするのではなく、リズム・コード・メロディといった弾ける単位まで分解し、達成を積み重ねながら自然に前に進める体験を目指しました。",
    },
    {
      type: "text",
      label: "UX Design",
      title: "体験設計",
      titleFont: "sans",
      body: "UXは、①できないをできるに切り分ける、②できるが積み重なる練習に変わる、③この練習が曲につながるとわかる、④見えなかった成長が見えてくる、という4段階で設計しました。練習の意味と達成感が途切れない流れを意識しています。",
    },
    {
      type: "image",
      src: "/images/works/hiketane/hiketane-detail-03.webp",
      alt: "ヒケタネのUX設計資料",
      caption: "UXフロー",
      width: 3600,
      height: 1700,
    },
    {
      type: "text",
      label: "UI Design",
      title: "UIデザイン",
      titleFont: "sans",
      body: "UIでは、練習のハードルを下げるために、やわらかい配色とシンプルな情報設計を採用しました。練習画面では“今やること”に集中できるようにし、結果画面や達成画面では前進している実感が自然に伝わるようにしています。Figmaではバリアブルやコンポーネントを活用し、画面ごとの一貫性も意識して設計しました。",
      links: [
        {
          label: "View Prototype",
          href: "https://www.figma.com/proto/T0SnpcN0Z5jBXUxMVHKKgQ/%E3%83%92%E3%82%B1%E3%82%BF%E3%83%8D?node-id=437-4000&viewport=554%2C201%2C0.25&t=dtLUPRN5nOooDRtw-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=437%3A4000",
        },
      ],
    },
    {
      type: "image",
      src: "/images/works/hiketane/hiketane-detail-04.webp",
      alt: "ヒケタネのUIデザイン画面",
      caption: "主要画面のUIデザイン",
      width: 2000,
      height: 1000,
    },
    {
      type: "text",
      label: "Reflection",
      title: "振り返り",
      titleFont: "sans",
      body: "このプロジェクトを通して、挫折の原因を“努力不足”ではなく、成長の見えにくさや目標設定の大きさとして捉え直す視点を学びました。制作中も何度も立ち返りながら課題に向き合い続け、本当に必要な体験は何かを問い直しながら設計を進めました。今後は、継続利用の動機設計や実現方法をさらに検討し、提案の解像度を高めていきたいです。",
    },
  ],
};
