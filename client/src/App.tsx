import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { CityContextProvider } from "./contexts/CityContextProvider";
import { WeatherContextProvider } from "./contexts/WeatherContextProvider";

function App() {
  return (
    <CityContextProvider>
      <WeatherContextProvider>
        <header>
          <Header />
        </header>

        <main
          style={{
            background:
              "linear-gradient(180deg, rgba(140,139,253,1) 0%, rgba(191,214,248,1) 50%, rgba(244,160,110,1) 100%)",
            minHeight: "100vh",
            padding: "1rem",
          }}
        >
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
      </WeatherContextProvider>
    </CityContextProvider>
  );
}

export default App;
