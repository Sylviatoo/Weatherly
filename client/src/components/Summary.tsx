import { useContext } from "react";
import WeatherContext from "../contexts/WeatherContext";

function Summary() {
  const weatherContext = useContext(WeatherContext);
  const summaryTodayWeather = weatherContext.Headline.Text;

  return (
    <div>
      <h1>Tendances</h1>
      <p>{summaryTodayWeather}</p>
    </div>
  );
}

export default Summary;
