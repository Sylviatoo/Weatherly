import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { useCityContext } from "../contexts/CityContextProvider";
import {
  getRainTileLayerRoot,
  getRainTyleLayerPaths,
} from "../services/RainTyleLayerApi";

function MapRainViewer() {
  const cityContext = useCityContext();
  let rainTyleLayerPaths = Array<string>(0);

  const [index, setIndex] = useState(0);
  const [rainTileLayerUrl, setRainTileLayerUrl] = useState("");

  const loadRainTileLayer = () => {
    getRainTileLayerRoot().then((value) => {
      rainTyleLayerPaths = getRainTyleLayerPaths(value);
    });
  };

  loadRainTileLayer();

  useEffect(() => {
    const interval = setInterval(() => {
      setRainTileLayerUrl(rainTyleLayerPaths[index] ?? "");
      setIndex((prevIndex) =>
        prevIndex >= rainTyleLayerPaths.length ? 0 : prevIndex + 1,
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [rainTyleLayerPaths, index]);

  const RainTileLayer = () => {
    return <TileLayer opacity={1.0} url={rainTileLayerUrl} />;
  };

  return (
    <div className="map-rain-viewer-style">
      <MapContainer
        center={[
          cityContext.city.GeoPosition.Latitude as number,
          cityContext.city.GeoPosition.Longitude as number,
        ]}
        zoom={8}
        scrollWheelZoom={false}
      >
        {/* Add MapClickComponent as child of MapContainer*/}
        <RainTileLayer />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* Add Marker as child of MapContainer*/}
        <Marker
          position={[
            cityContext.city.GeoPosition.Latitude as number,
            cityContext.city.GeoPosition.Longitude as number,
          ]}
        />
      </MapContainer>
    </div>
  );
}

export default MapRainViewer;
