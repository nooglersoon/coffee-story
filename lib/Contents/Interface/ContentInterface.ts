export interface ContentInterface {
  contentTitle?: string;
  contentBody: ArticleContentModel | ImageContentModel | MapContentModel
}

export interface ArticleContentModel {
  articleTitle?: string;
  article: string;
  articleType?: string; // sutan: a paragraph or a poing?
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
