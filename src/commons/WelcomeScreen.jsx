import { useState } from "react";
// import "./FinishScreen.css";
import "./WelcomeScreen.css";

import bottomImg from "../img/bottomImg.svg";

const WelcomeScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => setIsVisible(false);

  return (
    <div className={`frame welcome-screen ${isVisible ? "" : "hidden"}`}>
      <div className="content noselect">
        <h1 className="welcome-header">ФОНТАНКА SUP</h1>
        <p className="description">XI ФЕСТИВАЛЬ САПСЁРФИНГА</p>
        <p className="welcome__p">
          Пройдите квест по маршруту гонки “Фонтанка SUP” и узнайте всё самое
          интересное, связанное с мостами на пути.
        </p>
        <div className="button-wrapper">
          <button className="button-inside" onClick={handleClick}>
            Поплыли
          </button>
        </div>
      </div>
      <div className="welcome__bottom__img__wrapper">
        <img className="welcome__bottom__img" src={bottomImg} alt="..." />
      </div>
    </div>
  );
};

export default WelcomeScreen;
