import { useCityContext } from "../contexts/CityContextProvider";
import "../style-css/CityLocation.css";
import "../style-css/ResponsiveBox.css";

function CityLocation() {
  const cityContext = useCityContext();
  const date = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className="city-location-style">
      <h1 className="city-style">
        {cityContext.city.LocalizedName.toUpperCase()}
      </h1>
      <h2 className="date-style">
        {date.toLocaleDateString("fr-FR", options)}
      </h2>
    </div>
  );
}
export default CityLocation;
