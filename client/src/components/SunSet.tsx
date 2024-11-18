import { useContext } from "react";
import WeatherContext from "../contexts/WeatherContext";
import type { WeatherForecastProps } from "../library/api-weather";
import "../style-css/Sunset.css";
import "../style-css/SunTime.css";
import "../style-css/ResponsiveBox.css";

function SunSet() {
  const weatherContext = useContext<WeatherForecastProps>(WeatherContext);
  const timeSunset = weatherContext.DailyForecasts[0].Sun.Set;
  const dateSunset = new Date(timeSunset);

  return (
    <div className="suntime-box">
      <div className="sunset-style">
        <h4>Coucher du Soleil</h4>
        <p>{dateSunset.toLocaleTimeString("fr-FR")}</p>
      </div>
    </div>
  );
}

export default SunSet;
