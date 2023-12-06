import { useState } from "react";
import "./WelcomeScreen.css";

import mainPage from "../img/main_page.png";

export const WelcomeScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => setIsVisible(false);

  return (
    <>
      <div className={`welcome-screen ${isVisible ? "" : "hidden"}`}>
        <h1 className="welcome-screen-name">Приветственный Экран!</h1>
        <p className="welcome-screen-description">
          Здесь могла быть ваша реклама (ну или описание проекта)
        </p>
        <button className="welcome-screen__btn" onClick={handleClick}>
          Понял
        </button>
      </div>
    </>
  );
};

export default WelcomeScreen;
