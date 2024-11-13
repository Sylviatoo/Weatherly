import CityLocation from "./CityLocation";
import SunTime from "./SunTime";
import TodayWeather from "./TodayWeather";
import WeatherParamater from "./WeatherParameter";

function WelcomePage() {
  return (
    <>
      <CityLocation />
      <SunTime />
      <WeatherParamater />
      <TodayWeather />
    </>
  );
}

export default WelcomePage;
