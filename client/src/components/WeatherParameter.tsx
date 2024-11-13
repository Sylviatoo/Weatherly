import { useContext } from "react";
import WeatherContext from "../contexts/WeatherContext";
import { OneDayForecastProps } from "../library/api-weather";

function WeatherParamater() {
  const weatherContext = useContext(WeatherContext);
  let weather = undefined;
  let weatherDay = undefined;
  if (weatherContext.DailyForecasts.length === 0) {
    weatherDay = new OneDayForecastProps();
  } else {
    weatherDay = weatherContext.DailyForecasts[0];
  }
  weather = weatherDay.Day;
  return (
    <div>
      <div>
        <img src="/src/assets/images/18.png" alt="pluie" />
        <p>{`${weather.Rain.Value} ${weather.Rain.Unit}`}</p>
      </div>
      <div>
        <img src="/src/assets/images/25.png" alt="humidité" />
        <p>{`${weather.RelativeHumidity.Average} %`}</p>
      </div>
      <div>
        <img src="/src/assets/images/32.png" alt="vent" />
        <p>{`${weather.Wind.Speed.Value} ${weather.Wind.Speed.Unit}`}</p>
      </div>
      <div>
        <img src="/src/assets/images/7.png" alt="cloud" />
        <p>{`${weather.CloudCover} %`}</p>
      </div>
    </div>
  );
}

export default WeatherParamater;
