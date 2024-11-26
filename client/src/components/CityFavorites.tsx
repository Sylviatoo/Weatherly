import { useCityContext } from "../contexts/CityContextProvider";
import CityFavorite from "./CityFavorite";
import type { FavoritesProps } from "./Favorites";

function CityFavorites({ citiesFavorites }: FavoritesProps) {
  const cityContext = useCityContext();
  const cities = citiesFavorites.filter(
    (value) => cityContext.city.Key !== value.Key,
  );
  cities.unshift(cityContext.city);

  return (
    <ul className="city-favorites">
      {cities.map((value) => {
        return (
          <CityFavorite
            key={value.Key}
            city={value}
            isSelected={cityContext.city.Key === value.Key}
          />
        );
      })}
    </ul>
  );
}

export default CityFavorites;
