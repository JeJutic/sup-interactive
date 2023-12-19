// FinishScreen.jsx
import React from "react";
import "./FinishScreen.css";

const FinishScreen = () => {
  const handleClick = () => window.location.reload();

  return (
    <div className="frame">
      <div className="content">
        <h1 className="congrats-header">ПРИВЕТСТВЕННЫЙ ЭКРАН</h1>
        <p className="p">
          Этот праздник уже восемь лет вместе с нами создаете вы — своей энергией, прекрасными костюмами и настроением!
          Всем легкой воды, всем счастья. Петербург — лучший. Это «Фонтанка.ру», это — «Фонтанка SUP
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

export default FinishScreen;
