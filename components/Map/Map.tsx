import { MapContainer, TileLayer, Marker, Popup, SVGOverlay, GeoJSON, LayersControl } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";
import { MapProperties } from "../../lib/Contents/Interface/MapInterface"

const { BaseLayer } = LayersControl;

export default function Map(model: MapProperties) {
  return (
    <MapContainer center={[-6.224713, 106.847774]} zoom={11} scrollWheelZoom={true} style={{ height: "100%", width: "100%" }} className="rounded border-slate-100 z-0">
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
      <GeoJSON data={model.data} style={model.style} onEachFeature={model.onEachFeature} />
    </MapContainer>
  )
}