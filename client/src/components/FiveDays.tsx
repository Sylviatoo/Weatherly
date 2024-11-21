import img1 from "../assets/images/1.png";
import img6 from "../assets/images/6.png";
import img13 from "../assets/images/13.png";
import img17 from "../assets/images/17.png";
import img18 from "../assets/images/18.png";
import "../style-css/FiveDaysStyle.css";

function FiveDays() {
  const daysArray = [
    {
      id: "01",
      img: img1,
      date: "Lundi 18 nov.",
      degree: "13°c",
    },

    {
      id: "02",
      img: img17,
      date: "Mardi 19 nov.",
      degree: "16°c",
    },

    {
      id: "03",
      img: img18,
      date: "Mercredi 20 nov.",
      degree: "18°c",
    },
    {
      id: "04",
      img: img13,
      date: "Jeudi 20 nov.",
      degree: "17°c",
    },
    {
      id: "05",
      img: img6,
      date: "Vendredi 21 nov.",
      degree: "20°c",
    },
  ];

  const daysArrayDisplay = daysArray.map((day) => {
    return (
      <div key={day.id} className="day-box">
        <img src={day.img} alt={`Météo ${day.date}`} className="img-icons" />
        <p className="date">{day.date}</p>
        <p className="degree">{day.degree}</p>
      </div>
    );
  });

  return (
    <div>
      <Days />
      <div className="container">{daysArrayDisplay}</div>
    </div>
  );
}

function Days() {
  return (
    <div className="days-city">
      <h2 className="days">5 jours</h2>
      <h3 className="city">Toulouse</h3>
    </div>
  );
}

export default FiveDays;
