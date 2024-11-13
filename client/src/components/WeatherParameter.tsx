import { useContext } from "react";
import WeatherContext from "../contexts/WeatherContext";

function WeatherParamater() {
  const weatherContext = useContext(WeatherContext);
  const weather = weatherContext.DailyForecasts[0].Day;
  return (
    <div>
      <div>
        <img src="/client/src/assets/images/18.png" alt="pluie" />
        <p>{`${weather.Rain.Value} ${weather.Rain.Unit}`}</p>
      </div>
      <div>
        <img src="/client/src/assets/images/25.png" alt="humidité" />
        <p>{`${weather.RelativeHumidity.Average} %`}</p>
      </div>
      <div>
        <img src="/client/src/assets/images/32.png" alt="vent" />
        <p>{`${weather.Wind.Speed.Value} ${weather.Wind.Speed.Unit}`}</p>
      </div>
      <div>
        <img src="/client/src/assets/images/7.png" alt="cloud" />
        <p>{`${weather.CloudCover} %`}</p>
      </div>
    </div>
  );
}

export default WeatherParamater;
