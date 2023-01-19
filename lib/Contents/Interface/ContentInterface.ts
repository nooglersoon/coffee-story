import { ArticleType } from "./ArticleInterface";

export interface ContentInterface {
  contentTitle?: string;
  contentBody: ArticleContentModel | ImageContentModel | MapContentModel
}

export interface ArticleContentModel {
  articleTitle?: string;
  article: string;
  articleType?: ArticleType;
}

export interface ImageContentModel {
  imageTitle?: string;
  imageURL: string;
  footer: string;
}

export interface MapContentModel {
  mapTitle?: string;
  footer: string;
  // Map Data
}
