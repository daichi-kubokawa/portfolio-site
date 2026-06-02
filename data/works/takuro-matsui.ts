import type { Work } from "@/types/work";

export const takuroMatsui: Work = {
  slug: "takuro-matsui",
  title: "イラストレーターWebサイト",
  titleFont: "sans",
  category: "Web Design",
  description: "作品・実績・問い合わせ導線を整理したクライアントワーク",
  thumbnail: "/images/works/takuro-matsui/thumbnail.webp",
  cardAward: "制作中",
  summary: {
    challenge:
      "依頼検討者が作風・実績・依頼可否・連絡先を短時間で判断でき、クライアント本人も作品を継続更新できる状態にすること。",

    solution: [
      "作品一覧、作品詳細、About、Contactの役割を整理し、作風確認から問い合わせまでの導線を設計。",
      "タグ分類とMasonryレイアウトにより、縦横比やテイストの異なる作品を比較しやすい構成に整理。",
      "microCMSの項目設計を行い、作品追加・公開状態・表示順をクライアント本人が管理できる運用を想定。",
    ],

    role: {
      text: "要件整理、情報設計、UI設計、CMS設計、Web反映検証",
      font: "sans",
    },

    type: {
      text: "クライアントワーク / 制作中",
      font: "sans",
    },

    time: {
      text: "2026/03 -",
      font: "en",
    },

    tools: [
      { text: "Figma", font: "en" },
      { text: "microCMS", font: "en" },
    ],
  },

  content: [
    {
      type: "text",
      label: "Overview",
      title: "サイト概要",
      titleFont: "sans",
      body: "イラストレーター Takuro Matsui 氏の作品・プロフィール・問い合わせ導線を整理したポートフォリオサイトです。依頼検討者が作風・制作実績・依頼可否・連絡先を短時間で確認できる構成にしました。\n\n現在制作中のため一部素材は仮ですが、作品の見せ方と公開後の更新しやすさの両立を重視しています。",
    },
    {
      type: "text",
      label: "Problem",
      title: "課題",
      titleFont: "sans",
      body: "作品の世界観を強く見せる一方で、依頼検討者が作風・実績・依頼可否・問い合わせ先を判断しづらくなるリスクがありました。また、作品追加のたびに制作者側で更新が必要になると、公開後の運用負荷が高くなります。\n\nそのため、閲覧者が判断しやすく、クライアント本人も継続的に更新しやすい構成が必要でした。",
    },
    {
      type: "text",
      label: "Planning",
      title: "要件整理とユーザー導線",
      titleFont: "sans",
      body: "ヒアリング内容をもとに、優先して見せたい作品、本人が更新できる運用性、人物像を伝えるAboutページを要件として整理しました。\n\n導線は、作品一覧で作風を比較し、作品詳細で実績や作品情報を確認し、Aboutで人物像を補足したうえで、Contactから問い合わせへ進む流れに整理しています。",
    },
    {
      type: "image",
      src: "/images/works/takuro-matsui/takuro-matsui-detail-01.webp",
      alt: "イラストレーターサイトの要件整理とユーザー導線",
      caption: "要件整理・ユーザー導線",
      width: 2136,
      height: 1217,
    },
    {
      type: "text",
      label: "Wireframe",
      title: "ワイヤーフレーム",
      titleFont: "sans",
      body: "ワイヤーフレームでは、作品一覧、作品詳細、Aboutの役割と、問い合わせへ進む流れを整理しました。\n\n作品一覧では複数の作品を比較しやすくし、作品詳細では画像を大きく見せて魅力や情報を確認できる構成にしています。Aboutでは人物像や実績を整理し、依頼検討につながる流れを設計しました。",
    },
    {
      type: "image",
      src: "/images/works/takuro-matsui/takuro-matsui-detail-02.webp",
      alt: "イラストレーターサイトのワイヤーフレーム",
      caption: "ワイヤーフレーム",
      width: 2679,
      height: 1971,
    },
    {
      type: "text",
      label: "Design",
      title: "デザイン",
      titleFont: "sans",
      body: "イラストの印象を妨げないよう、余白を広く取り、色数や装飾を抑えたミニマルなUIにしました。\n\n作品一覧ではMasonryレイアウトとタグ分類により、作品を比較・探索しやすい構成にしています。作品詳細では画像を大きく見せ、Aboutでは人物像や実績を整理しました。",
    },
    {
      type: "image",
      src: "/images/works/takuro-matsui/takuro-matsui-detail-03.webp",
      alt: "イラストレーターサイトのUIデザイン",
      caption: "UIデザイン",
      width: 2558,
      height: 1988,
    },
    {
      type: "text",
      label: "CMS",
      title: "CMS設計とWeb反映検証",
      titleFont: "sans",
      body: "作品情報はmicroCMSで管理できる構成にしました。作品画像、タイトル、説明文、タグ、公開状態、表示順など、クライアント本人が更新する際に迷いにくい項目を整理しています。\n\nCMSに登録した内容が作品一覧・作品詳細・Aboutに正しく反映されるかを確認し、公開後も作品追加や表示順の調整を行いやすい運用を想定しています。",
    },
    {
      type: "image",
      src: "/images/works/takuro-matsui/takuro-matsui-detail-04.webp",
      alt: "イラストレーターサイトのCMS設計とWeb反映検証",
      caption: "CMS設計・反映検証",
      width: 3285,
      height: 1997,
    },
    {
      type: "text",
      label: "Next",
      title: "今後の改善",
      titleFont: "sans",
      body: "今後は、仮素材の差し替えに加え、Aboutページで伝える制作姿勢、依頼可能な内容、Contact導線の分かりやすさを改善していく予定です。\n\n公開前には、作品一覧から作品詳細への遷移、問い合わせ前に必要な情報へ到達できるか、クライアント本人がCMSで作品を追加しやすいかを確認します。",
    },
    {
      type: "text",
      label: "Reflection",
      title: "振り返り",
      titleFont: "sans",
      body: "この制作では、作品を魅力的に見せることと、依頼検討者が判断しやすい情報設計を両立する難しさを学びました。\n\n作品を主役にするために情報量を抑えつつ、依頼判断に必要な実績・人物像・問い合わせ情報は不足させないバランスが重要だと感じました。またCMS設計では、クライアント本人が継続的に更新できるかを基準に、入力項目や表示順を整理する必要があると学びました。",
    },
  ],
};
