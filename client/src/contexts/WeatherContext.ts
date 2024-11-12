import { createContext } from "react";
import { WeatherForecastProps } from "../library/api-weather";

const WeatherContext = createContext(new WeatherForecastProps());

export default WeatherContext;
