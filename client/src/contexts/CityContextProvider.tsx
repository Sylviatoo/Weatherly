import { createContext, useContext, useEffect, useMemo, useState } from "react";
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
  }

  const [city, setCity] = useState<CityProps | null>(cityOrigin);

  const memoCity = useMemo(
    () => ({
      city,
      setCity,
    }),
    [city],
  );

  useEffect(() => {
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
          setCity(city_props);
        });
      } else {
        const cityDefault = new CityProps();
        cityDefault.Type = "city";
        cityDefault.Key = "623";
        cityDefault.LocalizedName = "Paris";
        cityDefault.Version = "1";
        cityDefault.AdministrativeArea.LocalizedName = "Ville de Paris";
        cityDefault.Country.LocalizedName = "France";
        cityDefault.GeoPosition.Latitude = 48.857;
        cityDefault.GeoPosition.Longitude = 2.351;

        window.localStorage.setItem(
          "weather-city",
          JSON.stringify(cityDefault),
        );
        setCity(cityDefault);
      }
    });
  }, []);

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
