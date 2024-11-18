import CityLocation from "./CityLocation";
import Summary from "./Summary";
import SunTime from "./SunTime";
import TodayWeather from "./TodayWeather";
import WeatherParamater from "./WeatherParameter";
import "../style-css/WelcomePage.css";
import "../style-css/ResponsiveBox.css";

function WelcomePage() {
  return (
    <div className="welcome-page-style">
      <CityLocation />
      <Summary />
      <SunTime />
      <WeatherParamater />
      <TodayWeather />
    </div>
  );
}

export default WelcomePage;
