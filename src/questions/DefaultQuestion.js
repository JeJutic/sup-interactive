import "./DefaultQuestionTransition.css";
import "./DefaultQuestion.css";
import React from "react";

import bottomImg from "../img/bottomImg.svg";
import caretRight from "../img/caret-right.svg";
import caretLeft from "../img/caret-left-fill.svg";

function AnswerButton({ onQuestionSolved, text }) {
  const onClick = () => {
    if (onQuestionSolved) {
      onQuestionSolved();
    }
  };
  return (
    <>
      <button className="answer__button" onClick={onClick}>
        {text}
        <img className="caret" src={caretRight} alt="..." />
        <img className="caret-left" src={caretLeft} alt="..." />
      </button>
    </>
  );
}

function DefaultQuestion({
  question,
  image,
  header,
  description,
  questionDescription,
  onClick,
  closeButton,
  answerOptions,
  onQuestionSolved,
}) {
  return (
    <div className="card">
      <div className="card-front">
        <div className="white-box" onClick={onClick}>
          <div className="img__wrapper">
            <img className="question__img" src={image} alt="..." />
          </div>
          <h1 className="card__header">{header}</h1>
          <p className="card__description">{description}</p>
          <div className="bottom__img__wrapper">
            <img className="bottom__img" src={bottomImg} alt="..." />
          </div>
        </div>
        {closeButton}
      </div>
      <div className="card-back">
        <div className="white-box" onClick={onClick}>
          <h1 className="question__header">{question}</h1>
          <p className="question__description">{questionDescription}</p>
          <div className="question__answers">
            <AnswerButton
              text={answerOptions[0][0]}
              onQuestionSolved={onQuestionSolved}
            />
            <AnswerButton
              text={answerOptions[1][0]}
              onQuestionSolved={onQuestionSolved}
            />
            <AnswerButton text={answerOptions[2][0]} />
          </div>
          <div className="bottom__img__wrapper">
            <img className="bottom__img" src={bottomImg} alt="..." />
          </div>
        </div>
        {closeButton}
      </div>
    </div>
  );
}

export default DefaultQuestion;
