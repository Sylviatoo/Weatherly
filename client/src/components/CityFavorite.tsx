import type { CityProps } from "../library/api-weather";

interface CityFavoriteProps {
  city: CityProps;
}

function CityFavorite({ city }: CityFavoriteProps) {
  return (
    <li className="city-favorite" id-city={city.Key}>
      {`${city.LocalizedName}, ${city.AdministrativeArea.LocalizedName}, ${city.Country.LocalizedName}`}
    </li>
  );
}

export default CityFavorite;
