import bottomImg from "../img/bottomImg.svg";

import React from "react";

import "./HistoricalReference.css";

function HistoricalReference({ historicalInfo, closeButton }) {
  return (
    <>
      <div className="white-box">
        <h1 className="subheading">Верно!</h1>
        <div className="history__img__wrapper">
          <img className="history__img" src={historicalInfo.image} alt="..." />
        </div>
        <h3 className="history__header">КСТАТИ!</h3>
        <p className="card__description">{historicalInfo.description}</p>
        {closeButton}
      </div>
    </>
  );
}

function DoubleHistoricalReference({ historicalInfo, closeButton, tag }) {
  let historical = (
    <HistoricalReference
      historicalInfo={historicalInfo}
      closeButton={closeButton}
    />
  );
  return (
    <div className={"card"}>
      <div className="card-front">{historical}</div>
      <div className="card-back">{historical}</div>
    </div>
  );
}

export default DoubleHistoricalReference;
