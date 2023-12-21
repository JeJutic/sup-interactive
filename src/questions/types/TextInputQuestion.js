import "./TextInputQuestion.css";
import React, { useState } from "react";

import FullQuestionCard from "../QuestionCard";
import Button from "../../commons/Button";

function AnswerForm({ upperHandleSubmit }) {
  const [answer, setAnswer] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    upperHandleSubmit(answer);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="input-section">
        <label>
          <input
            type="text"
            className="user-input"
            value={answer}
            placeholder="Введите ответ"
            onChange={(e) => setAnswer(e.target.value)}
          />
        </label>
      </div>
      <div>
        <Button
          text="Отправить"
          props={{
            type: "submit",
          }}
        />
      </div>
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
