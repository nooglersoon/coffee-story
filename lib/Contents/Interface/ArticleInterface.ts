import { ContentType } from "./ContentInterface";

export interface ArticleContentModel {
  articleTitle?: string;
  article: string;
  contentType?: ContentType;
}