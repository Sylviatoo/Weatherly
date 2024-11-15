import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="FiveDays">5jours</Link>
        <Link to="Favorites">Favoris</Link>
      </nav>
    </>
  );
}
export default Header;
