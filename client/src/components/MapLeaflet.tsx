import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type { LatLngExpression } from "leaflet";
import type { GeoPositionProps } from "./Favorites";

function MapLeaflet({ latitude, longitude }: GeoPositionProps) {
  const ChangeView = (center: LatLngExpression) => {
    const map = useMap();
    map.setView(center, map.getZoom());
    return null;
  };
  return (
    <MapContainer
      center={[latitude as number, longitude as number]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <ChangeView lat={latitude as number} lng={longitude as number} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}

export default MapLeaflet;
