import { createContext } from "react";
import type { CityProps } from "../library/api-weather";

export interface CityContextProps {
  city: CityProps;
  setCity: React.Dispatch<React.SetStateAction<CityProps>>;
}

export type CityContextType = CityContextProps | null;
export const CityContext = createContext<CityContextType>(null);
