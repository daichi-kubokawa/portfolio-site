export type WorkContentText = {
  type: "text";
  title: string;
  body: string;
};

export type WorkContentImage = {
  type: "image";
  src: string;
  alt: string;
  caption?: string;
};

export type WorkContent = WorkContentText | WorkContentImage;

export type WorkTitleFont = "sans" | "en";

export type Work = {
  slug: string;
  title: string;
  titleFont?: WorkTitleFont;
  category: string;
  description: string;
  thumbnail?: string;
  role: string;
  period: string;
  tools: string[];
  result?: string;
  content: WorkContent[];
};
