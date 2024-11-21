import { createContext, useContext, useMemo, useState } from "react";
import {
  CityProps,
  getCityByLocation,
  getCurrentPosition,
} from "../library/api-weather.ts";

interface CityContextProps {
  city: CityProps;
  setCity: React.Dispatch<React.SetStateAction<CityProps>>;
}

type CityContextType = CityContextProps | null;
const CityContext = createContext<CityContextType>(null);

type CityContextProviderProps = {
  children: React.ReactNode;
};

export function CityContextProvider({ children }: CityContextProviderProps) {
  let cityOrigin = new CityProps();

  const storedCityProps = window.localStorage.getItem("weather-city");
  if (storedCityProps != null) {
    cityOrigin = JSON.parse(storedCityProps) as CityProps;
  } else {
    getCurrentPosition((position) => {
      if (position.StatusError === undefined) {
        getCityByLocation(
          position.Latitude as number,
          position.Longitude as number,
        ).then((city_props) => {
          window.localStorage.setItem(
            "weather-city",
            JSON.stringify(city_props),
          );
          cityOrigin = city_props;
        });
      }
    });
  }

  const [city, setCity] = useState<CityProps | null>(cityOrigin);

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
    throw new Error("useCityContext has to be used within <CityProvider>");
  }

  return value;
};
