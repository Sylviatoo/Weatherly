import { useContext } from "react";
import WeatherContext from "../contexts/WeatherContext";
import type { WeatherForecastProps } from "../library/api-weather";

function SunRise() {
  const weatherContext = useContext<WeatherForecastProps>(WeatherContext);
  let dateSunrise = undefined;
  if (weatherContext.DailyForecasts.length === 0) {
    dateSunrise = new Date();
  } else {
    const timeSunrise = weatherContext.DailyForecasts[0].Sun.Rise;
    dateSunrise = new Date(timeSunrise);
  }

  return (
    <div>
      <h4>Lever du Soleil</h4>
      <p>{dateSunrise.toLocaleTimeString("fr-FR")}</p>
    </div>
  );
}

export default SunRise;
