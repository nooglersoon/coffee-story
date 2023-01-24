export interface MapContentModel {
  mapTitle?: string;
  footer: string;
  mapProperties: MapProperties;
}

export interface MapProperties {
  data: GeoJSON.FeatureCollection;
  style: MapStyle;
  onEachFeature: MapOnEachFeature;
}

export interface MapColorScheme {
  [title: string]: string;
}

export interface MapStyleProperies {
  fillColor: string;
  stroke: boolean;
  fillOpacity: number;
}

export type MapOnEachFeature = (feature: any, layer: any) => void
export type MapStyle = (feature: any) => MapStyleProperies