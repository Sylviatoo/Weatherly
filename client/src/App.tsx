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
  let storedWeatherForecastString =
    window.localStorage.getItem("weather-forecast");
  let storedWeatherForecast = null;
  let storedCityString = window.localStorage.getItem("weather-city");
  let storedCity = null;

  if (storedWeatherForecastString !== null) {
    // preliminary: check if weather forecast is outdated (if it was set more than 24 hours before).
    storedWeatherForecast = JSON.parse(
      storedWeatherForecastString,
    ) as WeatherForecastProps;
    const dateForecast = new Date(storedWeatherForecast.DailyForecasts[0].Date);
    const dateCurrent = new Date();
    const time = dateCurrent.getTime() - dateForecast.getTime();
    if (time > 24 * 60 * 60 * 1000) {
      // in this case, we remove the local storage.
      window.localStorage.removeItem("weather-forecast");
      window.localStorage.removeItem("weather-city");

      storedWeatherForecastString = null;
      storedCityString = null;
    }
  }

  if (storedWeatherForecastString !== null) {
    storedWeatherForecast = JSON.parse(
      storedWeatherForecastString,
    ) as WeatherForecastProps;
  } else {
    storedWeatherForecast = new WeatherForecastProps();
  }

  const [weatherForecast, setWeatherForecast] = useState<WeatherForecastProps>(
    storedWeatherForecast,
  );
  weatherForecast.FunctionSet = setWeatherForecast;

  if (storedCityString !== null) {
    storedCity = JSON.parse(storedCityString) as CityProps;
  } else {
    storedCity = new CityProps();
  }

  const [city, setCity] = useState<CityProps>(storedCity);
  city.FunctionSet = setCity;

  useEffect(() => {
    if (storedWeatherForecastString == null) {
      // weather forcast object is set with empty object.
      // we perform a request to API.
      getCurrentPosition((position) => {
        if (position.StatusError === undefined) {
          getCityByLocation(
            position.Latitude as number,
            position.Longitude as number,
          )
            .then((city_props) => {
              window.localStorage.setItem(
                "weather-city",
                JSON.stringify(city_props),
              );
              city.FunctionSet(city_props);
              return getFiveDaysWeatherForecast(city_props.Key as string);
            })
            .then((weatherForecast_props) => {
              window.localStorage.setItem(
                "weather-forecast",
                JSON.stringify(weatherForecast_props),
              );
              weatherForecast.FunctionSet(weatherForecast_props);
            });
        }
      });
    }
  }, [city, weatherForecast, storedWeatherForecastString]);

  return (
    <WeatherContext.Provider value={weatherForecast}>
      <CityContext.Provider value={city}>
        <header>
          <Header />
        </header>

        <main
          style={{
            background:
              "linear-gradient(180deg, rgba(140,139,253,1) 0%, rgba(191,214,248,1) 50%, rgba(244,160,110,1) 100%)",
            minHeight: "100vh",
            padding: "1rem",
          }}
        >
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
