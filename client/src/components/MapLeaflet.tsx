import {
  MapContainer,
  Marker,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type { LatLngExpression, LeafletMouseEvent } from "leaflet";
import { useState } from "react";
import { type CityProps, getCityByLocation } from "../library/api-weather";
import type { GeoPositionProps } from "./Favorites";

// Definition of interface of the MatLeaflet component.
interface MapLeafletProps {
  latitude: number;
  longitude: number;
  centerOnCityFavorite: boolean;
  setCenterOnCityFavorite: React.Dispatch<React.SetStateAction<boolean>>;
  citiesFavorites: CityProps[];
  setCitiesFavorites: React.Dispatch<React.SetStateAction<CityProps[]>>;
}

function MapLeaflet({
  latitude,
  longitude,
  centerOnCityFavorite,
  setCenterOnCityFavorite,
  citiesFavorites,
  setCitiesFavorites,
}: MapLeafletProps) {
  // create a internal state on current position of the click.
  const [position, setPosition] = useState<GeoPositionProps>({
    latitude: latitude,
    longitude: longitude,
  });

  const ChangeView = (center: LatLngExpression) => {
    const map = useMap();
    map.flyTo(center, map.getZoom());
    return null;
  };

  // creation of the component that manages the click on map. It uses useMapEvents on click events.
  function MapClickComponent() {
    useMapEvents({
      click: (e: LeafletMouseEvent) => {
        // a click was detected. We call setPosition of the state.
        // call of the function getCityByLocation the name of city close to the click position.
        // add the city to list of cities that are favorites.
        setPosition({ latitude: e.latlng.lat, longitude: e.latlng.lng });
        getCityByLocation(e.latlng.lat, e.latlng.lng).then((cityProps) => {
          const cities = citiesFavorites.map((item: CityProps) => item);
          cities.push(cityProps);
          setCitiesFavorites(cities);
          setCenterOnCityFavorite(false);
          window.sessionStorage.setItem("cities", JSON.stringify(cities));
        });
      },
    });
    return null;
  }

  return (
    <MapContainer
      center={[
        centerOnCityFavorite ? latitude : position.latitude,
        centerOnCityFavorite ? longitude : position.longitude,
      ]}
      zoom={13}
      scrollWheelZoom={true}
    >
      {/* Add MapClickComponent as child of MapContainer*/}
      <MapClickComponent />
      <ChangeView
        lat={centerOnCityFavorite ? latitude : position.latitude}
        lng={centerOnCityFavorite ? longitude : position.longitude}
      />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* Add Marker as child of MapContainer*/}
      <Marker
        position={[
          centerOnCityFavorite ? latitude : position.latitude,
          centerOnCityFavorite ? longitude : position.longitude,
        ]}
      />
    </MapContainer>
  );
}

export default MapLeaflet;
