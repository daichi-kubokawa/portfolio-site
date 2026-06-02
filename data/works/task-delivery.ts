import type { Work } from "@/types/work";

export const taskDelivery: Work = {
  slug: "task-delivery",
  title: "タスクデリバリー",
  titleFont: "sans",
  category: "Product Design",
  description: "請求書発行業務の進行状況を、工程単位で見える化するアプリ",
  thumbnail: "/images/works/task-delivery/thumbnail.webp",
  cardAward: "",
  summary: {
    challenge:
      "請求書発行業務で、前工程の完了状況が見えず、次の担当者が作業開始を判断しづらい。",

    solution: [
      "課題を「連絡漏れ」ではなく、業務の現在地と判断材料が共有されていないことと定義。",
      "請求書発行業務を4工程に分解し、担当・期限・状態・履歴を工程単位で確認できるMVPを設計。",
      "初期プロトタイプを作成し、一覧・詳細・状態変更の流れを検証。",
      "ユーザーテストで見えた担当判別の分かりづらさやコメント入力負荷をもとに、担当中ラベル・工程担当表記・定型文による履歴記録へ改善。",
    ],

    role: {
      text: "課題定義、情報設計、UI設計、体験設計、プロトタイプ制作",
      font: "sans",
    },

    type: {
      text: "自主制作作品",
      font: "sans",
    },

    time: {
      text: "2026/05（約2週間）",
      font: "sans",
    },

    task: {
      text: "ヒアリング、課題整理、MVP定義、情報設計、UIデザイン、プロトタイプ制作、ユーザーテスト、改善",
      font: "sans",
    },

    tools: [
      { text: "FigJam", font: "en" },
      { text: "Figma", font: "en" },
    ],

    links: [
      {
        label: "プロトタイプを見る",
        href: "https://www.figma.com/proto/hlH1EnXZTWTAuMfWY7Dw51/%E3%82%BF%E3%82%B9%E3%82%AF%E3%83%87%E3%83%AA%E3%83%90%E3%83%AA%E3%83%BC?node-id=226-5623&viewport=502%2C157%2C0.07&t=QLUnMxBp2ShHMlXv-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=226%3A5623&page-id=145%3A487",
      },
    ],
  },

  content: [
    {
      type: "text",
      label: "Overview",
      title: "プロジェクト概要",
      titleFont: "sans",
      body: "タスクデリバリーは、部署をまたぐ請求書発行業務の進行状況を、工程単位で可視化する業務進行トラッキングアプリです。前工程の完了状況や次に取るべき行動が見えづらい状態を、担当・期限・状態・履歴が追える体験として整理しました。",
    },
    {
      type: "text",
      label: "Background",
      title: "着目した背景",
      titleFont: "sans",
      body: "部署をまたぐ定型業務では、自分の担当工程だけでなく、前後の工程がどこまで進んでいるかによって次の行動が変わります。進行状況が個別連絡や担当者の記憶に依存すると、確認・待機・手戻りが発生しやすく、業務全体の流れが見えにくくなると考えました。",
    },
    {
      type: "text",
      label: "Research",
      title: "課題の捉え直し",
      titleFont: "sans",
      body: "当初は、課題を部署間の連絡漏れや通知不足と仮定していました。しかし総務担当者へのヒアリングを通じて、連絡手段そのものよりも、今どの工程で止まっているのか、次に誰が動くべきかを判断しづらいことが大きな負担になっていると分かりました。\n\nそこで課題を「業務の現在地と判断材料が共有されていないこと」と再定義しました。",
    },
    {
      type: "image",
      src: "/images/works/task-delivery/task-delivery-detail-01.webp",
      alt: "タスクデリバリーのヒアリング整理",
      caption: "ヒアリング概要と、現状の請求書発行業務フロー",
      width: 3840,
      height: 1946,
    },
    {
      type: "text",
      label: "Problem",
      title: "解くべき課題",
      titleFont: "sans",
      body: "解くべき課題は、前工程の完了状況が見えず、次の担当者が作業開始を判断しづらいことです。\n\n単に連絡を増やすのではなく、部署間で業務の現在地と判断材料を共有し、次の作業へ迷わず進める状態をつくることを目指しました。",
    },
    {
      type: "image",
      src: "/images/works/task-delivery/task-delivery-detail-02.webp",
      alt: "タスクデリバリーの課題定義とHMW",
      caption: "エンパシーマップ、課題の整理、HMWの整理",
      width: 3840,
      height: 1840,
    },
    {
      type: "text",
      label: "Concept",
      title: "MVPの設計方針",
      titleFont: "sans",
      body: "解決策を通知やチャットの追加に広げると、初期MVPとしてはスコープが大きくなりすぎると考えました。\n\nそこで、まずは請求書発行業務を4工程に分解し、担当・期限・状態・履歴・次アクションを工程単位で確認できる体験に絞りました。複雑な機能を増やすよりも、業務の現在地を共有することを優先しました。",
    },
    {
      type: "image",
      src: "/images/works/task-delivery/task-delivery-detail-03.webp",
      alt: "タスクデリバリーのMVP設計方針",
      caption: "As-Is / To-Be、MVPで確認する体験、初期対象外の整理",
      width: 3840,
      height: 1946,
    },
    {
      type: "text",
      label: "IA",
      title: "情報設計",
      titleFont: "sans",
      body: "中心オブジェクトを「業務タスク」とし、その中に複数の「工程」を持つ構造にしました。タスク全体では進行状況を把握し、工程単位では担当・期限・状態・コメント・履歴を確認できるようにしています。\n\nこれにより、一覧では優先度を判断し、詳細では次アクションの根拠を確認する役割に分けました。",
    },
    {
      type: "image",
      src: "/images/works/task-delivery/task-delivery-detail-04.webp",
      alt: "タスクデリバリーの情報設計",
      caption: "業務タスクと工程の情報設計、一覧・詳細・モーダルの画面構成",
      width: 3840,
      height: 1896,
    },
    {
      type: "text",
      label: "UI Design",
      title: "一覧と詳細の役割",
      titleFont: "sans",
      body: "一覧では、対応すべきタスクを判断しやすいように、進行状況・現在の担当・期限・アラートを優先して表示しました。\n\n一方で詳細では、工程ごとの状態や履歴、コメントを集約し、なぜその状態なのか、次に何をすべきかを確認できる構成にしました。画面ごとに役割を分けることで、探す負担を減らすことを意識しています。",
    },
    {
      type: "image",
      src: "/images/works/task-delivery/task-delivery-detail-05.webp",
      alt: "タスクデリバリーのタスク一覧UI",
      caption: "進行状況、現在の担当、期限、アラートを確認するタスク一覧UI",
      width: 3840,
      height: 2002,
    },
    {
      type: "image",
      src: "/images/works/task-delivery/task-delivery-detail-06.webp",
      alt: "タスクデリバリーのタスク詳細UI",
      caption:
        "工程ごとの状態、コメント、履歴、次アクションを確認するタスク詳細UI",
      width: 3840,
      height: 2002,
    },
    {
      type: "text",
      label: "User Test",
      title: "ユーザーテストで分かったこと",
      titleFont: "sans",
      body: "初期プロトタイプを総務担当者に操作してもらい、一覧画面・詳細画面・状態変更操作の分かりやすさを確認しました。\n\nテストでは、履歴表示について「何が行われたか分かるので安心する」という反応があった一方で、一覧画面では「自分が対応すべき案件か分かりづらい」、確認操作では「毎回コメントを書くのが手間になりそう」という課題が見つかりました。\n\nそこで、担当中の案件を判断しやすくするラベル表示、工程担当表記の見直し、コメント未入力時も定型文で履歴に残る設計へ改善する方針にしました。",
    },
    {
      type: "image",
      src: "/images/works/task-delivery/task-delivery-detail-07.webp",
      alt: "タスクデリバリーの初期プロトタイプ検証",
      caption:
        "初期プロトタイプを検証し、一覧・詳細・状態変更操作で見えた課題を整理",
      width: 3840,
      height: 1275,
    },
    {
      type: "text",
      label: "Improvement",
      title: "改善したポイント",
      titleFont: "sans",
      body: "一覧画面では、ログインユーザーが担当中の案件のみを小さなラベルで明示し、確認すべき案件を判断しやすくしました。\n\n詳細画面では、案件全体の担当と工程ごとの担当が混同されないよう、工程カード内の表記を「担当」から「工程担当」に変更しました。あわせて、詳細画面でも担当中の状態が分かるようにし、一覧から詳細まで一貫した認識で確認できるようにしています。\n\nまた、工程開始・完了・確認完了などの定型操作では、コメント未入力時も操作内容に応じた定型文を履歴に記録する設計にしました。一方で、修正依頼のように相手への具体的な伝達が必要な操作では、入力を促すエラーを表示する想定としています。",
    },
    {
      type: "image",
      src: "/images/works/task-delivery/task-delivery-detail-08.webp",
      alt: "タスクデリバリーの改善後UI",
      caption: "担当中ラベル、工程担当表記、コメント入力負荷を見直した改善後UI",
      width: 3840,
      height: 1940,
    },
    {
      type: "text",
      label: "Prototype",
      title: "改善後のプロトタイプ",
      titleFont: "sans",
      body: "ユーザーテスト後の改善を反映したプロトタイプでは、一覧で担当中の案件を判断し、詳細で工程ごとの状態や履歴を確認し、モーダルで状態変更を行う流れを設計しました。\n\n操作後はToastで結果を返し、確認待ち・未着手・作業中・完了といった状態変化が利用者に伝わるようにしています。画面遷移だけでなく、業務が前に進んだことが分かるフィードバックも設計対象にしました。",
      links: [
        {
          label: "プロトタイプを見る",
          href: "https://www.figma.com/proto/hlH1EnXZTWTAuMfWY7Dw51/%E3%82%BF%E3%82%B9%E3%82%AF%E3%83%87%E3%83%AA%E3%83%90%E3%83%AA%E3%83%BC?node-id=226-5623&viewport=502%2C157%2C0.07&t=QLUnMxBp2ShHMlXv-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=226%3A5623&page-id=145%3A487",
        },
      ],
    },
    {
      type: "image",
      src: "/images/works/task-delivery/task-delivery-detail-09.webp",
      alt: "タスクデリバリーの改善後プロトタイプ",
      caption: "改善後の状態変更操作、モーダル確認、Toast通知、状態遷移の整理",
      width: 3840,
      height: 1684,
    },
    {
      type: "text",
      label: "Learning",
      title: "振り返り",
      titleFont: "sans",
      body: "この制作を通じて、業務を単に一覧化するのではなく、利用者が今の状態を理解し、次に何を確認・判断すべきか分かる形に整理することの重要性を学びました。\n\n特にユーザーテストでは、履歴表示が安心感につながる一方で、担当中の案件の見分けやコメント入力の負荷が実務利用時のつまずきになり得ることが分かりました。\n\n今後は、権限・通知・例外対応・担当者変更などの運用条件も踏まえ、より実務に耐える業務プロダクトとして発展させたいです。",
    },
  ],
};
