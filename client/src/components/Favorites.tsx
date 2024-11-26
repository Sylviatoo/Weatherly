import { useEffect, useState } from "react";
import { useCityContext } from "../contexts/CityContextProvider";
import { type CityProps, getCityByKey } from "../library/api-weather";
import CityFavorites from "./CityFavorites";
import SearchBar from "./SearchBar";
import "../style-css/Favorites.css";
import MapLeaflet from "./MapLeaflet";

export interface FavoritesProps {
  citiesFavorites: CityProps[];
  setCitiesFavorites: React.Dispatch<React.SetStateAction<CityProps[]>>;
}

export interface GeoPositionProps {
  latitude: number;
  longitude: number;
}

export function Favorites() {
  const cityContext = useCityContext();

  const arrayCitiesString = window.sessionStorage.getItem("cities");
  let citiesOrigin = Array<CityProps>(cityContext.city);
  if (arrayCitiesString != null) {
    citiesOrigin = JSON.parse(arrayCitiesString) as CityProps[];
  }

  const [citiesFavorites, setCitiesFavorites] = useState(citiesOrigin);

  useEffect(() => {
    if (
      citiesFavorites.findIndex(
        (value) => value.Key === cityContext.city.Key,
      ) === -1
    ) {
      getCityByKey(cityContext.city.Key).then((cityValue) => {
        const cities = citiesFavorites.map((item: CityProps) => item);
        cities.push(cityValue);
        setCitiesFavorites(cities);
        window.sessionStorage.setItem("cities", JSON.stringify(cities));
      });
    }
  }, [cityContext, citiesFavorites]);

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
      <MapLeaflet
        latitude={cityContext.city.GeoPosition.Latitude as number}
        longitude={cityContext.city.GeoPosition.Longitude as number}
      />
    </div>
  );
}
