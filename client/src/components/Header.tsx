import { Link } from "react-router-dom";
import "../style-css/Header.css";
import "../style-css/ResponsiveBox.css";

function Header() {
  return (
    <>
      <nav className="header-style">
        <Link to="/">Accueil</Link>
        <Link to="FiveDays">5jours</Link>
        <Link to="Favorites">Favoris</Link>
      </nav>
    </>
  );
}
export default Header;
