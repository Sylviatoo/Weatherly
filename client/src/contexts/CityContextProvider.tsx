import { useContext, useMemo, useState } from "react";
import type { CityProps } from "../library/api-weather.ts";
import { CityContext, type CityContextType } from "./CityContext.ts";

type CityContextProviderProps = {
  children: React.ReactNode;
};

export function CityContextProvider({ children }: CityContextProviderProps) {
  const [city, setCity] = useState<CityProps | null>(null);

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
