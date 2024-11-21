import { type FormEvent, useState } from "react";
import {
  type CityProps,
  getCityByAutoCompletion,
} from "../library/api-weather";
import type { FavoritesProps } from "./Favorites";

function SearchBar({ citiesFavorites, setCitiesFavorites }: FavoritesProps) {
  const citiesOrigin = Array<CityProps>(0);

  const [cities, setCities] = useState(citiesOrigin);
  const [inputContent, setInputContent] = useState<string | null>(null);

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    setInputContent(event?.currentTarget?.value);

    const start = event?.currentTarget?.selectionStart;
    const end = event?.currentTarget?.selectionEnd;
    if (
      event?.currentTarget?.value &&
      event?.currentTarget?.value.length % 3 === 0
    ) {
      getCityByAutoCompletion(event?.currentTarget?.value as string).then(
        (cities_props) => {
          setCities(cities_props);
        },
      );
    }

    if (start !== undefined && end !== undefined) {
      setTimeout(() => {
        event?.currentTarget?.setSelectionRange(start, end);
      }, 0);
    }
  };

  const handleLiClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
  ) => {
    if (event == null) {
      return;
    }
    if (event.currentTarget == null) {
      return;
    }

    const cityString = event.currentTarget.getAttribute("city-prop");
    if (cityString == null) {
      return;
    }

    const cityProps = JSON.parse(cityString as string) as CityProps;
    event.currentTarget.textContent = cityProps.LocalizedName;
    const cities = citiesFavorites.map((item: CityProps) => item);
    cities.push(cityProps);
    setCitiesFavorites(cities);
    setCities(Array<CityProps>(0));
    setInputContent("" as string);
  };

  const handleLiKeyDown = () => {};

  return (
    <div id="search-bar">
      <img src="/src/assets/search.png" alt="" />
      <input
        type="text"
        value={inputContent ?? ""}
        className="search-input"
        placeholder="Rechercher..."
        onChange={handleChange}
      />
      <ul>
        {cities.map((item) => {
          return (
            <li
              key={item.Key}
              city-prop={JSON.stringify(item)}
              onClick={handleLiClick}
              onKeyDown={handleLiKeyDown}
            >
              {`${item.LocalizedName}, ${item.AdministrativeArea.LocalizedName}, ${item.Country.LocalizedName}`}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SearchBar;
