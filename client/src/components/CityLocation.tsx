import { useContext } from "react";
import CityContext from "../contexts/CityContext";
import type { CityProps } from "../library/api-weather";
import "../style-css/CityLocation.css";
import "../style-css/ResponsiveBox.css";

function CityLocation() {
  const cityContext = useContext<CityProps>(CityContext);
  const date = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className="city-location-style">
      <h1>{cityContext.LocalizedName.toUpperCase()}</h1>
      <h2 className="date-style">
        {date.toLocaleDateString("fr-FR", options)}
      </h2>
    </div>
  );
}
export default CityLocation;
