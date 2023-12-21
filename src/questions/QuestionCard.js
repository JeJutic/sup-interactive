import "./QuestionCard.css";
import "./QuestionCardTransition.css";
import bottomImg from "../img/bottomImg.svg";
import React from "react";
import DoubleHistoricalReference from "./DoubleHistoricalReference";

function QuestionCard({
  questionInfo,
  interactiveComponent,
  sidebarComponent,
  flip,
  closeButton,
}) {
  return (
    <div className="card noselect">
      <div className="card-front">
        <div className="white-box">
          <div className="card-content">
            <div className="card-content-title">
              <h1 className="question__title">{questionInfo.title}</h1>
            </div>
            <div className="card-content-left">
              <p className="question__description">
                {questionInfo.description}
              </p>
              <div className="card-content-interactive">
                {interactiveComponent}
              </div>
            </div>
            <div className="card-content-right">{sidebarComponent}</div>
          </div>
          <div className="bottom__img__wrapper">
            <img className="bottom__img" src={bottomImg} alt="..." />
          </div>
          {closeButton}
        </div>
      </div>
      <div className="card-back hist">
        <div className="white-box">
          <div className="card-content" onClick={flip}>
            <div className="card-content-title">
              <h1 className="question__title">{questionInfo.title}</h1>
            </div>
            <div className="card-content-left">
              <p className="question__description">
                Неправильный ответ
                <br />
                {questionInfo.hint}
              </p>
            </div>
            <div className="card-content-right"></div>
          </div>
          <div className="bottom__img__wrapper">
            <img className="bottom__img" src={bottomImg} alt="..." />
          </div>
          {closeButton}
        </div>
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
