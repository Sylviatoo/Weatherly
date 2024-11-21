import { createContext, useContext, useMemo, useState } from "react";
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
  getFiveDaysWeatherForecast(cityContextConsumer.city.Key).then(
    (value: WeatherForecastProps) => {
      weatherOrigin = value;
    },
  );

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
