import "./TextInputQuestion.css";
import React, { useState } from "react";

import FullQuestionCard from "../QuestionCard";

function AnswerForm({ upperHandleSubmit }) {
  const [answer, setAnswer] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    upperHandleSubmit(answer);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
      </label>
      <input type="submit" value="Проверить" />
    </form>
  );
}

function TextInputQuestion({ cardData, rightAnswers, flip, closeButton }) {
  let interactive = (
    <AnswerForm
      upperHandleSubmit={(answer) => {
        flip();
        if (rightAnswers.includes(answer.trim().toLowerCase())) {
          cardData.onQuestionSolved();
        }
      }}
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

export default TextInputQuestion;
