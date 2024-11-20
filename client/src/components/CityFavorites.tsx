import CityFavorite from "./CityFavorite";
import type { FavoritesProps } from "./Favorites";

function CityFavorites({ citiesFavorites }: FavoritesProps) {
  return (
    <ul className="city-favorites">
      {citiesFavorites.map((value) => {
        return <CityFavorite key={value.Key} city={value} />;
      })}
    </ul>
  );
}

export default CityFavorites;
