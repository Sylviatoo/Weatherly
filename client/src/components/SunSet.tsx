import { useContext } from "react";
import WeatherContext from "../contexts/WeatherContext";
import type { WeatherForecastProps } from "../library/api-weather";

function SunSet() {
  const weatherContext = useContext<WeatherForecastProps>(WeatherContext);
  const timeSunset = weatherContext.DailyForecasts[0].Sun.Set;
  const dateSunset = new Date(timeSunset);

  return (
    <div>
      <h4>Coucher du Soleil</h4>
      <p>{dateSunset.toLocaleTimeString("fr-FR")}</p>
    </div>
  );
}

export default SunSet;
