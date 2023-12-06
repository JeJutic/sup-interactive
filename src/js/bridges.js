import React from "react";
import DefaultQuestion from "../questions/DefaultQuestion";
import testBridge from "../img/test-bridge.jpg";

export const bridges = [
  {
    position: [59.92518, 30.32687],
    overlayComponent: (onQuestionSolved) => (
      <DefaultQuestion
        question={"Вопрос?"}
        image={testBridge}
        header="Card Name"
        description="lorem ipsum чето то там и так идет описание карточки наверное это можно было сделать через children элемента чтобы было удобнее но мне пока лень это делать"
        onQuestionSolved={onQuestionSolved}
      />
    ),
  },
  {
    position: [59.94215, 30.33812],
    overlayComponent: (onQuestionSolved) => (
      <DefaultQuestion
        question={"Чижик-пыжик?"}
        image="https://placekitten.com/500/500"
        header="Card Name"
        description="lorem ipsum"
        onQuestionSolved={onQuestionSolved}
      />
    ),
  },
];
