import { useState } from "react";
import "./FinishScreen.css";
import "./WelcomeScreen.css";

const WelcomeScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => setIsVisible(false);

  return (
    <div className={`frame welcome-screen ${isVisible ? "" : "hidden"}`}>
      <div className="content">
        <h1 className="congrats-header">ПРИВЕТСТВЕННЫЙ ЭКРАН</h1>
        <p className="p">
          Пройдите квест по маршруту гонки “Фонтанка SUP” и узнайте всё самое интересное, связанное с мостами на пути.
        </p>
        <div className="button-wrapper">
          <button className="button-inside" onClick={handleClick}>Поплыли</button>
        </div>
      </div>
      <div className="bottom__img__wrapper">
        <div className="bottom__img"></div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
