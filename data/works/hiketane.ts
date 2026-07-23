import type { Work } from "@/types/work";

export const hiketane: Work = {
  slug: "hiketane",
  title: "ヒケタネ",
  titleFont: "sans",
  category: "Service Design",
  description: "楽器再開の不安を、小さな達成と進捗実感に変えるアプリ",
  thumbnail: "/images/works/hiketane/thumbnail.webp",
  cardAward: "クリエイターズオーディション vol.72 ノミネート",
  summary: {
    challenge:
      "楽器を再開したい人が、昔の自分とのギャップや正解の分からなさから、練習を始める前に止まってしまう。",
    solution: [
      "課題を「練習継続」ではなく、再開前に自分でもできそうだと思える入口の不足として定義。",
      "曲を小さな練習単位に分解し、今やることに集中できる流れを設計。",
      "達成状況と曲とのつながりを可視化し、小さな成功体験が次の練習につながる体験をプロトタイプ化。",
    ],

    role: {
      text: "課題定義、体験設計、UI設計、プロトタイプ制作、ユーザーテスト",
      font: "sans",
    },

    type: {
      text: "卒業制作作品",
      font: "sans",
    },

    time: {
      text: "2025/11 - 2026/03（4ヶ月間）",
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
        label: "プロトタイプを見る",
        href: "https://www.figma.com/proto/T0SnpcN0Z5jBXUxMVHKKgQ/%E3%83%92%E3%82%B1%E3%82%BF%E3%83%8D?node-id=437-4000&viewport=554%2C201%2C0.25&t=dtLUPRN5nOooDRtw-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=437%3A4000",
      },
      {
        label: "提案資料を見る",
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
      body: "ヒケタネは、挫折しやすい楽器練習を「小さな達成の積み重ね」に変えることで、もう一度楽器に触れるきっかけをつくる練習支援アプリです。リサーチを通じて、好きな曲を目標に始めたものの、上達の実感が持てないまま離れてしまう人が多いことが分かりました。大きすぎる目標を細かい練習単位に分解し、続けやすい体験を目指しました。",
    },
    {
      type: "text",
      label: "Problem",
      title: "解くべき課題",
      titleFont: "sans",
      body: "インタビューでは、好きな曲を弾きたいという動機は残っていても、曲全体を目標にすると難易度が高く、何から始めればよいか分からなくなる流れが見えてきました。\n\n特に、過去に弾いていた経験がある人ほど、昔の記憶と現在のスキルの差に不安を感じやすく、楽器を手に取る前に止まりやすいことが課題でした。",
    },
    {
      type: "text",
      label: "Research",
      title: "ユーザーリサーチ",
      titleFont: "sans",
      body: "過去に楽器経験があり、現在は継続できていない3名にインタビューを実施しました。始めたきっかけ、楽しかった体験、続かなかった理由、再開時の不安を整理しました。\n\nその結果、楽器への興味は残っている一方で、正解の分からなさや自信のなさ、行動の重さによって、再開する前に止まりやすいことが見えてきました。",
    },
    {
      type: "image",
      src: "/images/works/hiketane/hiketane-detail-01.webp",
      alt: "ヒケタネのユーザーリサーチ。楽器再開前に止まりやすい理由を整理した資料。",
      caption: "再開前に止まる理由の整理",
      width: 2752,
      height: 1612,
    },
    {
      type: "text",
      label: "Insight",
      title: "課題の捉え直し",
      titleFont: "sans",
      body: "リサーチを通して、楽器から離れた人は興味を失ったわけではなく、「また弾きたい」と思う瞬間は残っていることが分かりました。一方で、正解の分からなさや自信のなさから、実際に楽器を手に取る前に止まりやすい状態がありました。\n\nそこで課題を「練習が続かないこと」ではなく、「再開前に自分でもできそうだと思える入口が不足していること」として再定義しました。",
    },
    {
      type: "text",
      label: "Initial Prototype",
      title: "初期案と検証前の仮説",
      titleFont: "sans",
      body: "初期案では、AIサポート、採点、リザルト、コーチ相談などの機能を加えることで、練習を便利にし、楽しく続けられるアプリとして検討していました。\n\nこの時点では、便利さや楽しさを足すことで、自然と練習継続につながるのではないかと考えていました。",
    },
    {
      type: "image",
      src: "/images/works/hiketane/hiketane-detail-02.webp",
      alt: "ヒケタネの初期案。AIサポート、採点、リザルト、コーチ相談などを検討していた初期プロトタイプ。",
      caption: "初期案と検証前の仮説",
      width: 1876,
      height: 840,
    },
    {
      type: "text",
      label: "User Test",
      title: "ユーザーテスト",
      titleFont: "sans",
      body: "初期プロトタイプ段階で、20〜30代の3名にユーザーテストを実施しました。ホームから個人練習、リザルトまでの流れを触ってもらい、誰にとってどの不安が残るのかを確認しました。\n\nその結果、初心者・経験者・再開者で不安の種類が異なり、ターゲットを絞る必要があると分かりました。また、便利機能を足すだけでは「自分でも弾けるのか分からない」という不安が残る一方で、段階的に小さく進められる練習には好反応がありました。",
    },
    {
      type: "image",
      src: "/images/works/hiketane/hiketane-detail-03.webp",
      alt: "ヒケタネのユーザーテスト結果。便利機能だけでは不安が残ること、段階的な練習に可能性があることを整理した資料。",
      caption: "ユーザーテストで見えた改善方針",
      width: 2322,
      height: 1264,
    },
    {
      type: "text",
      label: "Iteration",
      title: "方針転換",
      titleFont: "sans",
      body: "ユーザーテストを踏まえ、ターゲットを「楽器を練習したい人全般」ではなく、「過去に楽器から離れ、もう一度始めたい再開者」に絞りました。\n\n初期案では便利さや楽しさを足すことで継続につなげようとしていましたが、それだけでは再開前の不安は残ると判断しました。そこで、大きすぎる目標を弾けるサイズまで分解し、小さな成功体験を積み重ねられる体験へ方針を転換しました。",
    },
    {
      type: "text",
      label: "Concept",
      title: "コンセプト",
      titleFont: "sans",
      body: "コンセプトは「もう一度、楽器に触れる喜びを。」です。曲をそのまま大きな目標にするのではなく、リズム・コード・メロディといった弾ける単位まで分解し、達成を積み重ねながら自然に前に進める体験を目指しました。\n\n再開者が「今の自分でも少しできた」と感じられることを、継続の起点として設計しています。",
    },
    {
      type: "text",
      label: "Experience Design",
      title: "体験設計",
      titleFont: "sans",
      body: "体験は、①できないをできるに切り分ける、②できるが積み重なる練習に変わる、③この練習が曲につながると分かる、④見えなかった成長が見えてくる、という4段階で設計しました。\n\n練習前は目標を小さく分解し、練習中は今やることに集中できるようにし、練習後は曲とのつながりと達成を確認できる流れにしています。",
    },
    {
      type: "image",
      src: "/images/works/hiketane/hiketane-detail-04.webp",
      alt: "ヒケタネの体験設計。曲を小さな練習単位に分解し、達成と成長実感につなげる流れを整理した資料。",
      caption: "曲を小さな練習単位に分解する体験設計",
      width: 3600,
      height: 1700,
    },
    {
      type: "text",
      label: "UI Design",
      title: "UIデザイン",
      titleFont: "sans",
      body: "UIでは、再開時の心理的ハードルを下げるために、やわらかい配色とシンプルな情報設計を採用しました。練習選択、練習、リザルト、成長画面を通して、小さな練習・曲とのつながり・成長記録が一連の流れで伝わるように設計しています。\n\nまた、カード、ボタン、ナビゲーションなどをコンポーネント化し、画面間の一貫性と更新しやすさも意識しました。",
    },
    {
      type: "image",
      src: "/images/works/hiketane/hiketane-detail-05.webp",
      alt: "ヒケタネの主要画面。練習選択、練習、リザルト、成長画面のUIデザイン。",
      caption: "練習選択、練習、リザルト、成長画面のUI",
      width: 2736,
      height: 1428,
    },
    {
      type: "figma",
      label: "prototype",
      title: "プロトタイプ",
      titleFont: "sans",
      href: "https://www.figma.com/proto/T0SnpcN0Z5jBXUxMVHKKgQ/%E3%83%92%E3%82%B1%E3%82%BF%E3%83%8D?node-id=437-4000&viewport=554%2C201%2C0.25&t=dtLUPRN5nOooDRtw-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=437%3A4000",
      device: "mobile",
    },
    {
      type: "text",
      label: "MVP",
      title: "MVPと検証したい指標",
      titleFont: "sans",
      body: "本制作はUI/UXデザインの検証を目的としており、実装(開発)は卒業制作の範囲外としたため、実際の利用データはありません。仮に開発する場合のMVPとしては、ユーザー価値の核である「好きな曲を小さな練習単位に分解する」「練習後に曲とのつながりを確認する」「できたことを記録して成長を実感する」の3機能に絞る想定です。\n\n検証したい指標としては、初回練習完了率、練習単位の完了率、再訪意向を想定しています。特に、練習開始のハードルを下げられているか、達成実感が次の練習につながるかを確認したいです。",
    },
    {
      type: "text",
      label: "Reflection",
      title: "振り返り",
      titleFont: "sans",
      body: "このプロジェクトでは、楽器から離れてしまう原因を「努力不足」ではなく、再開時の不安、目標設定の大きさ、成長実感の得にくさとして捉え直しました。\n\n初期案では採点やコーチ相談など、練習を便利に楽しくする機能を検討していましたが、ユーザーテストを通して、まず解くべきなのは機能を増やすことではなく、ユーザーが迷わず始められ、小さな達成を感じられる体験だと分かりました。今後は、どの体験が再訪や練習継続につながるのかを検証していきたいです。",
    },
  ],
};
