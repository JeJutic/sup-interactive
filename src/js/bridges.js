import React from "react";
import DefaultQuestion from "../questions/DefaultQuestion";

import testBridge from "../img/test-bridge.jpg";
import stoneBridge from "../img/stone_bridge.png";

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
        question={"Вопрос 1"}
        image={stoneBridge}
        header="Каменный мост"
        description="Каменный мост сохранился практически в первозданном виде и входит в список памятников архитектуры федерального значения. Современный каменный мост был возведён в 1766—1776 гг. по проекту инженера В. Назимова и под наблюдением инженера И. Борисова"
        questionDescription="Рассчитать стоимость строительства моста на современные деньги, то есть перевести 3500 рублей 1890-ых годов современные деньги
         (подсказка: 1 рубль = 104 поездкам в метро Санкт- Петербурга по карте подорожник)"
        onQuestionSolved={onQuestionSolved}
      />
    ),
  },
];
