import { useWeatherContext } from "../contexts/WeatherContextProvider";
import "../style-css/WeatherParameter.css";
import "../style-css/ResponsiveBox.css";

function WeatherParameter() {
  const weatherContext = useWeatherContext();
  const weather = weatherContext.weather.DailyForecasts[0].Day;
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
      <div className="weather-info2">
        <img
          src="/src/assets/images/25.png"
          alt="humidité"
          className="weather-icon"
        />
        <p className="text-weather-info">{`${weather.RelativeHumidity.Average} %`}</p>
      </div>
      <div className="weather-info3">
        <img
          src="/src/assets/images/32.png"
          alt="vent"
          className="weather-icon"
        />
        <p className="text-weather-info">{`${weather.Wind.Speed.Value} ${weather.Wind.Speed.Unit}`}</p>
      </div>
      <div className="weather-info4">
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

export default WeatherParameter;
