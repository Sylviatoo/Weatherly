import { useCityContext } from "../contexts/CityContextProvider";
import { useWeatherContext } from "../contexts/WeatherContextProvider";
import {
  type CityProps,
  type WeatherForecastProps,
  getCityByKey,
  getFiveDaysWeatherForecast,
} from "../library/api-weather";

interface CityFavoriteProps {
  city: CityProps;
}

function CityFavorite({ city }: CityFavoriteProps) {
  const weatherContextConsumer = useWeatherContext();
  const cityContextConsumer = useCityContext();

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

    const cityFromList = JSON.parse(cityString as string) as CityProps;

    getCityByKey(cityFromList.Key).then((cityProps) => {
      window.localStorage.setItem("weather-city", JSON.stringify(cityProps));
      cityContextConsumer.setCity(cityProps);

      getFiveDaysWeatherForecast(cityProps.Key).then(
        (value: WeatherForecastProps) => {
          value.CityKey = cityProps.Key;
          window.localStorage.setItem(
            "weather-forecast",
            JSON.stringify(value),
          );
          weatherContextConsumer.setWeather(value);
        },
      );
    });
  };

  const handleKeyDown = (_event: React.KeyboardEvent<HTMLLIElement>) => {};

  return (
    <li
      className="city-favorite"
      id-city={city.Key}
      city-prop={JSON.stringify(city)}
      onClick={handleLiClick}
      onKeyDown={handleKeyDown}
    >
      {`${city.LocalizedName}, ${city.AdministrativeArea.LocalizedName}, ${city.Country.LocalizedName}`}
    </li>
  );
}

export default CityFavorite;
