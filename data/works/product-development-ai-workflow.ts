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
      "顧客ヒアリングから要求整理、要件定義、仕様設計、プロトタイプ制作へ進む過程では、工程ごとに情報を整理し直したり、成果物間の整合性を確認したりする必要があり、短期間で仮説検証を繰り返すには大きな負荷がかかる。",

    solution: [
      "ヒアリング内容をFigJamで構造化し、Figma MCPを介してClaude Codeへ直接取り込めるワークフローを設計した。",
      "取得した情報からブリーフィングを生成し、専門AIエージェントが要件定義書・仕様書・UI生成用プロンプトまで一貫して作成する仕組みを構築した。",
      "Figma Makeによるプロトタイプ生成と顧客レビューを組み合わせ、人間の意思決定を残しながら短いサイクルで仕様とUIを改善できるプロセスを設計した。",
    ],

    role: {
      text: "業務フロー設計、AIエージェント設計、プロンプト設計、Claude Code実装、プロトタイプ検証",
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
      body: "準備中",
    },
  ],
};
