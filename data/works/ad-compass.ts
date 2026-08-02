import type { Work } from "@/types/work";

export const adCompass: Work = {
  slug: "ad-compass",
  title: "AD Compass",
  titleFont: "sans",
  category: "Product Design",
  description: "UXリサーチから検証・改善まで設計したMVPプロダクト",
  thumbnail: "/images/works/ad-compass/thumbnail.webp",

  summary: {
    challenge:
      "展示会案件でアートディレクションを担い始めたユーザーは、役割や判断基準、確認のタイミングが曖昧な中で、周囲への遠慮も重なり、一人で判断を抱え込んでいた。",

    solution: [
      "課題を知識不足だけでなく、判断基準と相談タイミングが共有されていないこととして捉え直した。",
      "工程ごとに、自分で進めることと他者に確認することを整理した。",
      "相談相手・確認内容・タイミングを提示し、次の行動を判断できるプロセスガイドを設計した。",
    ],

    role: {
      text: "UXリサーチ、要件定義、仕様設計、プロトタイプ制作、ユーザーテスト、改善",
      font: "sans",
    },

    type: {
      text: "個人プロジェクト",
      font: "sans",
    },

    time: {
      text: "2026/07 - 2026/08",
      font: "sans",
    },

    tools: [
      { text: "NotebookLM", font: "en" },
      { text: "Gemini", font: "en" },
      { text: "Claude", font: "en" },
      { text: "Figma", font: "en" },
      { text: "FigJam", font: "en" },
      { text: "Figma Make", font: "en" },
    ],

    links: [
      {
        label: "GitHubリポジトリを見る",
        href: "https://github.com/daichi-kubokawa/AD-Compass",
      },
    ],
  },

  content: [
    {
      type: "text",
      label: "Overview",
      title: "プロジェクト概要",
      titleFont: "sans",
      body: "AD Compassは、展示会案件でアートディレクションを担い始めたユーザーが、判断に迷ったときに適切なタイミングで相談しながら案件を進められるよう支援するプロセスガイドです。\n\n展示会案件を担当するデザイナーへのインタビューを起点に、UXリサーチ、課題定義、要件定義、仕様設計、プロトタイプ制作、ユーザーテスト、改善まで、一連のプロダクト開発プロセスとして取り組みました。\n\n生成AIを工程ごとに活用しながらも、設計判断や改善方針は自身で行い、レビューとユーザーテストを通じてVersion3.2までブラッシュアップしています。",
    },
    {
      type: "text",
      label: "Research",
      title: "UXリサーチ",
      titleFont: "sans",
      body: "展示会案件を担当し、デザイナーとアートディレクターを兼任しているユーザーへデプスインタビューを実施しました。\n\n録音データをNotebookLMで整理し、困りごとや業務の流れ、関係者とのやり取りを抽出。その内容をFigJam上で構造化し、課題の背景や理想状態、要件候補を整理しました。\n\n発言を分析すると、業務知識だけではなく、役割分担や判断基準の曖昧さ、相談しづらい雰囲気など、複数の要因が重なって判断を抱え込んでいることが見えてきました。\n\nこの分析から、知識を補うことではなく、判断と相談を支援する仕組みが必要だと考えました。",
    },
    {
      type: "image",
      src: "/images/works/ad-compass/ad-compass-detail-01.webp",
      alt: "AD Compassのユーザーリサーチと課題整理",
      caption: "インタビューで得た発言を整理し、課題定義へつなげたFigJam",
      width: 3120,
      height: 2972,
    },
    {
      type: "text",
      label: "Problem",
      title: "課題の再定義",
      titleFont: "sans",
      body: "リサーチを通して見えてきたのは、知識やマニュアルが不足していることではなく、判断基準と相談のタイミングが共有されていないことでした。\n\nそこで本プロジェクトでは、「誰に・何を・いつ相談すればよいか分からず、一人で判断を抱え込んでしまうこと」を解くべき課題として定義しました。\n\nその課題を解決するため、工程ごとに判断事項と確認事項を整理し、迷ったときに次の行動を判断できるプロセスガイドを設計しました。",
    },
    {
      type: "text",
      label: "Requirements",
      title: "要件定義",
      titleFont: "sans",
      body: "リサーチで整理した課題をもとに、GeminiでPRDと要件定義のドラフトを作成しました。\n\nその後、自身でレビューを行いながらMVPとして実現する範囲を整理し、必要な機能と優先順位を定義しました。\n\n相談機能そのものではなく『相談へつなげること』を価値と捉え、Teamsなど既存ツールを利用する構成とし、チャット・通知・共同編集などは対象外としました。",
    },
    {
      type: "text",
      label: "Specification",
      title: "仕様設計",
      titleFont: "sans",
      body: "Geminiで整理した要件をもとに、Claudeを活用して画面構成、画面遷移、状態遷移、データ構造を設計しました。\n\nその後、仕様レビューを繰り返しながら画面仕様や受け入れ基準、エッジケースまで詳細化し、設計判断をドキュメントへ反映しました。\n\nプロトタイプの改善に合わせて仕様も継続的に更新し、Version3.2では画面と仕様が一致した状態を維持しています。",
    },
    {
      type: "text",
      label: "Version1",
      title: "Version1 プロトタイプ",
      titleFont: "sans",
      body: "仕様設計をもとに、Figma MakeでVersion1のプロトタイプを生成しました。\n\n生成されたUIをそのまま採用するのではなく、要件や仕様との整合性、情報構造、操作導線を確認し、課題を洗い出しました。\n\nVersion1は完成版ではなく、レビューと改善を前提とした最初の検証プロトタイプとして位置付けています。",
    },
    {
      type: "image",
      src: "/images/works/ad-compass/ad-compass-detail-02.webp",
      alt: "AD Compass Version1の案件詳細画面",
      caption: "自分で行うことと、他者に確認することを分けて表示したVersion1",
      width: 2342,
      height: 1626,
    },
    {
      type: "text",
      label: "Version1 Review",
      title: "Version1 レビュー",
      titleFont: "sans",
      body: "Version1完成後は、ClaudeとGeminiによるレビューに加え、自身でもUX・情報設計・MVPの観点からレビューを実施しました。\n\n仕様との整合性だけでなく、ユーザー課題を解決できる導線になっているかを確認し、相談導線や確認タイミング、状態遷移などの改善点を整理しました。",
    },
    {
      type: "text",
      label: "Version2",
      title: "Version2へ改善",
      titleFont: "sans",
      body: "Version1のレビュー結果に加えて要件漏れレビューを行い、画面上の問題だけでなく、業務フローを成立させるために不足していた要件も見直しました。\n\nVersion2では、相談導線や確認タイミングの表現を改善し、工程メモ、過去工程の参照、完了案件の閲覧などをMVPの範囲内で追加しました。\n\nこのVersion2を、ユーザーテストに使用する検証版として位置付けています。",
    },
    {
      type: "image",
      src: "/images/works/ad-compass/ad-compass-detail-03.webp",
      alt: "AD Compass Version2の案件詳細画面",
      caption:
        "レビュー結果を反映し、ユーザーテストに使用したVersion2プロトタイプ",
      width: 2342,
      height: 2343,
    },
    {
      type: "text",
      label: "User Test",
      title: "Version2 ユーザーテスト",
      titleFont: "sans",
      body: "Version2を対象に、実際のヒアリング対象者へ非同期のユーザーテストを実施しました。\n\n自己申告だけに依存しないよう、タスク・設問・判定基準を事前に設計し、操作ログと回答をもとにUX上の課題を分析しました。\n\n得られた結果はVersion3.2の改善へ反映しています。",
    },
    {
      type: "image",
      src: "/images/works/ad-compass/ad-compass-detail-04.webp",
      alt: "AD Compassの非同期ユーザーテスト設計",
      caption: "検証仮説、タスク、設問、判定基準を整理したユーザーテスト計画",
      width: 3138,
      height: 1824,
    },
    {
      type: "text",
      label: "Findings",
      title: "ユーザーテストで分かったこと",
      titleFont: "sans",
      body: "テストでは、案件の現在地や次に行うことは概ね理解されました。一方で、相談するタイミングや画面の役割、完了後の扱いなど、一部で認識のずれが見つかりました。\n\n特に、相談ガイドだけで相談まで完結すると誤解されたことや、振り返り画面を第三者へ提出するものと受け取られたことから、画面だけでなく情報設計や文言、状態遷移の見直しが必要だと判断しました。\n\nこれらの結果をもとに設計判断を行い、Version3.2へ改善を反映しています。",
    },
    {
      type: "text",
      label: "Design Decision",
      title: "設計判断",
      titleFont: "sans",
      body: "ユーザーテストで得られた意見をそのまま機能へ反映するのではなく、背景にある課題や業務シナリオを整理し、MVPの範囲、実装コスト、既存仕様との整合性を踏まえて改善内容を判断しました。\n\n例えば、「完了したと思った案件が再び動き出した場合に迷う」という課題に対しては、工程を自由に巻き戻す機能ではなく、完了状態を解除して納品工程から案件を再開できる導線として設計しました。\n\n一方、工程単位の巻き戻しなどは、実務フローの検証が必要と判断し、今回は実装せず将来の改善候補として整理しました。",
    },
    {
      type: "text",
      label: "Version3.2",
      title: "Version3.2へ改善",
      titleFont: "sans",
      body: "ユーザーテストで得られた課題に加え、自身でも実機レビューを繰り返し行い、UX・情報設計・文言・状態遷移の観点から改善を重ねました。\n\n改善内容は仕様書にも反映し、プロトタイプと仕様の整合性を維持しながらVersion3.2としてブラッシュアップしました。",
    },
    {
      type: "text",
      label: "Prototype",
      title: "Version3.2 最終プロトタイプ",
      titleFont: "sans",
      body: "リサーチ、仕様設計、レビュー、ユーザーテストを通じて改善を重ねた最終プロトタイプです。\n\n判断と相談の流れを分かりやすく伝える情報設計へブラッシュアップし、MVPとして必要な体験を形にしました。",
      links: [
        {
          label: "Version3.2 プロトタイプを見る",
          href: "https://next-facet-80465802.figma.site/",
        },
      ],
    },
    {
      type: "text",
      label: "Reflection",
      title: "振り返り",
      titleFont: "sans",
      body: "本プロジェクトでは、NotebookLM、Gemini、Claude、Figma Makeを工程ごとに使い分け、UXリサーチから要件定義、仕様設計、プロトタイプ制作、ユーザーテスト、改善まで、一連のプロダクト開発プロセスを構築しました。\n\n特に、生成AIの出力をそのまま採用するのではなく、レビューやユーザーテストで得られたフィードバックをもとに、MVPの範囲や既存仕様との整合性を踏まえながら設計判断を繰り返したことが、本プロジェクトで最も大きな学びでした。\n\n生成AIを開発プロセスの加速に活用しつつ、最終的な意思決定と品質の担保は自ら行うことで、仮説検証を繰り返しながらプロダクトをブラッシュアップするプロセスを実践しました。",
    },
  ],
};
