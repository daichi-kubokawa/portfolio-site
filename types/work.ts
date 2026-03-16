export type WorkTitleFont = "sans" | "en";

export type WorkTextValue = {
  text: string;
  font?: WorkTitleFont;
  href?: string;
};

export type WorkLink = {
  label: string;
  href: string;
};

export type WorkContentText = {
  type: "text";
  label?: string;
  title: string;
  titleFont?: WorkTitleFont;
  body: string;
  links?: WorkLink[];
};

export type WorkContentImage = {
  type: "image";
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
};

export type WorkContent = WorkContentText | WorkContentImage;

export type WorkSummary = {
  challenge: string;
  solution: string[];
  role: WorkTextValue;
  time: WorkTextValue;
  task: WorkTextValue;
  tools: WorkTextValue[];
  type?: WorkTextValue;
  award?: WorkTextValue;
  links?: WorkLink[];
};

export type Work = {
  slug: string;
  title: string;
  titleFont?: WorkTitleFont;
  category: string;
  description: string;
  thumbnail?: string;
  heroImage?: string;
  cardAward?: string;
  summary?: WorkSummary;
  content: WorkContent[];
};
