import { useContext } from "react";
import CityContext from "../contexts/CityContext";
import type { CityProps } from "../library/api-weather";

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
    <>
      <h1>{cityContext.LocalizedName.toUpperCase()}</h1>
      <h2>{date.toLocaleDateString("fr-FR", options)}</h2>
    </>
  );
}
export default CityLocation;
