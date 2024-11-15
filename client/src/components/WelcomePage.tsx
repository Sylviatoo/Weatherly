import CityLocation from "./CityLocation";
import SunTime from "./SunTime";
import TodayWeather from "./TodayWeather";
import WeatherParamater from "./WeatherParameter";
import "../style-css/WelcomePage.css";

function WelcomePage() {
  return (
    <div className="welcome-page-style">
      <CityLocation />
      <SunTime />
      <WeatherParamater />
      <TodayWeather />
    </div>
  );
}

export default WelcomePage;
