import { MapContainer, TileLayer, Marker, Popup, SVGOverlay } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";
import { divIcon } from "leaflet";
import { BlueDots, Position } from "./Annotations/BlueDots"

const Map = () => {
  const position = {
    x: -6.1976151,
    y: 106.8222262
  }
  return (
    <MapContainer center={[-6.1976151, 106.8222262]} zoom={15} scrollWheelZoom={true} style={{ height: "100%", width: "100%" }} className="rounded border-slate-100">
      <TileLayer
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
      />
      <BlueDots
        position={position}
      />
    </MapContainer>
  )
}

export default Map