import type { CityProps } from "../library/api-weather";
import CityFavorite from "./CityFavorite";

interface CityFavorites {
  cities: CityProps[];
}

function CityFavorites({ cities }: CityFavorites) {
  return (
    <ul className="city-favorites">
      {cities.map((value) => {
        return <CityFavorite key={value.Key} city={value} />;
      })}
    </ul>
  );
}

export default CityFavorites;
