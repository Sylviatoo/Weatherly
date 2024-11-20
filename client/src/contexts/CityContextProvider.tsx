import { useContext, useMemo, useState } from "react";
import {
  CityProps,
  getCityByLocation,
  getCurrentPosition,
} from "../library/api-weather.ts";
import { CityContext, type CityContextType } from "./CityContext.ts";

type CityContextProviderProps = {
  children: React.ReactNode;
};

export function CityContextProvider({ children }: CityContextProviderProps) {
  const [city, setCity] = useState<CityProps | null>(new CityProps());
  getCurrentPosition((position) => {
    if (position.StatusError === undefined) {
      getCityByLocation(
        position.Latitude as number,
        position.Longitude as number,
      ).then((city_props) => {
        window.localStorage.setItem("weather-city", JSON.stringify(city_props));
        setCity(city_props);
      });
    }
  });

  const memoCity = useMemo(
    () => ({
      city,
      setCity,
    }),
    [city],
  );

  return (
    <CityContext.Provider value={memoCity as CityContextType}>
      {children}
    </CityContext.Provider>
  );
}

export const useCityContext = () => {
  const value = useContext(CityContext);

  if (value == null) {
    throw new Error("useTheme has to be used within <CityProvider>");
  }

  return value;
};
