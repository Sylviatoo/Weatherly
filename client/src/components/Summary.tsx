import { useContext } from "react";
import WeatherContext from "../contexts/WeatherContext";
import "../style-css/Summary.css";
import "../style-css/ResponsiveBox.css";

function Summary() {
  const weatherContext = useContext(WeatherContext);
  const summaryTodayWeather = weatherContext.Headline.Text;

  return (
    <div className="summary-style">
      <h1 className="tendancy">Tendances</h1>
      <p>{summaryTodayWeather}</p>
    </div>
  );
}

export default Summary;
