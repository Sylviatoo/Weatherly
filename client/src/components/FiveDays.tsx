import "../style-css/FiveDaysStyle.css";
import { useCityContext } from "../contexts/CityContextProvider";
import { useWeatherContext } from "../contexts/WeatherContextProvider";

function FiveDays() {
  const weatherContext = useWeatherContext();
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    month: "short",
    day: "numeric",
  };

  const daysArrayDisplay = weatherContext.weather.DailyForecasts.map(
    (weather) => {
      return (
        <div key={`weather${weather.EpochDate}`} className="day-box">
          <img
            src={`/src/assets/images/${weather.Day.Icon}.png`}
            alt={weather.Day.IconPhrase}
            className="img-icons"
          />
          <p className="date">
            {new Date(weather.Date).toLocaleDateString("fr-FR", options)}
          </p>
          <p className="degree">{`${weather.Temperature.Maximum.Value}°${weather.Temperature.Maximum.Unit}`}</p>
        </div>
      );
    },
  );

  return (
    <div>
      <Days />
      <div className="container">{daysArrayDisplay}</div>
    </div>
  );
}

function Days() {
  const cityContext = useCityContext();
  return (
    <div className="days-city">
      <h2 className="days">5 jours</h2>
      <h3 className="city">{cityContext.city.LocalizedName}</h3>
    </div>
  );
}

export default FiveDays;
