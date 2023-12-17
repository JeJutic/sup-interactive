import "./DefaultQuestionTransition.css";
import "./DefaultQuestion.css";
import React from "react";

import caretRight from "../img/caret-right.svg";
import caretLeft from "../img/caret-left-fill.svg";
import FullQuestionCard from "./QuestionCard";

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

function AnswerButtonList({ options, onQuestionSolved, flip }) {
  return (
    <div className="question__answers">
      <ul className="question__answers__ul">
        {options.map((option) => (
          <li key={option.text}>
            <AnswerButton
              text={option.text}
              onClick={() => {
                flip();
                if (option.correct) {
                  onQuestionSolved();
                }
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

function DefaultQuestion({ cardData, options, flip, closeButton }) {
  let interactive = (
    <AnswerButtonList
      options={options}
      onQuestionSolved={cardData.onQuestionSolved}
      flip={flip}
    />
  );
  return (
    <FullQuestionCard
      cardData={cardData}
      closeButton={closeButton}
      interactiveComponent={interactive}
      flip={flip}
    />
  );
}

export default DefaultQuestion;
