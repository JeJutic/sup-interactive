import React from "react";
import DefaultQuestion from "../questions/DefaultQuestion";

import testBridge from "../img/test-bridge.jpg";
import stoneBridge from "../img/stone_bridge.png";

export const bridges = [
  {
    position: [59.933, 30.314627],
    overlayComponent: (onQuestionSolved) => (
      <DefaultQuestion
        question={"Вопрос?"}
        image={testBridge}
        header="Card Name"
        description="lorem ipsum чето то там и так идет описание карточки наверное это можно было сделать через children элемента чтобы было удобнее но мне пока лень это делать"
        options={[
          { text: "wrong answer", correct: false },
          { text: "right answer", correct: true },
          { text: "left answer", correct: false },
        ]}
        onQuestionSolved={onQuestionSolved}
        position={[59.933, 30.314627]}
        hint="Правильнй ответ два"
      />
    ),
  },
  {
    position: [59.930334, 30.318489],
    overlayComponent: (onQuestionSolved) => (
      <DefaultQuestion
        question={"Вопрос 1"}
        image={stoneBridge}
        header="Каменный мост"
        description="Каменный мост сохранился практически в первозданном виде и входит в список памятников архитектуры федерального значения. Современный каменный мост был возведён в 1766—1776 гг. по проекту инженера В. Назимова и под наблюдением инженера И. Борисова"
        questionDescription="Рассчитать стоимость строительства моста на современные деньги, то есть перевести 3500 рублей 1890-ых годов современные деньги"
        hint="Подсказка: 1 рубль = 104 поездкам в метро Санкт- Петербурга по карте подорожник)"
        options={[
          { text: "76.000 рублей", correct: true },
          { text: "56.000 рублей", correct: false },
          { text: "36.000 рублей", correct: false },
          { text: "96.000 рублей", correct: false },
        ]}
        onQuestionSolved={onQuestionSolved}
        position={[59.930334, 30.318489]}
      />
    ),
  },
];
