import { MapContainer, TileLayer, Marker, Popup, SVGOverlay, GeoJSON, LayersControl } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";
import MapData from "../../src/maps/data"
const { BaseLayer } = LayersControl;

const Map = () => {

  interface MapColorScheme {
    [title: string]: string;
  }

  const onEachFeature = (feature: any, layer: any) => {
    if (feature.properties && feature.properties.coffee_count) {
      layer.bindTooltip(feature.properties.coffee_count);
    }
  }

  const styleMap = (feature: any) => {
    const total_coffee_shop: string = feature.properties.coffee_count
    const schema: MapColorScheme = {
      'tidak teridentifikasi': '#242424',
      'ada toko kopi': '#253494',
      'sedikit': '#2c7fb8',
      'banyak': '#41b6c4',
      'sangat banyak': '#ffffcc'
    }
    return {
      fillColor: schema[total_coffee_shop],
      stroke: false,
      fillOpacity: (total_coffee_shop === 'tidak teridentifikasi') ? 0.2 : 0.6
    }
  }

  return (
    <MapContainer center={[-6.224713, 106.847774]} zoom={12} scrollWheelZoom={true} style={{ height: "100%", width: "100%" }} className="rounded border-slate-100">
      <LayersControl>
        <BaseLayer checked name="Carto">
          <TileLayer
            url="http://basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"
            attribution="&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>, &copy; <a href='https://carto.com/attributions'>CARTO</a>"
          />
        </BaseLayer>
        <BaseLayer name="Open Street Maps">
          <TileLayer
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>"
            maxNativeZoom={19}
          />
        </BaseLayer>
        <BaseLayer name="Esri">
          <TileLayer
            url="http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}"
            attribution="&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>, Esri, HERE, Garmin, and the GIS User Community"
            maxNativeZoom={19}
          />
        </BaseLayer>
        <BaseLayer name="Stadia Maps">
          <TileLayer
            url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
          />
        </BaseLayer>
      </LayersControl>
      <GeoJSON data={MapData} style={styleMap} onEachFeature={onEachFeature} />
    </MapContainer>
  )
}

export default Map