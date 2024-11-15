import { useContext } from "react";
import WeatherContext from "../contexts/WeatherContext";
import "../style-css/WeatherParameter.css";
import "../style-css/WeatherBox.css";

function WeatherParamater() {
  const weatherContext = useContext(WeatherContext);
  const weather = weatherContext.DailyForecasts[0].Day;
  return (
    <div className="weather-box">
      <div className="weather-info">
        <img
          src="/src/assets/images/18.png"
          alt="pluie"
          className="weather-icon"
        />
        <p className="text-weather-info">{`${weather.Rain.Value} ${weather.Rain.Unit}`}</p>
      </div>
      <div>
        <img
          src="/src/assets/images/25.png"
          alt="humidité"
          className="weather-icon"
        />
        <p className="text-weather-info">{`${weather.RelativeHumidity.Average} %`}</p>
      </div>
      <div>
        <img
          src="/src/assets/images/32.png"
          alt="vent"
          className="weather-icon"
        />
        <p className="text-weather-info">{`${weather.Wind.Speed.Value} ${weather.Wind.Speed.Unit}`}</p>
      </div>
      <div>
        <img
          src="/src/assets/images/7.png"
          alt="cloud"
          className="weather-icon"
        />
        <p className="text-weather-info">{`${weather.CloudCover} %`}</p>
      </div>
    </div>
  );
}

export default WeatherParamater;
