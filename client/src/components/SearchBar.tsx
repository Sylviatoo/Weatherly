import { type FormEvent, useState } from "react";
import {
  type CityProps,
  getCityByAutoCompletion,
} from "../library/api-weather";

function SearchBar() {
  const [citiesArray, setCitiesArray] = useState(Array<CityProps>(0));

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    const start = event?.currentTarget?.selectionStart;
    const end = event?.currentTarget?.selectionEnd;
    if (
      event?.currentTarget?.value &&
      event?.currentTarget?.value.length % 3 === 0
    ) {
      getCityByAutoCompletion(event?.currentTarget?.value as string).then(
        (cities_props) => {
          setCitiesArray(cities_props);
        },
      );
    }

    if (start !== undefined && end !== undefined) {
      setTimeout(() => {
        event?.currentTarget?.setSelectionRange(start, end);
      }, 0);
    }
  };

  return (
    <div id="search-bar">
      <img src="/src/assets/search.png" alt="" />
      <input
        type="text"
        className="search-input"
        placeholder="Rechercher..."
        onChange={handleChange}
      />
      <ul>
        {citiesArray.map((item) => {
          return (
            <li key={item.Key} city-prop={JSON.stringify(item)}>
              {`${item.LocalizedName}, ${item.AdministrativeArea.LocalizedName}, ${item.Country.LocalizedName}`}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SearchBar;
