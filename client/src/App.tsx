import { useEffect, useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
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
        <header>
          <Header />
        </header>

        <main>
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
      </CityContext.Provider>
    </WeatherContext.Provider>
  );
}

export default App;
