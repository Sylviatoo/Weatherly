import SunRise from "./SunRise";
import SunSet from "./SunSet";
import "../style-css/SunTime.css";
import "../style-css/ResponsiveBox.css";

function SunTime() {
  return (
    <>
      <div className="sun-time-style">
        <SunRise />
        <SunSet />
      </div>
    </>
  );
}

export default SunTime;
