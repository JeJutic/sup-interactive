import "./DefaultQuestionTransition.css";
import "./DefaultQuestion.css";
import React from "react";

function AnswerButton() {
  return <button>I'm answer</button>;
}

function DefaultQuestion({
  question,
  image,
  header,
  description,
  questionDescription,
  onClick,
  closeButton,
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
        </div>
        {closeButton}
      </div>
      <div className="card-back">
        <div className="white-box" onClick={onClick}>
          <h1>{question}</h1>
          <p>{questionDescription}</p>
          <AnswerButton />
          <AnswerButton />
          <AnswerButton />
        </div>
        {closeButton}
      </div>
    </div>
  );
}

export default DefaultQuestion;
