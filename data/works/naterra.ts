import type { Work } from "@/types/work";

export const naterra: Work = {
  slug: "naterra",
  title: "Naterra",
  titleFont: "en",
  category: "Web Design",
  description: "ブランドの世界観と購入導線を両立したECサイト",
  thumbnail: "/images/works/naterra/thumbnail.webp",
  summary: {
    challenge:
      "自然素材を扱うECサイトとして、ブランドの温かみと、初回訪問でも迷わず購入まで進める導線を両立すること。",

    solution: [
      "キャッチコピー、ロゴ、配色、余白設計を通して、自然素材のやさしさや暮らしになじむ世界観を表現。",
      "トップ、商品一覧、商品詳細、カート、チェックアウト、購入完了までの主要導線を設計。",
      "HTML / CSS / JavaScriptで実装し、商品探索から購入完了までの購買体験を確認できる形に整理。",
    ],

    role: {
      text: "コンセプト設計、UI設計、購入導線設計、フロントエンド実装",
      font: "sans",
    },

    type: {
      text: "課題制作",
      font: "sans",
    },

    time: {
      text: "2025/07 - 2025/09",
      font: "en",
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
        label: "サイトを見る",
        href: "https://daichi-kubokawa.github.io/naterra-site/",
      },
      {
        label: "プロトタイプを見る",
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
      body: "自然素材を扱う雑貨店を想定し、ブランドの世界観と購入しやすさを両立するECサイトを制作しました。主なターゲットは、暮らしの質や素材感を重視して雑貨を選ぶ30歳前後の女性です。\n\n初回訪問でもブランドの雰囲気を感じながら、商品を探し、カートに入れ、購入完了まで迷わず進める体験を目指して設計しました。",
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
      body: "キャッチコピーには「自然と、くらす。」を設定しました。自然素材の温かみや、日々の暮らしに静かになじむ心地よさが伝わるブランド体験を目指し、過度に装飾せず、余白や色味でやさしい印象を表現しています。",
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
      body: "ロゴでは、3枚の葉のモチーフを用いて、自然・調和・持続可能性を表現しました。葉の重なりには、自然な循環や成長のイメージを込めています。\n\n商品タグやショップカード、SNSアイコンなど、複数の接点で展開しやすいシンプルな形を意識して制作しました。",
    },
    {
      type: "image",
      src: "/images/works/naterra/naterra-detail-03.webp",
      alt: "Naterraのロゴデザインとショップカード、SNSアイコンへの展開例",
      caption: "ロゴデザイン・展開イメージ",
      width: 1400,
      height: 800,
    },
    {
      type: "text",
      label: "UI Design",
      title: "UIデザイン",
      titleFont: "sans",
      body: "UIでは、ブランドのやわらかな世界観を保ちながら、商品を探して購入するまでの流れが分かりやすくなるよう設計しました。トップページではブランド訴求、人気商品、新着商品、カテゴリ導線を整理し、初回訪問でも商品一覧や詳細ページへ進みやすい構成にしています。\n\nカートやカテゴリはオーバーレイで表示し、閲覧の流れを大きく妨げずに操作できるよう意識しました。",
    },
    {
      type: "image",
      src: "/images/works/naterra/naterra-detail-04.webp",
      alt: "Naterraのトップページ、商品一覧、商品詳細、カート、チェックアウト画面のUIデザイン一覧",
      caption: "主要画面UI",
      width: 3448,
      height: 5000,
    },
    {
      type: "figma",
      label: "prototype",
      title: "プロトタイプ",
      titleFont: "sans",
      href: "https://www.figma.com/proto/ePJhrgYoRJlVgX6cm2cNGE/%E8%AA%B2%E9%A1%8C_EC?node-id=250-126&viewport=517%2C403%2C0.1&t=o1jqv9qVY1pOg1HO-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=250%3A126",
      device: "mobile",
    },
    {
      type: "text",
      label: "Front-end",
      title: "フロント実装",
      titleFont: "sans",
      body: "HTML、CSS、JavaScriptを用いて、トップページ、商品一覧、商品詳細、カート、チェックアウト、購入完了までの主要画面を実装しました。\n\n画面デザインだけで終わらせず、商品を探す、カートに入れる、購入手続きへ進むといった一連の購買体験を確認できる形にしています。",
      links: [
        {
          label: "サイトを見る",
          href: "https://daichi-kubokawa.github.io/naterra-site/",
        },
      ],
    },
    {
      type: "text",
      label: "Reflection",
      title: "振り返り",
      titleFont: "sans",
      body: "このプロジェクトでは、ブランドの世界観を表現するだけでなく、商品探索から購入完了までの流れを一貫して設計する重要性を学びました。\n\n特にECサイトでは、カテゴリの分かりやすさ、カート投入後の状態変化、購入前の不安を減らす情報設計が体験の質に影響すると感じました。今後は、商品詳細への遷移、カート投入、チェックアウト離脱などの観点から、購入導線を検証できる設計にしていきたいです。",
    },
  ],
};
