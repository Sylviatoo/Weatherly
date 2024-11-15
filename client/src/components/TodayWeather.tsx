import { useContext } from "react";
import WeatherContext from "../contexts/WeatherContext";

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
    <div>
      <h4>Aujourd'hui</h4>
      <img
        src={`/src/assets/images/${iconNumber}.png`}
        alt={weather.Day.IconPhrase}
      />
      <p>{`${currentTemp}°${maxUnitTemp}`}</p>
      <p>{`${minTemp}°${minUnitTemp} - ${maxTemp}°${maxUnitTemp}`}</p>
    </div>
  );
}

export default TodayWeather;
