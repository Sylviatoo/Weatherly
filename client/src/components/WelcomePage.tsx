import CityLocation from "./CityLocation";
import Summary from "./Summary";
import SunTime from "./SunTime";
import TodayWeather from "./TodayWeather";
import WeatherParamater from "./WeatherParameter";

function WelcomePage() {
  return (
    <>
      <CityLocation />
      <Summary />
      <SunTime />
      <WeatherParamater />
      <TodayWeather />
    </>
  );
}
export default WelcomePage;
