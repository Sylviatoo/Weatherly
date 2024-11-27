import { useCityContext } from "../contexts/CityContextProvider";
import type { CityProps } from "../library/api-weather";
import CityFavorite from "./CityFavorite";

interface CityFavoritesProps {
  citiesFavorites: CityProps[];
  setCitiesFavorites: React.Dispatch<React.SetStateAction<CityProps[]>>;
  setCenterOnCityFavorite: React.Dispatch<React.SetStateAction<boolean>>;
}

function CityFavorites({
  citiesFavorites,
  setCenterOnCityFavorite,
}: CityFavoritesProps) {
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
            setCenterOnCityFavorite={setCenterOnCityFavorite}
          />
        );
      })}
    </ul>
  );
}

export default CityFavorites;
