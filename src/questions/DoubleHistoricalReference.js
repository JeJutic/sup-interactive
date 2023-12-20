import bottomImg from "../img/bottomImg.svg";
import React from "react";

function HistoricalReference({ historicalInfo, closeButton }) {
  return (
    <>
      <div className="white-box">
        <div className="img__wrapper">
          <img
            className="question__img"
            src={historicalInfo.images[0]}
            alt="..."
          />
        </div>
        <div className="img__wrapper">
          <img
            className="question__img"
            src={historicalInfo.images[1]}
            alt="..."
          />
        </div>
        <h1 className="card__header">{historicalInfo.header}</h1>
        <p className="card__description">{historicalInfo.description}</p>
        <div className="bottom__img__wrapper">
          <img className="bottom__img" src={bottomImg} alt="..." />
        </div>
      </div>
      {closeButton}
    </>
  );
}

function DoubleHistoricalReference({ historicalInfo, closeButton }) {
  let historical = (
    <HistoricalReference
      historicalInfo={historicalInfo}
      closeButton={closeButton}
    />
  );
  return (
    <div className="card">
      <div className="card-front">{historical}</div>
      <div className="card-back">{historical}</div>
    </div>
  );
}

export default DoubleHistoricalReference;
