import type { Work } from "@/types/work";

export const kaguConcierge: Work = {
  slug: "kagu-concierge",
  title: "家具コンシェルジュ",
  titleFont: "sans",
  category: "Service Design",
  description: "チームで企画・設計した家具コーディネート支援サービス",
  thumbnail: "/images/works/kagu-concierge/thumbnail.webp",

  summary: {
    challenge:
      "家具選びでは「部屋に合うか」「本当にこれで良いのか」という不安から、自分で判断することに自信を持てず、購入をためらってしまう人がいる。",

    solution: [
      "家具の情報ではなく、「安心して選べる体験」に着目した。",
      "テーマ別コーディネート提案とプロへのチャット相談で、購入前の不安を解消する体験を設計した。",
      "ヒアリングからプロトタイプまでを5日間で繰り返し検証し、サービスとして形にした。",
    ],

    role: {
      text: "ユーザー調査、要件整理、UX設計、画面設計、プロトタイプ制作、進行管理",
      font: "sans",
    },

    type: {
      text: "デジタルハリウッド 企業ゼミ（主催：dotD）チーム課題（4名）",
      font: "sans",
    },

    time: {
      text: "2025/11 - 2025/12（Day1〜Day5の5日間）",
      font: "sans",
    },

    tools: [
      { text: "Miro", font: "en" },
      { text: "Figma Make", font: "en" },
    ],

    links: [
      {
        label: "プロトタイプを見る",
        href: "https://spoke-spoof-31542025.figma.site",
      },
    ],
  },

  content: [
    {
      type: "text",
      label: "Overview",
      title: "サービス概要",
      titleFont: "sans",
      body: "家具を買うとき、「部屋に合うのか」「本当にこれでいいのか」が分からず、自分で選ぶことに自信が持てない。この悩みをきっかけに、チームで課題を掘り下げました。\n\n議論を重ねる中で、不安の原因は家具の情報不足ではなく、「自分で判断することへの不安」だと考え、テーマ別コーディネート提案とプロへのチャット相談を組み合わせたサービスを企画しました。\n\n5日間の企業ゼミだったため、生成AIも活用しながら仮説と検証を高速に繰り返し、私はヒアリングや画面設計、プロトタイプ制作を担当しました。",
    },
    {
      type: "text",
      label: "Discovery",
      title: "見えてきた課題",
      titleFont: "sans",
      body: "家具選びに悩んだ経験のあるユーザーへヒアリングを実施しました。\n\n「高い買い物だから失敗したくない」「家具単体ではなく、部屋全体を提案してほしい」という声が多く、必要なのは家具の情報ではなく、「安心して選べる後押し」ではないかと考えました。\n\nこの気づきをもとに、チームでサービスの方向性を整理していきました。",
    },
    {
      type: "text",
      label: "Insight",
      title: "ユーザー像の再定義",
      titleFont: "sans",
      body: "ヒアリング結果をもとに、チームでエンパシーマップとPoVを作成しました。\n\n議論と投票を重ねた結果、「家具を探したい人」ではなく、「安心して判断できる後押しを求める人」と捉え直したことが、その後のサービス設計の軸になりました。\n\n以降のアイデア検討や画面設計も、このPoVをもとに進めています。",
    },
    {
      type: "image",
      src: "/images/works/kagu-concierge/kagu-concierge-detail-01.webp",
      alt: "チームで作成したPoVシート",
      caption: "チームで一本化したPoV",
      width: 2078,
      height: 1004,
    },
    {
      type: "text",
      label: "Ideation",
      title: "アイデアの発散と収束",
      titleFont: "sans",
      body: "PoVをもとにHMWを設定し、生成AIも活用しながらアイデアを発散しました。\n\nテーマ別コーディネート提案やガチャ型レコメンドなど複数案を検討しましたが、チームで議論を重ねる中で、「安心して選べること」を軸に、テーマ別提案とプロへのチャット相談を組み合わせた体験へ整理しました。\n\n短期間でも多くの案を比較・検討できたことが、生成AIを活用した大きな効果でした。",
    },
    {
      type: "text",
      label: "Structure",
      title: "要件への分解と検証",
      titleFont: "sans",
      body: "生成AIでUser Story Mapのたたき台を作成し、チームで議論を重ねながらブラッシュアップしました。\n\nその後、想定ユーザーへのインタビューを実施し、利用シーンや分かりづらい点を確認しました。\n\nフィードバックを反映しながらUser Story Mapと画面構成を改善し、体験全体を整理しました。",
    },
    {
      type: "image",
      src: "/images/works/kagu-concierge/kagu-concierge-detail-02.webp",
      alt: "User Story Map",
      caption: "検証結果を反映しながらブラッシュアップしたUser Story Map",
      width: 2214,
      height: 782,
    },
    {
      type: "text",
      label: "Design",
      title: "画面設計",
      titleFont: "sans",
      body: "User Story Mapをもとに、画面遷移図とワイヤーフレームを作成しました。\n\n担当画面の設計に加え、進行管理も担当し、チームでプロトタイプ制作を進めました。\n\nユーザーがテーマ選択から相談まで迷わず進める画面構成を意識しました。",
    },
    {
      type: "image",
      src: "/images/works/kagu-concierge/kagu-concierge-detail-03.webp",
      alt: "画面遷移図",
      caption: "User Story Mapをもとに整理した画面遷移",
      width: 2678,
      height: 1364,
    },
    {
      type: "text",
      label: "Prototype",
      title: "プロトタイプ",
      titleFont: "sans",
      body: "画面遷移図とワイヤーフレームをもとに、Figma Makeでプロトタイプを制作しました。\n\nテーマ別コーディネートの提案から、プロへのチャット相談までの流れを実際に操作しながら確認できるようにしています。",
      links: [
        {
          label: "プロトタイプを見る",
          href: "https://spoke-spoof-31542025.figma.site",
        },
      ],
    },
    {
      type: "text",
      label: "Reflection",
      title: "振り返り",
      titleFont: "sans",
      body: "5日間という限られた期間の中で、生成AIも活用しながらアイデアを発散し、チームで議論を重ねて一つのサービスへまとめました。\n\n一人では思いつかない視点を取り入れながら方向性を整理し、ユーザー課題に立ち返って意思決定する難しさと大切さを実感しました。\n\nまた、生成AIを活用することで、アイデアの発散やたたき台の作成を効率化し、その分チームでの議論や検証により多くの時間を充てられることを実感しました。",
    },
  ],
};
