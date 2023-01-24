export enum ContentType {
  Paragraph,
  Point
}

export interface ContentSection {
  heading: string;
  level: number;
  content: ContentData[];
}

export interface ContentData {
  type: ContentType;
  content: string[];
}
