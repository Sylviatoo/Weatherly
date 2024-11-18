import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav>
        <div className="logo">
          <img src="./src/assets/images/logo.png" alt="weatherly-logo" />
        </div>
        <div className="icons">
          <Link to="/">
            <img src="./src/assets/images/today.png" alt="today-weather" />
            <p>Accueil</p>
          </Link>
          <Link to="FiveDays">
            <img src="./src/assets/images/five-days.png" alt="five-days" />
            <p>5 jours</p>
          </Link>
          <Link to="Favorites">
            <img src="./src/assets/images/Favoris.png" alt="favoris" />
            <p>Favoris</p>
          </Link>
        </div>
      </nav>
    </>
  );
}
export default Header;
