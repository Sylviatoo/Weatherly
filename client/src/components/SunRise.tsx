import { useContext } from "react";
import WeatherContext from "../contexts/WeatherContext";
import type { WeatherForecastProps } from "../library/api-weather";
import "../style-css/SunTime.css";
import "../style-css/Sunrise.css";
import "../style-css/ResponsiveBox.css";

function SunRise() {
  const weatherContext = useContext<WeatherForecastProps>(WeatherContext);
  const timeSunrise = weatherContext.DailyForecasts[0].Sun.Rise;
  const dateSunrise = new Date(timeSunrise);

  return (
    <div className="suntime-box">
      <div className="sunrise-style">
        <h4>Lever du Soleil</h4>
        <p>{dateSunrise.toLocaleTimeString("fr-FR")}</p>
      </div>
    </div>
  );
}

export default SunRise;
