import "./DefaultQuestion.css";
import React, { useState } from "react";

function AnswerButton() {
  return <button>I'm answer</button>;
}

function DefaultQuestion({
  question,
  image,
  header,
  description,
  questionDescription,
}) {
  const [cardFlip, setCardFlip] = useState(true);

  const toggleFlip = () => {
    setCardFlip(!cardFlip);
  };

  return (
    <>
      <div className={`card ${cardFlip ? "" : "hidden"}`} onClick={toggleFlip}>
        <div className="white-box">
          <div className="img__wrapper">
            <img className="question__img" src={image} alt="..." />
          </div>
          <h1 className="card__header">{header}</h1>
          <p className="card__description">{description}</p>
        </div>
      </div>
      <div
        className={`card-reverse ${cardFlip ? "hidden" : ""}`}
        onClick={toggleFlip}
      >
        <div className="white-box">
          <h1>{question}</h1>
          <p>{questionDescription}</p>
          <AnswerButton />
          <AnswerButton />
          <AnswerButton />
        </div>
      </div>
      {/*{cardFlip ? (*/}
      {/*  <div className={`card`} onClick={toggleFlip}>*/}
      {/*    <div className="white-box">*/}
      {/*      <div className="img__wrapper">*/}
      {/*        <img className="question__img" src={image} alt="..." />*/}
      {/*      </div>*/}
      {/*      <h1 className="card__header">{header}</h1>*/}
      {/*      <p className="card__description">{description}</p>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*) : (*/}
      {/*  <div className="card-reverse" onClick={toggleFlip}>*/}
      {/*    <div className="white-box">*/}
      {/*      <h1>{question}</h1>*/}
      {/*      <p>{questionDescription}</p>*/}
      {/*      <AnswerButton />*/}
      {/*      <AnswerButton />*/}
      {/*      <AnswerButton />*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*)}*/}
    </>
  );
}

export default DefaultQuestion;
