import img1 from "../assets/images/1.png";
import img6 from "../assets/images/6.png";
import img13 from "../assets/images/13.png";
import img17 from "../assets/images/17.png";
import img18 from "../assets/images/18.png";

function FiveDays() {
  const daysArray = [
    {
      id: "01",
      img: img1,
      date: "Lundi 18 novembre",
      degree: "13°c",
    },

    {
      id: "02",
      img: img17,
      date: "Mardi 19 novembre",
      degree: "16°c",
    },

    {
      id: "03",
      img: img18,
      date: "Mercredi 20 novembre",
      degree: "18°c",
    },
    {
      id: "04",
      img: img13,
      date: "Jeudi 20 novembre",
      degree: "17°c",
    },
    {
      id: "05",
      img: img6,
      date: "Vendredi 21 novembre",
      degree: "20°c",
    },
  ];

  const daysArrayDisplay = daysArray.map((day) => {
    return (
      <div key={day.id}>
        <img src={day.img} alt={`Météo ${day.date}`} />
        <p>{day.date}</p>
        <p>{day.degree}</p>
      </div>
    );
  });

  return (
    <div>
      <Days />
      <div>{daysArrayDisplay}</div>
    </div>
  );
}

function Days() {
  return (
    <div>
      <h2 className="days">5 jours</h2>
      <h3 className="city">Toulouse</h3>
    </div>
  );
}

export default FiveDays;
