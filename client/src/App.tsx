import { useEffect, useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import {
  CityContextProvider,
  useCityContext,
} from "./contexts/CityContextProvider";
import WeatherContext from "./contexts/WeatherContext";
import {
  type CityProps,
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

  const citiesContext = useCityContext();

  if (storedCityString != null) {
    citiesContext.setCity(JSON.parse(storedCityString) as CityProps);
  }

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
              citiesContext.setCity(city_props);
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
  }, [citiesContext, weatherForecast, storedWeatherForecastString]);

  return (
    <WeatherContext.Provider value={weatherForecast}>
      <CityContextProvider>
        <header>
          <Header />
        </header>

        <main>
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
      </CityContextProvider>
    </WeatherContext.Provider>
  );
}

export default App;
