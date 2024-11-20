import { useState } from "react";
import { CityProps } from "../library/api-weather";
import CityFavorites from "./CityFavorites";
import SearchBar from "./SearchBar";
import "../style-css/Favorites.css";

function Favorites() {
  const citiesOrigin = Array<CityProps>(0);

  let city = new CityProps();

  city.LocalizedName = "Toulouse";
  city.Key = "135244";
  citiesOrigin.push(city);

  city = new CityProps();
  city.LocalizedName = "Lyon";
  city.Key = "171210";
  citiesOrigin.push(city);

  city = new CityProps();
  city.LocalizedName = "Lille";
  city.Key = "135564";
  citiesOrigin.push(city);

  city = new CityProps();
  city.LocalizedName = "Paris";
  city.Key = "623";
  citiesOrigin.push(city);

  const [cities] = useState(citiesOrigin);

  return (
    <div className="favorites">
      <h1>Favoris</h1>
      <SearchBar />
      <CityFavorites cities={cities} />
      <img src="/src/assets/images/map.svg" alt="today-weather" />
    </div>
  );
}

export default Favorites;
