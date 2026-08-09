import type { Work } from "@/types/work";

export const specDrivenPrototyping: Work = {
  slug: "spec-driven-prototyping",
  title: "仕様駆動プロトタイピング",
  titleFont: "sans",
  category: "AI Workflow Design",
  description:
    "顧客との対話中に、判断の根拠を残しながら画面を作るAIワークフロー",
  thumbnail: "/images/works/spec-driven-prototyping/thumbnail.webp",

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
      body: "仕様駆動開発（SDD）やAI-DLCの考え方を参考に、顧客ヒアリングからプロトタイプ制作までを一気通貫に支援するAI開発ワークフローを設計・構築しました。\n\n想定業務を題材に、AIで成果物を作ることではなく、「どの工程で、何を判断させ、どこで人間が確認するか」という開発プロセスそのものを設計しています。\n\nスピードだけでなく、要件・仕様・設計判断の根拠を残しながら、顧客との対話を通じて改善を繰り返せることを目指しました。",
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
      title: "ヒアリングからプロトタイプまでつなぐ",
      titleFont: "sans",
      body: "FigJamで整理したヒアリング情報をFigma MCP経由でClaude Codeへ取り込み、ブリーフィングを作成します。\n\nその情報を専門AIエージェントへ引き継ぎ、要件定義書・仕様書・設計判断・Figma Make用プロンプトなどを生成。Figma Makeでプロトタイプへ変換します。\n\n前工程の成果物を次工程の根拠として引き継ぐことで、ヒアリングから画面生成までの情報を一貫してつなぐ構造にしています。",
    },

    // {
    //   type: "image",
    //   src: "/images/works/spec-driven-prototyping/detail-01.webp",
    //   alt: "AI開発ワークフローの全体構成",
    //   caption:
    //     "ヒアリングから仕様化・プロトタイプ制作・レビューまでをつなぐワークフロー",
    //   width: 3200,
    //   height: 1828,
    // },

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
      body: "AIエージェントは、要件・設計・検証の3つの役割に分けました。\n\n役割を細かく分けすぎると受け渡しが増えるため、必要な責務を整理して3つに集約しています。\n\nまた、エージェントや知識を持つ「再利用層」と、案件ごとの要件定義書や仕様書を持つ「案件層」を分離し、別のプロジェクトでも再利用できる構造にしました。",
    },

    // {
    //   type: "image",
    //   src: "/images/works/spec-driven-prototyping/detail-02.webp",
    //   alt: "3つのAIエージェントと再利用層・案件層の構成",
    //   caption: "エージェントや知識を再利用層に、案件ごとの成果物を案件層に分離",
    //   width: 2816,
    //   height: 1536,
    // },

    {
      type: "text",
      label: "Knowledge Architecture",
      title: "答えではなく、判断基準を与える",
      titleFont: "sans",
      body: "AIエージェントには、特定の配色やレイアウトといった「正解」をあらかじめ持たせていません。\n\n代わりに、UIデザインやアクセシビリティなどのベストプラクティスを判断基準として参照し、案件の要件や利用文脈から設計を導く構造にしました。\n\n例えば、夜間利用ではダークUI、屋外利用ではライトUIというように、同じ判断基準から利用文脈に応じた設計を導き、その理由も記録します。",
    },

    // {
    //   type: "image",
    //   src: "/images/works/spec-driven-prototyping/detail-03.webp",
    //   alt: "プロジェクト情報と判断基準から設計判断を導くAIエージェントの構造",
    //   caption: "要件・知識・制約をもとに設計を判断し、その根拠をADRとして残す",
    //   width: 2816,
    //   height: 1536,
    // },

    {
      type: "text",
      label: "Quality Gate",
      title: "AIの出力を、そのまま正解にしない",
      titleFont: "sans",
      body: "AIが生成した内容をそのまま採用せず、確認してから次の工程へ進む仕組みを設けました。\n\n数値で確認できるものは自動検証し、要件や設計の整合性など判断が必要なものは人間がレビューします。\n\n例えばアクセシビリティでは、画面のコントラスト比を自動で計算し、基準を満たしているか確認できるようにしています。実際にこの検証で、自分が定めたデザイン規約が可読性より優先される書き方になっていた箇所を発見し、規約自体を修正しました。\n\nまた、外部サービスへ渡すファイルに顧客の発言や機密情報が残っていないかも自動検査しています。渡さないと決めたヒアリング記録の内容が、別のファイルへ引用として転記されていた箇所を実際に検出しました。",
    },

    // {
    //   type: "image",
    //   src: "/images/works/spec-driven-prototyping/detail-04.webp",
    //   alt: "WCAGコントラスト比を自動検証するスクリプト",
    //   caption: "数値で判定できる品質基準は、AIの自己申告ではなく自動検証",
    //   width: 2342,
    //   height: 1200,
    // },

    {
      type: "text",
      label: "Validation",
      title: "実際に動かして、仕組みを改善する",
      titleFont: "sans",
      body: "設計したワークフローを実際に動かし、生成時間や成果物を検証しました。\n\n初回は21分50秒・866行を要しましたが、処理を分析すると、出力量を制限する指示がAIエージェントまで正しく伝わっていないことが判明しました。\n\n指示する場所と生成範囲を見直した結果、11分31秒・331行まで削減。同一の入力で2回計測し、所要時間を約47%、生成量を約62%、エージェント間の受け渡しを約60%削減しました。",
    },

    // {
    //   type: "image",
    //   src: "/images/works/spec-driven-prototyping/detail-05.webp",
    //   alt: "AI開発ワークフロー改善前後の比較",
    //   caption: "ワークフロー改善前後：所要時間 約47%削減 / 生成量 約62%削減",
    //   width: 2342,
    //   height: 1400,
    // },

    {
      type: "text",
      label: "Output Example",
      title: "ワークフローからプロトタイプへ",
      titleFont: "sans",
      body: "生成した画面仕様・実文言・デザイントークン・設計判断・非機能要件と専用プロンプトをFigma Makeへ渡し、プロトタイプを生成します。\n\n生成されたコードを回収して仕様と照合し、空状態や条件分岐が仕様どおり実装されていること、禁止した実装パターンが混入していないことを確認しました。\n\nヒアリングで得た情報が、要件・仕様・設計判断を経て実際の画面まで一貫してつながることを確認しています。",
      links: [
        {
          label: "ワークフロー全文を見る",
          href: "https://github.com/daichi-kubokawa/prototyping-agents/blob/main/WORKFLOW.md",
        },
      ],
    },

    // {
    //   type: "image",
    //   src: "/images/works/product-development-ai-workflow/detail-06.webp",
    //   alt: "ワークフローから生成したプロトタイプ画面",
    //   caption: "仕様・実文言・デザイントークンから生成した実際のプロトタイプ",
    //   width: 2342,
    //   height: 1400,
    // },

    {
      type: "text",
      label: "Reflection",
      title: "振り返り",
      titleFont: "sans",
      body: "本プロジェクトを通して、生成AIを活用するうえでは、プロンプトだけでなく「どの工程で、何を判断させ、どこで検証するか」というプロセス設計が重要だと実感しました。\n\nまた、実際にワークフローを動かすことで、指示が正しく伝わらない箇所や、AIだけでは担保できない品質など、設計時には見えなかった課題も発見できました。\n\n現在はヒアリングからプロトタイプ生成までを実際に検証済みです。仕様レビュー以降の実装フローは設計済みで、今後の検証対象としています。",
    },
  ],
};
