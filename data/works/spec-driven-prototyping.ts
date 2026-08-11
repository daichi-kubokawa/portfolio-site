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

    {
      type: "image",
      src: "/images/works/spec-driven-prototyping/detail-01.webp",
      alt: "AI開発ワークフローの全体構成",
      caption:
        "ヒアリングから仕様化・プロトタイプ制作・レビューまでをつなぐワークフロー",
      width: 2800,
      height: 1600,
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
      body: "AIエージェントは、要件・設計・検証の3つの役割に分けました。\n\n役割を細かく分けすぎると受け渡しが増えるため、必要な責務を整理して3つに集約しています。\n\nまた、エージェントや知識を持つ「再利用層」と、案件ごとの要件定義書や仕様書を持つ「案件層」を分離し、別のプロジェクトでも再利用できる構造にしました。",
    },

    {
      type: "image",
      src: "/images/works/spec-driven-prototyping/detail-02.webp",
      alt: "3つのAIエージェントと再利用層・案件層の構成",
      caption: "エージェントや知識を再利用層に、案件ごとの成果物を案件層に分離",
      width: 2342,
      height: 1400,
    },

    {
      type: "text",
      label: "Knowledge Architecture",
      title: "答えではなく、判断基準を与える",
      titleFont: "sans",
      body: "AIエージェントには、特定の配色やレイアウトといった「正解」をあらかじめ持たせていません。\n\n代わりに、ISO 9241-11、WCAG、Fittsの法則、OWASPなどを判断基準として参照させ、案件の要件や利用文脈から設計を導く構造にしました。\n\n実際に、日中のオフィスで長文を読む業務ではライト、深夜の当直業務ではダークが導出されました。同じ判断基準に、異なる利用状況を与えた結果です。どちらもリポジトリに成果物として残しています。\n\nまた、各知識ファイルには出典を明記しています。11ファイルのうち2つは外部の裏付けがない自作の規約であることも明示し、AIが参照する知識の根拠まで確認できるようにしました。",
    },

    {
      type: "image",
      src: "/images/works/spec-driven-prototyping/detail-03.webp",
      alt: "プロジェクト情報と判断基準から設計判断を導くAIエージェントの構造",
      caption: "要件・知識・制約をもとに設計を判断し、その根拠をADRとして残す",
      width: 2342,
      height: 1400,
    },

    {
      type: "text",
      label: "Quality Gate",
      title: "AIの出力を、そのまま正解にしない",
      titleFont: "sans",
      body: "AIの出力をそのまま採用せず、数値で判定できるものは自動検証し、要件や設計の整合性など判断が必要なものは人間がレビューする仕組みにしました。\n\n例えばアクセシビリティでは、画面のコントラスト比を自動計算して基準への適合を確認します。この検証によって、自作のデザイン規約が可読性より優先される問題を発見し、規約自体を修正しました。\n\nまた、外部サービスへ渡すファイルに顧客の発言や機密情報が残っていないかも検査します。実際に、渡さないと決めたヒアリング内容が別ファイルへ転記されている箇所を検出しました。\n\nこれらを4本のスクリプトにまとめ、ファイル作成時とGitHubへの反映時に自動実行。AIの判断に依存せず、仕組みとして検査が実行される構造にしています。",
    },

    {
      type: "image",
      src: "/images/works/spec-driven-prototyping/detail-04.webp",
      alt: "WCAGコントラスト比を自動検証するスクリプト",
      caption: "数値で判定できる品質基準は、AIの自己申告ではなく自動検証",
      width: 2342,
      height: 1400,
    },

    {
      type: "text",
      label: "Validation",
      title: "実際に動かして、仕組みを改善する",
      titleFont: "sans",
      body: "設計したワークフローを実際に動かして生成時間を計測し、ボトルネックを改善しました。\n\n計測の結果、成果物ごとにAIエージェントを呼び直していたことで、起動時間が積み上がっていることが分かりました。原因は、自分で定めたエージェント運用規約の解釈ミスでした。そこで委譲を6回から2回へ統合し、仕様生成時間を17分09秒から11分50秒へ約31%短縮しました。生成する画面が3画面から4画面へ増えたうえでの短縮です。\n\n公開している2案件では、仕様生成が10分51秒と12分55秒、画面に到達するまでが19分10秒と22分55秒でした。そのうち人手による操作はファイル添付とプロンプト貼付の約30秒です。",
    },

    {
      type: "image",
      src: "/images/works/spec-driven-prototyping/detail-05.webp",
      alt: "AI開発ワークフロー改善前後の比較",
      caption:
        "ワークフロー改善時の計測：委譲を6回から2回へ統合し、所要時間を31%削減",
      width: 2342,
      height: 1120,
    },

    {
      type: "text",
      label: "Output Example",
      title: "ワークフローからプロトタイプへ",
      titleFont: "sans",
      body: "生成した画面仕様・実文言・デザイントークン・設計判断・非機能要件と専用プロンプトをFigma Makeへ渡し、プロトタイプを生成します。\n\n生成されたコードを仕様と照合し、空状態や条件分岐が仕様どおり実装されていること、禁止した実装パターンが混入していないことを確認しました。\n\nヒアリングで得た情報が、要件・仕様・設計判断を経て実際の画面まで一貫してつながることを確認しています。",
      links: [
        {
          label: "ライトプロトタイプを見る",
          href: "https://appeal-slush-81841099.figma.site",
        },
        {
          label: "ダークプロトタイプを見る",
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
        "仕様・実文言・デザイントークンから生成した実際のプロトタイプ（ライト）",
      width: 3250,
      height: 2122,
    },
    {
      type: "image",
      src: "/images/works/spec-driven-prototyping/detail-07.webp",
      alt: "ワークフローから生成したプロトタイプ画面",
      caption:
        "仕様・実文言・デザイントークンから生成した実際のプロトタイプ（ダーク）",
      width: 3250,
      height: 2122,
    },
    {
      type: "text",
      label: "Reflection",
      title: "振り返り",
      titleFont: "sans",
      body: "本プロジェクトを通して、生成AIを活用するうえでは、プロンプトだけでなく「どの工程で何を判断させ、どこで人間が確認するか」というプロセス設計が重要だと実感しました。\n\nまた、設計した仕組みを実際に動かして計測・検証することで、設計時には見えなかった問題を発見できました。自分で定めた規約を自分で読み違えていたこと、外部サービスへ渡すファイルに顧客の発言が転記されていたこと。どちらも計測と自動検査によって初めて表面化したものです。\n\n今回は確定した仕様と動くプロトタイプまでを対象とし、実装は意図的に含めていません。プロトタイプを作り直すのではなく、実装可能な単位へ分解した成果物を引き渡し、既存の開発プロセスへ接続できる設計としました。",
    },
  ],
};
