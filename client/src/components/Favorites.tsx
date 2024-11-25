import { useState } from "react";
import { useCityContext } from "../contexts/CityContextProvider";
import type { CityProps } from "../library/api-weather";
import CityFavorites from "./CityFavorites";
import SearchBar from "./SearchBar";
import "../style-css/Favorites.css";

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
      <img src="/src/assets/images/map.svg" alt="today-weather" />
    </div>
  );
}
