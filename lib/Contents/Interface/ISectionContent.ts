export interface ISectionContent {
  sectionTitle: string;
  contents: ContentModel[]
}

export interface ContentModel {
  contentTitle: string | null;
  contentBody: string | null;
  contentImage: ImageContentModel | null;
  contentMap: MapContentModel | null;
}

export interface ImageContentModel {
  imageTitle: string;
  imageURL: string;
}

export interface MapContentModel {
  mapTitle: string;
  // Map Data
}
