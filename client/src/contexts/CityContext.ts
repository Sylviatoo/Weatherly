import { createContext } from "react";
import { CityProps } from "../library/api-weather";

const CityContext = createContext(new CityProps());

export default CityContext;
