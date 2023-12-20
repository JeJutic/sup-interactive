import "./QuestionCard.css";
import "./QuestionCardTransition.css";
import bottomImg from "../img/bottomImg.svg";
import React from "react";
import DoubleHistoricalReference from "./DoubleHistoricalReference";

function QuestionCard({
  questionInfo,
  interactiveComponent,
  flip,
  closeButton,
}) {
  return (
    <div className={"card"}>
      <div className="card-front">
        <div className="white-box">
          <div className="card__img__wrapper">
            <img className="card__img" src={questionInfo.image} alt="..." />
          </div>
          <h1 className="question__header">{questionInfo.title}</h1>
          <p className="question__description">
            {questionInfo.description}
          </p>
          <div className="bottom__img__wrapper">
            <img className="bottom__img" src={bottomImg} alt="..." />
          </div>
        </div>
        {interactiveComponent}
        {closeButton}
      </div>
      <div className="card-back hist">
        <div className="white-box" onClick={flip}>
          <div className="card__img__wrapper">
            <img className="card__img" src={questionInfo.image} alt="..." />
          </div>
          <h1 className="card__header">{questionInfo.header}</h1>
          <p className="card__description">
            Неправильный ответ
            <br />
            {questionInfo.hint}
          </p>
          <div className="bottom__img__wrapper">
            <img className="bottom__img" src={bottomImg} alt="..." />
          </div>
        </div>
        {closeButton}
      </div>
    </div>
  );
}

function FullQuestionCard({
  cardData,
  closeButton,
  interactiveComponent,
  flip,
}) {
  if (localStorage.getItem("bridge" + cardData.position) === null) {
    return (
      <QuestionCard
        questionInfo={cardData.questionInfo}
        interactiveComponent={interactiveComponent}
        flip={flip}
        closeButton={closeButton}
      />
    );
  } else {
    return (
      <DoubleHistoricalReference
        historicalInfo={cardData.historicalInfo}
        closeButton={closeButton}
      />
    );
  }
}

export default FullQuestionCard;
