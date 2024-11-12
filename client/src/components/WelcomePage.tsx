import { useContext } from "react";
import CityContext from "../contexts/CityContext";
import type { CityProps } from "../library/api-weather";

function WelcomePage() {
  const cityContext = useContext<CityProps>(CityContext);
  return <h1>Welcome at {cityContext.LocalizedName}</h1>;
}

export default WelcomePage;
