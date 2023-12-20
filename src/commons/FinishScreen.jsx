// FinishScreen.jsx
import React from "react";
import "./FinishScreen.css";

const FinishScreen = () => {
  const handleClick = () => window.location.reload();

  return (
    <div className="frame">
      <div className="content">
        <h1 className="congrats-header">ВЫ ПРОШЛИ!</h1>
        <p className="p">
          Поздравляем, вы ответили на все вопросы! Перезагрузите страницу, чтобы
          пройти заново
        </p>
        <div className="button-wrapper">
          <button className="button-inside" onClick={handleClick}>
            Перезагрузить
          </button>
        </div>
      </div>
      <div className="finish__bottom__img__wrapper">
        <div className="finish__bottom__img"></div>
      </div>
    </div>
  );
};

export default FinishScreen;
