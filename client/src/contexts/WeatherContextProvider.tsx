import { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
  WeatherForecastProps,
  getFiveDaysWeatherForecast,
} from "../library/api-weather";
import { useCityContext } from "./CityContextProvider";

interface WeatherContextProps {
  weather: WeatherForecastProps;
  setWeather: React.Dispatch<React.SetStateAction<WeatherForecastProps>>;
}
type WeatherContextType = WeatherContextProps | null;
const WeatherContext = createContext<WeatherContextType>(null);

type WeatherContextProviderProps = {
  children: React.ReactNode;
};

export function WeatherContextProvider({
  children,
}: WeatherContextProviderProps) {
  let weatherOrigin = new WeatherForecastProps();
  const cityContextConsumer = useCityContext();

  let storedWeatherForecastString =
    window.localStorage.getItem("weather-forecast");
  let storedWeatherForecast = null;

  if (storedWeatherForecastString !== null) {
    // preliminary: check if weather forecast is outdated (if it was set more than 24 hours before).
    storedWeatherForecast = JSON.parse(
      storedWeatherForecastString,
    ) as WeatherForecastProps;
    const dateForecast = new Date(storedWeatherForecast.DailyForecasts[0].Date);
    const dateCurrent = new Date();
    const time = dateCurrent.getTime() - dateForecast.getTime();
    if (time > 24 * 60 * 60 * 1000) {
      // in this case, we remove the local storage.
      window.localStorage.removeItem("weather-forecast");

      storedWeatherForecastString = null;
    }
  }

  if (storedWeatherForecastString !== null) {
    weatherOrigin = JSON.parse(
      storedWeatherForecastString,
    ) as WeatherForecastProps;
  }

  const [weather, setWeather] = useState<WeatherForecastProps | null>(
    weatherOrigin,
  );

  const memoWeather = useMemo(
    () => ({
      weather,
      setWeather,
    }),
    [weather],
  );

  useEffect(() => {
    if (cityContextConsumer.city.Key !== "") {
      if (weather === null || weather.CityKey === "") {
        getFiveDaysWeatherForecast(cityContextConsumer.city.Key).then(
          (value: WeatherForecastProps) => {
            value.CityKey = cityContextConsumer.city.Key;
            window.localStorage.setItem(
              "weather-forecast",
              JSON.stringify(value),
            );
            setWeather(value);
          },
        );
      }
    }
  }, [weather, cityContextConsumer]);

  return (
    <WeatherContext.Provider value={memoWeather as WeatherContextType}>
      {children}
    </WeatherContext.Provider>
  );
}

export const useWeatherContext = () => {
  const value = useContext(WeatherContext);

  if (value == null) {
    throw new Error(
      "useWeatherContext has to be used within <WeatherProvider>",
    );
  }

  return value;
};
