export enum ArticleType {
  Paragraph,
  Point
}

export interface ArticleContent {
  type: ArticleType;
  content: string[];
}

export interface ArticleSection {
  heading: string;
  level: number;
  content: ArticleContent[];
}