export type WorkTextBlock = {
  type: "text";
  title: string;
  body: string;
};

export type WorkImageBlock = {
  type: "image";
  src: string;
  alt: string;
  caption?: string;
};

export type WorkContentBlock = WorkTextBlock | WorkImageBlock;

export type Work = {
  slug: string;
  title: string;
  category: string;
  description: string;
  thumbnail?: string;

  role: string;
  period: string;
  tools: string[];

  content: WorkContentBlock[];
};
