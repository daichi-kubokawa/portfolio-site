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
      body: "準備中",
    },
  ],
};
