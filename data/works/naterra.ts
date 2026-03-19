import type { Work } from "@/types/work";

export const naterra: Work = {
  slug: "naterra",
  title: "Naterra",
  titleFont: "en",
  category: "Branding",
  description: "ブランドの世界観と購入導線を両立したECサイト",
  thumbnail: "/images/works/naterra/thumbnail.webp",
  summary: {
    challenge:
      "自然素材の温もりが伝わる世界観と、迷わず購入できるEC導線の両立を目指しました。",
    solution: [
      "ブランドコンセプトを整理し、ロゴ・配色・UIを通して、やさしく温かみのある世界観を一貫して表現。",
      "トップ、商品一覧、商品詳細、カート、チェックアウト、購入完了までの主要導線を設計・実装し、ECサイトとしての基本体験を形にしました。",
    ],
    role: {
      text: "Concept / Logo Design / UI Design / Front-end",
      font: "en",
    },
    type: {
      text: "課題制作",
      font: "sans",
    },
    time: {
      text: "2025/07 - 2025/09",
      font: "en",
    },
    task: {
      text: "コンセプト設計、ロゴ制作、UIデザイン、実装",
      font: "sans",
    },
    tools: [
      { text: "Illustrator", font: "en" },
      { text: "Photoshop", font: "en" },
      { text: "Figma", font: "en" },
      { text: "HTML", font: "en" },
      { text: "CSS", font: "en" },
      { text: "JavaScript", font: "en" },
    ],
    links: [
      {
        label: "Visit Website",
        href: "https://daichi-kubokawa.github.io/naterra-site/",
      },
      {
        label: "View Prototype",
        href: "https://www.figma.com/proto/ePJhrgYoRJlVgX6cm2cNGE/%E8%AA%B2%E9%A1%8C_EC?node-id=250-126&viewport=517%2C403%2C0.1&t=o1jqv9qVY1pOg1HO-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=250%3A126",
      },
    ],
  },

  content: [
    {
      type: "text",
      label: "Overview",
      title: "プロジェクト概要",
      titleFont: "sans",
      body: "自然素材を扱う雑貨店を想定したECサイトとして制作しました。ナチュラル志向でハンドメイド雑貨を好む30歳前後の女性を主なターゲットに設定し、実店舗では届かない遠方ユーザーにもブランドの魅力を届けることを目的としています。世界観を感じながら、誰でもスムーズに購入できる体験を目指して設計しました。",
    },
    {
      type: "image",
      src: "/images/works/naterra/naterra-detail-01.webp",
      alt: "Naterraブランドの世界観",
      caption: "ブランドの世界観",
      width: 1920,
      height: 1080,
    },
    {
      type: "text",
      label: "Concept",
      title: "ブランドコンセプト",
      titleFont: "sans",
      body: "想定クライアントは、自然素材を扱う雑貨店です。キャッチコピーには「自然と、くらす。」を設定し、自然素材の温かみや、日々の暮らしに静かになじむ心地よさが伝わるブランド体験を目指しました。",
    },
    {
      type: "image",
      src: "/images/works/naterra/naterra-detail-02.webp",
      alt: "Naterraのキャッチコピー",
      caption: "キャッチコピー",
      width: 1920,
      height: 1080,
    },
    {
      type: "text",
      label: "Logo Design",
      title: "ロゴデザイン",
      titleFont: "sans",
      body: "ロゴでは、3枚の葉のモチーフを用いて、自然・調和・持続可能性を表現しました。葉の重なりには、自然な循環や前進、成長のイメージを込めています。右上の円は、酸素や光合成を連想させるアクセントとして加え、サステナブルな未来への広がりを視覚化しました。フォントは親しみやすさと清潔感のバランスを意識して選定し、商品タグやショップカード、SNSアイコンなど多様な接点で展開できることも想定しています。",
    },
    {
      type: "image",
      src: "/images/works/naterra/naterra-detail-03.webp",
      alt: "Naterraのロゴデザインとショップカード、SNSアイコンへの展開例",
      caption: "ロゴのコンセプトと各種ツールへの展開イメージ",
      width: 1400,
      height: 800,
    },
    {
      type: "text",
      label: "UI Design",
      title: "UIデザイン",
      titleFont: "sans",
      body: "UIでは、余白を活かして商品を引き立てながら、自然を感じるやわらかな配色とトーンでブランドらしさを表現しました。情報を最小限に絞り、直感的に操作できる導線を意識し、カテゴリやカートはオーバーレイで扱いやすく設計しています。",
      links: [
        {
          label: "View Prototype",
          href: "https://www.figma.com/proto/ePJhrgYoRJlVgX6cm2cNGE/%E8%AA%B2%E9%A1%8C_EC?node-id=250-126&viewport=517%2C403%2C0.1&t=o1jqv9qVY1pOg1HO-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=250%3A126",
        },
      ],
    },
    {
      type: "image",
      src: "/images/works/naterra/naterra-detail-04.webp",
      alt: "Naterraのトップページ、商品一覧、商品詳細、カート、チェックアウト画面のUIデザイン一覧",
      caption: "主要画面のUIデザイン",
      width: 3448,
      height: 5000,
    },
    {
      type: "text",
      label: "Front-end",
      title: "フロント実装",
      titleFont: "sans",
      body: "HTML、CSS、JavaScriptを用いて、トップページ、商品一覧、商品詳細、カート、チェックアウト、購入完了までの主要画面を実装しました。ブランドの世界観を損なわず、商品を探して購入するまでの流れが自然につながるよう意識しています。",
      links: [
        {
          label: "Visit Website",
          href: "https://daichi-kubokawa.github.io/naterra-site/",
        },
      ],
    },
    {
      type: "text",
      label: "Reflection",
      title: "振り返り",
      titleFont: "sans",
      body: "このプロジェクトを通して、ブランドの考え方をロゴやUIに落とし込み、実装までつなげる一貫した設計の重要性を学びました。一方で、情報量の多いECサイトでは、世界観の表現だけでなく、購入導線の分かりやすさや状態変化の整理も同じくらい重要だと実感しました。今後は、見た目と使いやすさをより高い精度で両立できるよう、構造を整理しながら設計する視点をさらに深めていきたいです。",
    },
  ],
};
