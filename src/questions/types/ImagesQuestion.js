// import "./DefaultQuestion.css";
import React from "react";

import FullQuestionCard from "../QuestionCard";

function ImageOption({ image, onClick }) {
  return (
    <div className="img__wrapper">
      <img className="question__img" src={image} onClick={onClick} alt="..." />
    </div>
  );
}

function ImagesQuestion({ cardData, options, flip, closeButton }) {
  let interactive = (
    <>
      <ImageOption
        image={options[0].image}
        onClick={() => {
          flip();
          if (options[0].right) {
            cardData.onQuestionSolved();
          }
        }}
      />
      <ImageOption
        image={options[1].image}
        onClick={() => {
          flip();
          if (options[1].right) {
            cardData.onQuestionSolved();
          }
        }}
      />
      <ImageOption
        image={options[2].image}
        onClick={() => {
          flip();
          if (options[2].right) {
            cardData.onQuestionSolved();
          }
        }}
      />
      <ImageOption
        image={options[3].image}
        onClick={() => {
          flip();
          if (options[3].right) {
            cardData.onQuestionSolved();
          }
        }}
      />
    </>
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

export default ImagesQuestion;
