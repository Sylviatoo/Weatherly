import { useState } from "react";
import { useCityContext } from "../contexts/CityContextProvider";
import type { CityProps } from "../library/api-weather";
import CityFavorites from "./CityFavorites";
import SearchBar from "./SearchBar";
import "../style-css/Favorites.css";
import { MapContainer } from "react-leaflet";
import { Marker, Popup } from "react-leaflet";
import { TileLayer } from "react-leaflet/TileLayer";
import "leaflet/dist/leaflet.css";

export interface FavoritesProps {
  citiesFavorites: CityProps[];
  setCitiesFavorites: React.Dispatch<React.SetStateAction<CityProps[]>>;
}

export function Favorites() {
  const cityContext = useCityContext();

  const arrayCitiesString = window.sessionStorage.getItem("cities");
  let citiesOrigin = Array<CityProps>(cityContext.city);
  if (arrayCitiesString != null) {
    citiesOrigin = JSON.parse(arrayCitiesString) as CityProps[];
  }

  const [citiesFavorites, setCitiesFavorites] = useState(citiesOrigin);

  return (
    <div className="favorites">
      <h1>Favoris</h1>
      <SearchBar
        citiesFavorites={citiesFavorites}
        setCitiesFavorites={setCitiesFavorites}
      />
      <CityFavorites
        citiesFavorites={citiesFavorites}
        setCitiesFavorites={setCitiesFavorites}
      />
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
