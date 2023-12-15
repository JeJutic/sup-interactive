import "./DefaultQuestionTransition.css";
import "./DefaultQuestion.css";
import React from "react";

import bottomImg from "../img/bottomImg.svg";
import caretRight from "../img/caret-right.svg";
import caretLeft from "../img/caret-left-fill.svg";

function AnswerButton({ text, onClick }) {
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

function AnswerButtonList({ options, onQuestionSolved }) {
  return (
    <ul className="question__answers__ul">
      {options.map((option) => (
        <li key={option.text}>
          <AnswerButton
            text={option.text}
            onClick={option.correct ? onQuestionSolved : () => {}}
          />
        </li>
      ))}
    </ul>
  );
}

function DefaultQuestion({
  question,
  image,
  header,
  description,
  questionDescription,
  options,
  onClick,
  closeButton,
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
            <AnswerButtonList
              options={options}
              onQuestionSolved={onQuestionSolved}
            />
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
