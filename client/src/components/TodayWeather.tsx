import { useContext } from "react";
import WeatherContext from "../contexts/WeatherContext";
import "../style-css/TodayWeather.css";
import "../style-css/ResponsiveBox.css";

function TodayWeather() {
  const weatherContext = useContext(WeatherContext);
  const weather = weatherContext.DailyForecasts[0];
  const currentTemp = weather.Temperature.Maximum.Value;
  const minTemp = weather.Temperature.Minimum.Value;
  const maxTemp = weather.Temperature.Maximum.Value;
  const minUnitTemp = weather.Temperature.Minimum.Unit;
  const maxUnitTemp = weather.Temperature.Maximum.Unit;
  const iconNumber = weather.Day.Icon;

  return (
    <div className="today-weather-style">
      <h4 className="title-style">Aujourd'hui</h4>
      <img
        src={`/src/assets/images/${iconNumber}.png`}
        alt={weather.Day.IconPhrase}
        className="today-icon"
      />
      <p className="current-time">{`${currentTemp}°${maxUnitTemp}`}</p>
      <p>{`${minTemp}°${minUnitTemp} - ${maxTemp}°${maxUnitTemp}`}</p>
    </div>
  );
}

export default TodayWeather;
