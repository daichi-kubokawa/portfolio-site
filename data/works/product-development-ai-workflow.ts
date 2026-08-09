import type { Work } from "@/types/work";

export const productDevelopmentAiWorkflow: Work = {
  slug: "product-development-ai-workflow",
  title: "AI開発ワークフロー",
  titleFont: "sans",
  category: "AI Workflow Design",
  description:
    "ヒアリングから仕様化・プロトタイプ制作までをつなぐAI駆動型開発フレームワーク",
  thumbnail: "/images/works/product-development-ai-workflow/thumbnail.webp",

  summary: {
    challenge:
      "顧客との対話をもとにその場でプロトタイプを作るには、スピードだけでなく、要件や設計判断の根拠を残しながら品質を担保する必要がある。",

    solution: [
      "ヒアリングからプロトタイプ生成までの一気通貫したAIワークフロー。",
      "DRAFT / ITERATEによる、スピードと品質の両立。",
      "品質ゲートと自動検証による、設計根拠と品質の担保。",
    ],

    role: {
      text: "ワークフロー設計、AIエージェント設計、プロンプト設計、Claude Code実装、品質検証",
      font: "sans",
    },

    type: {
      text: "個人プロジェクト",
      font: "sans",
    },

    time: {
      text: "2026/08",
      font: "sans",
    },

    tools: [
      { text: "Claude Code", font: "en" },
      { text: "FigJam", font: "en" },
      { text: "Figma MCP", font: "en" },
      { text: "Figma Make", font: "en" },
    ],

    links: [
      {
        label: "GitHubリポジトリを見る",
        href: "https://github.com/daichi-kubokawa/prototyping-agents",
      },
    ],
  },

  content: [
    {
      type: "text",
      label: "Overview",
      title: "プロジェクト概要",
      titleFont: "sans",
      body: "顧客ヒアリングから要件定義・仕様設計・プロトタイプ制作までを、AIエージェントで一気通貫に支援する開発ワークフローを設計・構築しました。\n\nClaude Codeを基盤に、FigJamのヒアリング情報をFigma MCP経由で取得し、複数の専門AIエージェントが要件や仕様へ変換。Figma Makeでプロトタイプを生成し、顧客との対話をもとに改善を繰り返せる構造にしています。\n\n本プロジェクトでは、AIで何を作るかではなく、AIを開発プロセスの中でどう役割分担させ、判断させ、品質を担保するかという「ワークフローそのもの」を設計対象としました。",
    },

    {
      type: "text",
      label: "Problem",
      title: "解くべき課題",
      titleFont: "sans",
      body: "ヒアリング内容から素早くプロトタイプを作るだけなら、生成AIを使うことで実現できます。\n\n一方で、生成速度を優先するほど「なぜこの仕様なのか」「なぜこのUIなのか」という判断根拠が失われやすく、後から仕様を見直すことも難しくなります。\n\nそこで、プロトタイピングのスピードを維持しながら、要件・仕様・設計判断・品質を一貫して管理できる開発プロセスが必要だと考えました。",
    },

    {
      type: "text",
      label: "Workflow Design",
      title: "開発プロセス全体を設計する",
      titleFont: "sans",
      body: "ヒアリングを起点に、情報整理、要件定義、仕様設計、UI生成、レビューまでを一つのワークフローとして設計しました。\n\nFigJamで整理したヒアリング情報をFigma MCPから取得し、Claude Code上でブリーフィングを作成。その情報を専門AIエージェントへ引き継ぎ、要件定義書・仕様書・設計判断・Figma Make用プロンプトなどを生成します。\n\n各工程を独立させるのではなく、前工程の成果物を次工程の根拠として引き継ぐ構造にしています。",
    },

    {
      type: "image",
      src: "/images/works/prototyping-agents/detail-01.webp",
      alt: "AI開発ワークフローの全体構成",
      caption:
        "ヒアリングから仕様化・プロトタイプ制作・レビューまでをつなぐワークフロー",
      width: 3120,
      height: 2000,
    },

    {
      type: "text",
      label: "DRAFT / ITERATE",
      title: "スピードと品質を両立する二段階設計",
      titleFont: "sans",
      body: "ワークフローをDRAFTとITERATEの2段階に分けました。\n\nDRAFTではヒアリング中のスピードを優先し、問題を検出しても記録したうえでプロトタイプ生成まで進めます。ITERATEでは商談後に仕様や設計を改めて検証し、基準を満たさない場合は次の工程へ進めません。\n\n検査を省略して速くするのではなく、「いつ止めるか」を分けることで、素早い仮説検証と品質担保を両立しています。",
    },

    {
      type: "text",
      label: "Agent Architecture",
      title: "AIの役割を3つに分ける",
      titleFont: "sans",
      body: "AIエージェントは、要件・設計・検証の3つの役割に分けました。\n\n役割を細かく分けすぎるとエージェント間の受け渡しが増えるため、開発プロセスに必要な責務を整理したうえで3つに集約しています。\n\nまた、エージェント定義や方法論など案件をまたいで使える「再利用層」と、要件定義書や仕様書など案件ごとに生成する「案件層」を分離し、別のプロジェクトでも同じ仕組みを利用できる構造にしました。",
    },

    // ここに「3エージェント + 再利用層 / 案件層」の構成図を追加推奨

    {
      type: "text",
      label: "Knowledge Architecture",
      title: "答えではなく、判断基準を与える",
      titleFont: "sans",
      body: "AIエージェントには、特定の配色やレイアウトといった「正解」をあらかじめ持たせていません。\n\n代わりに、UIデザインやアクセシビリティなどのベストプラクティスを判断基準として参照し、案件の要件や利用文脈から設計を導出する構造にしました。\n\n同じエージェントでも、夜間利用ではDark UI、屋外利用ではLight UIというように異なる設計を導き、その理由を設計判断として記録します。",
    },

    {
      type: "image",
      src: "/images/works/prototyping-agents/detail-02.webp",
      alt: "同じAIエージェントが異なる利用文脈から導出したUIの比較",
      caption: "同じ判断基準から、利用文脈に応じて異なるUIを導出",
      width: 3120,
      height: 1800,
    },

    {
      type: "text",
      label: "Quality Gate",
      title: "AIの出力を、そのまま正解にしない",
      titleFont: "sans",
      body: "AIが「基準を満たしている」と回答するだけでは、品質を担保できません。\n\nそこで、WCAGのコントラスト比など数値で判定できる項目はスクリプトで再計算し、Claude Codeのフックから自動検証する仕組みを組み込みました。\n\n一方、要件と設計の整合性など機械的に判断できない項目は人間がレビューし、AI・自動検証・人間で役割を分けています。",
    },

    {
      type: "image",
      src: "/images/works/prototyping-agents/detail-04.webp",
      alt: "WCAGコントラスト比を自動検証するスクリプト",
      caption: "数値で判定できる品質基準は、AIの自己申告ではなく自動検証",
      width: 2342,
      height: 1200,
    },

    {
      type: "text",
      label: "Validation",
      title: "実際に動かして、仕組みを改善する",
      titleFont: "sans",
      body: "設計したワークフローを実際に動かし、生成時間や成果物を検証しました。\n\n初回は21分50秒・866行を要しましたが、処理を分析すると、出力量を制限する指示がAIエージェントまで正しく伝わっていないことが判明しました。\n\n指示する場所と生成範囲を見直した結果、11分31秒・331行まで削減。同一条件で所要時間を約47%、生成量を約62%削減しました。",
    },

    {
      type: "image",
      src: "/images/works/prototyping-agents/detail-03.webp",
      alt: "AI開発ワークフロー改善前後の比較",
      caption: "ワークフロー改善前後：所要時間 約47%削減 / 生成量 約62%削減",
      width: 2342,
      height: 1400,
    },

    {
      type: "text",
      label: "Output Example",
      title: "ワークフローからプロトタイプへ",
      titleFont: "sans",
      body: "ワークフローから生成した画面仕様・実文言・デザイントークン・設計判断・非機能要件と専用プロンプトをFigma Makeへ渡し、プロトタイプを生成します。\n\nプロトタイプそのものを成果の中心とするのではなく、ヒアリングで得た情報が要件・仕様・設計判断を経て、実際の画面まで一貫してつながることを確認するための出力として位置付けています。",
      links: [
        {
          label: "ワークフロー全文を見る",
          href: "https://github.com/daichi-kubokawa/prototyping-agents/blob/main/WORKFLOW.md",
        },
      ],
    },

    // ここに実際に生成したプロトタイプ画像を1枚追加推奨

    {
      type: "text",
      label: "Reflection",
      title: "振り返り",
      titleFont: "sans",
      body: "本プロジェクトを通して、生成AIを活用するうえでは、プロンプトだけでなく「どの工程で、何を判断させ、どこで検証するか」というプロセス設計が重要だと実感しました。\n\nまた、実際にワークフローを動かすことで、指示が正しく伝わらない箇所や、AIだけでは担保できない品質など、設計時には見えなかった課題も発見できました。\n\n現在はヒアリングからプロトタイプ生成までを実際に検証済みです。仕様レビュー以降の実装フローは設計済みで、今後の検証対象としています。",
    },
  ],
};
