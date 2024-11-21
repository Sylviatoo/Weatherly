import { useWeatherContext } from "../contexts/WeatherContextProvider";
import "../style-css/Summary.css";
import "../style-css/ResponsiveBox.css";

function Summary() {
  const weatherContext = useWeatherContext();
  const summaryTodayWeather = weatherContext.weather.Headline.Text;

  return (
    <div className="summary-style">
      <h1 className="tendancy">Tendances</h1>
      <p>{summaryTodayWeather}</p>
    </div>
  );
}

export default Summary;
