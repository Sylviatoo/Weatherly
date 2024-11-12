import { useEffect, useState } from "react";
import "./App.css";
import { Link, Outlet } from "react-router-dom";
import CityContext from "./contexts/CityContext";
import WeatherContext from "./contexts/WeatherContext";
import {
  CityProps,
  WeatherForecastProps,
  getCityByLocation,
  getCurrentPosition,
  getFiveDaysWeatherForecast,
} from "./library/api-weather";

function App() {
  const [weatherForecast, setWeatherForecast] = useState<WeatherForecastProps>(
    new WeatherForecastProps(),
  );
  weatherForecast.FunctionSet = setWeatherForecast;

  const [city, setCity] = useState<CityProps>(new CityProps());
  city.FunctionSet = setCity;

  useEffect(() => {
    getCurrentPosition((position) => {
      if (position.StatusError === undefined) {
        getCityByLocation(
          position.Latitude as number,
          position.Longitude as number,
        )
          .then((city_props) => {
            city.FunctionSet(city_props);
            return getFiveDaysWeatherForecast(city_props.Key as string);
          })
          .then((weatherForecast_props) => {
            weatherForecast.FunctionSet(weatherForecast_props);
          });
      }
    });
  }, [city, weatherForecast]);

  return (
    <WeatherContext.Provider value={weatherForecast}>
      <CityContext.Provider value={city}>
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="FiveDays">5jours</Link>
          <Link to="Favorites">Favoris</Link>
        </nav>
        <main>
          <Outlet />
        </main>
      </CityContext.Provider>
    </WeatherContext.Provider>
  );
}

export default App;
