import { useCityContext } from "../contexts/CityContextProvider";

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
    <>
      <h1>{cityContext.city.LocalizedName.toUpperCase()}</h1>
      <h2>{date.toLocaleDateString("fr-FR", options)}</h2>
    </>
  );
}
export default CityLocation;
