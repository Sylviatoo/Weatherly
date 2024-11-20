import { useState } from "react";
import type { CityProps } from "../library/api-weather";
import CityFavorites from "./CityFavorites";
import SearchBar from "./SearchBar";

export interface FavoritesProps {
  citiesFavorites: CityProps[];
  setCitiesFavorites: React.Dispatch<React.SetStateAction<CityProps[]>>;
}

export function Favorites() {
  const [citiesFavorites, setCitiesFavorites] = useState(Array<CityProps>(0));

  return (
    <div className="favorites">
      <h1>Favorites</h1>
      <SearchBar
        citiesFavorites={citiesFavorites}
        setCitiesFavorites={setCitiesFavorites}
      />
      <CityFavorites
        citiesFavorites={citiesFavorites}
        setCitiesFavorites={setCitiesFavorites}
      />
    </div>
  );
}
