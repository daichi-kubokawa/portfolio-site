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
      "顧客との対話から素早くプロトタイプを作りながら、要件や設計判断の根拠を残し、品質も担保する必要がある。",
    solution: [
      "ヒアリングから画面生成までを一気通貫でつなぐAIワークフロー。仕様生成10〜13分、生成工程で必要な人手操作は約30秒。",
      "DRAFT / ITERATEの二段階設計。商談中は止まらず、検証は商談後に回す。",
      "WCAG比率の再計算や機密混入の検出を4本のスクリプトで自動判定し、CIで常時実行。",
    ],

    role: {
      text: "ワークフロー設計、AIエージェント設計、プロンプト設計、Claude Code実装、検証スクリプト実装、計測と改善",
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
      { text: "Python", font: "en" },
      { text: "GitHub Actions", font: "en" },
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
      body: "仕様駆動開発（SDD）やAI-DLCの考え方を参考に、顧客ヒアリングからプロトタイプ制作までを一気通貫に支援するAI開発ワークフローを設計・構築しました。\n\n想定業務を題材に、AIで成果物を作ることではなく、「どの工程で何を判断させ、どこで人間が確認するか」という開発プロセスそのものを設計しています。",
    },

    {
      type: "text",
      label: "Problem",
      title: "解くべき課題",
      titleFont: "sans",
      body: "ヒアリングから素早くプロトタイプを作るだけなら、生成AIで実現できます。一方で、生成速度を優先するほど「なぜこの仕様なのか」「なぜこのUIなのか」という判断根拠が失われやすくなります。\n\nそこで、スピードを維持しながら、要件・仕様・設計判断・品質を一貫して管理できる開発プロセスを設計しました。",
    },

    {
      type: "text",
      label: "Workflow Design",
      title: "ヒアリングからプロトタイプまでつなぐ",
      titleFont: "sans",
      body: "FigJamで整理したヒアリング情報をFigma MCP経由でClaude Codeへ取り込み、要件定義書・仕様書・設計判断・Figma Make用プロンプトへ展開します。\n\n前工程の成果物を次工程の根拠として引き継ぎ、ヒアリングからプロトタイプ生成までの情報を一貫してつなぐ構造にしました。",
    },

    {
      type: "image",
      src: "/images/works/spec-driven-prototyping/detail-01.webp",
      alt: "AI開発ワークフローの全体構成",
      caption:
        "ヒアリングから仕様化・プロトタイプ制作・レビューまでをつなぐワークフロー",
      width: 2800,
      height: 1256,
    },

    {
      type: "text",
      label: "DRAFT / ITERATE",
      title: "スピードと品質を両立する二段階設計",
      titleFont: "sans",
      body: "DRAFTではヒアリング中のスピードを優先し、問題を検出しても記録したうえでプロトタイプ生成まで進めます。ITERATEでは商談後に仕様や設計を改めて検証し、基準を満たさない場合は次の工程へ進めません。\n\n検査を省略して速くするのではなく、「いつ止めるか」を分けることで、素早い仮説検証と品質担保を両立しています。",
    },

    {
      type: "text",
      label: "Agent Architecture",
      title: "AIの役割を3つに分ける",
      titleFont: "sans",
      body: "AIエージェントは、要件・設計・検証の3つの役割に分けました。細分化しすぎると受け渡しが増えるため、必要な責務を3つに集約しています。\n\nまた、エージェントや知識を持つ「再利用層」と、案件ごとの成果物を持つ「案件層」を分離し、別のプロジェクトでも再利用できる構造にしました。",
    },

    {
      type: "image",
      src: "/images/works/spec-driven-prototyping/detail-02.webp",
      alt: "3つのAIエージェントと再利用層・案件層の構成",
      caption: "エージェントや知識を再利用層に、案件ごとの成果物を案件層に分離",
      width: 2342,
      height: 1096,
    },

    {
      type: "text",
      label: "Knowledge Architecture",
      title: "答えではなく、判断基準を与える",
      titleFont: "sans",
      body: "AIエージェントには特定の配色やレイアウトといった「正解」を持たせず、ISO 9241-11、WCAG、Fittsの法則、OWASPなどを判断基準として参照させています。\n\n実際に、深夜の当直業務では利用状況からダークUIを導出。一方、判断に必要な情報が不足していた案件では既定値を採用し、「未確定」として次回の確認事項に残しました。情報が足りなければAIに推測させず、判断を保留する設計です。\n\nまた、各知識ファイルには出典を明記し、外部の裏付けがない自作の規約も区別しています。",
    },

    {
      type: "image",
      src: "/images/works/spec-driven-prototyping/detail-03.webp",
      alt: "利用状況を決定モデルに代入して輝度極性を導出する流れ",
      caption:
        "利用状況を決定モデルに代入して設計を導き、棄却した選択肢と、判断が崩れる条件まで残す",
      width: 2342,
      height: 1188,
    },

    {
      type: "text",
      label: "Quality Gate",
      title: "AIの出力を、そのまま正解にしない",
      titleFont: "sans",
      body: "AIの出力をそのまま採用せず、数値で判定できるものは自動検証し、要件や設計の整合性など判断が必要なものは人間がレビューする仕組みにしました。\n\n実際に、アクセシビリティ基準を満たさないデザイン規約や、外部サービスへ渡すファイルへの顧客情報の混入を検出し、修正しています。検査は4本のスクリプトにまとめ、AIの判断に依存せず自動実行される構造にしています。",
    },

    {
      type: "image",
      src: "/images/works/spec-driven-prototyping/detail-04.webp",
      alt: "WCAGコントラスト比を自動検証するスクリプト",
      caption: "数値で判定できる品質基準は、AIの自己申告ではなく自動検証",
      width: 2342,
      height: 1126,
    },

    {
      type: "text",
      label: "Validation",
      title: "実際に動かして、仕組みを改善する",
      titleFont: "sans",
      body: "ワークフローを実際に動かして生成時間を計測し、ボトルネックを改善しました。\n\n成果物ごとにAIエージェントを呼び直していたことが原因と分かり、委譲を6回から2回へ統合。成果物や検査を削ることなく、仕様生成時間を17分09秒から11分50秒へ約31%短縮しました。\n\n公開している2案件でも仕様生成は10分51秒と12分55秒、Figma Makeでの生成を含めて画面に到達するまでが22分55秒と19分10秒でした。このうち人手操作はファイル添付とプロンプト貼付の約30秒です。",
    },

    {
      type: "image",
      src: "/images/works/spec-driven-prototyping/detail-05.webp",
      alt: "ワークフロー改善前後の計測値と、原因および対策",
      caption:
        "ワークフロー改善時の計測：委譲を6回から2回へ統合し、所要時間を31%削減",
      width: 2342,
      height: 1062,
    },

    {
      type: "text",
      label: "Output Example",
      title: "ワークフローからプロトタイプへ",
      titleFont: "sans",
      body: "生成した画面仕様・実文言・デザイントークン・設計判断・非機能要件と専用プロンプトをFigma Makeへ渡し、プロトタイプを生成します。\n\n生成されたコードを仕様と照合し、空状態や条件分岐が仕様どおり実装されていること、禁止した実装パターンが混入していないことを確認しました。",
      links: [
        {
          label: "プロトタイプ（ライト版）を見る",
          href: "https://appeal-slush-81841099.figma.site",
        },
        {
          label: "プロトタイプ（ダーク版）を見る",
          href: "https://swear-brave-80703018.figma.site",
        },
        {
          label: "ワークフローを見る",
          href: "https://github.com/daichi-kubokawa/prototyping-agents/blob/main/WORKFLOW.md",
        },
      ],
    },

    {
      type: "image",
      src: "/images/works/spec-driven-prototyping/detail-06.webp",
      alt: "ワークフローから生成したプロトタイプ画面",
      caption:
        "仕様・実文言・デザイントークンから生成した実際のプロトタイプ（ライト版）",
      width: 3250,
      height: 2122,
    },

    {
      type: "image",
      src: "/images/works/spec-driven-prototyping/detail-07.webp",
      alt: "ワークフローから生成したプロトタイプ画面",
      caption:
        "仕様・実文言・デザイントークンから生成した実際のプロトタイプ（ダーク版）",
      width: 3250,
      height: 2122,
    },

    {
      type: "text",
      label: "Reflection",
      title: "振り返り",
      titleFont: "sans",
      body: "本プロジェクトを通して、生成AIの活用ではプロンプトだけでなく、「どの工程で何を判断させ、どこで人間が確認するか」というプロセス設計が重要だと実感しました。実際に動かして計測・検証することで、設計時には見えなかった問題も発見し、ワークフローを改善できました。\n\n今回は確定した仕様と動くプロトタイプまでを対象とし、実装は意図的に含めていません。実装可能な単位へ分解した成果物を引き渡し、既存の開発プロセスへ接続する設計としています。",
    },
  ],
};
