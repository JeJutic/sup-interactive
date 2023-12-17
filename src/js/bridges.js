import React from "react";
import DefaultQuestion from "../questions/types/DefaultQuestion";

import testBridge from "../img/test-bridge.jpg";
import stoneBridge from "../img/stone_bridge.png";
import peter from "../img/Peter-and-paul-fortress.png";
import peter2 from "../img/Hermitage.png";
import peter3 from "../img/Kunstkamera.png";
import peter4 from "../img/Saint-Isaacs-Cathedral.png";
import TextInputQuestion from "../questions/types/TextInputQuestion";
import ImagesQuestion from "../questions/types/ImagesQuestion";

export const bridges = [
  {
    position: [59.933, 30.314627],
    overlayComponent: (onQuestionSolved) => (
      <DefaultQuestion
        cardData={{
          questionInfo: {
            image: testBridge,
            question: "Вопрос?",
            questionDescription: "",
            hint: "Правильнй ответ два",
          },
          historicalInfo: {
            images: [testBridge, testBridge],
            header: "Card Name",
            description:
              "lorem ipsum чето то там и так идет описание карточки наверное это можно было сделать через children элемента чтобы было удобнее но мне пока лень это делать",
          },
          onQuestionSolved: onQuestionSolved,
          position: [59.933, 30.314627],
        }}
        options={[
          { text: "wrong answer", correct: false },
          { text: "right answer", correct: true },
          { text: "left answer", correct: false },
        ]}
      />
    ),
  },
  {
    position: [59.930334, 30.318489],
    overlayComponent: (onQuestionSolved) => (
      <DefaultQuestion
        cardData={{
          questionInfo: {
            image: stoneBridge,
            question: "Вопрос 1",
            questionDescription:
              "Рассчитать стоимость строительства моста на современные деньги, то есть перевести 3500 рублей 1890-ых годов современные деньги",
            hint: "Подсказка: 1 рубль = 104 поездкам в метро Санкт- Петербурга по карте подорожник)",
          },
          historicalInfo: {
            images: [stoneBridge, testBridge],
            header: "Каменный мост",
            description:
              "Каменный мост сохранился практически в первозданном виде и входит в список памятников архитектуры федерального значения. Современный каменный мост был возведён в 1766—1776 гг. по проекту инженера В. Назимова и под наблюдением инженера И. Борисова",
          },
          onQuestionSolved: onQuestionSolved,
          position: [59.930334, 30.318489],
        }}
        options={[
          { text: "76.000 рублей", correct: true },
          { text: "56.000 рублей", correct: false },
          { text: "36.000 рублей", correct: false },
          { text: "96.000 рублей", correct: false },
        ]}
      />
    ),
  },
  {
    position: [59.941781, 30.337787],
    overlayComponent: (onQuestionSolved) => (
      <TextInputQuestion
        cardData={{
          questionInfo: {
            question: "1-й Инженерный мост",
            image: stoneBridge,
            questionDescription:
              "Неподалёку от моста в 1835 году находилось Императорское училище правоведения. Воспитанники училища носили мундиры зелёного цвета с желтыми петлицами, которые напоминали оттенок оперения птицы, а зимой - особые шапки. В свободное время студенты тайно посещали расположенный недалеко трактир, а после шли гулять по набережной и громко петь песни не в самом трезвом виде. За такое поведение и внешнее сходство студентам дали прозвище и придумали одноименную песенку. Какое это было прозвище?",
            hint: "..... , где ты был? На Фонтанке водку…",
          },
          historicalInfo: {
            images: [stoneBridge, stoneBridge],
            header: "1-й Инженерный мост",
            description:
              "Рядом с мостом расположен самый маленький памятник в Санкт-Петербурге - “Чижик-Пыжик” (с 1994 года). Прозвище “чижик-пыжик” студентов училища послужило названием для скульптуры.\n" +
              "«Чижик-пыжик, где ты был?\n" +
              "На Фонтанке водку пил.\n" +
              "Выпил рюмку, выпил две -\n" +
              "Зашумело в голове».",
          },
          onQuestionSolved: onQuestionSolved,
          position: [59.941781, 30.337787],
        }}
        rightAnswers={[
          "чижик-пыжик",
          "чижик пыжик",
          "чижикпыжик",
          "чижики-пыжики",
          "чижики пыжики",
          "чижикипыжики",
        ]}
      />
    ),
  },
  {
    position: [59.933307, 30.343366],
    overlayComponent: (onQuestionSolved) => (
      <ImagesQuestion
        cardData={{
          questionInfo: {
            question: "Аничков мост",
            image: stoneBridge,
            questionDescription:
              "Аничков мост знаменит своей скульптурным ансамблем “Покорение коня человеком” из четырех коней - работа П.К. Клодта. Чтобы понять задумку автора, нужно рассматривать монументы в определенном порядке. Посмотрите на фото скульптур и расположите их в правильной последовательности. хх Выбери здесь того, у которого на фоне фасад здания ъъ",
            hint: "..... , где ты был? На Фонтанке водку…",
          },
          historicalInfo: {
            images: [stoneBridge, stoneBridge],
            header: "Аничков мост",
            description:
              "Рядом с мостом расположен самый маленький памятник в Санкт-Петербурге - “Чижик-Пыжик” (с 1994 года). Прозвище “чижик-пыжик” студентов училища послужило названием для скульптуры.\n" +
              "«Чижик-пыжик, где ты был?\n" +
              "На Фонтанке водку пил.\n" +
              "Выпил рюмку, выпил две -\n" +
              "Зашумело в голове».",
          },
          onQuestionSolved: onQuestionSolved,
          position: [59.933307, 30.343366],
        }}
        options={[
          {
            image: peter,
            right: false,
          },
          {
            image: peter2,
            right: false,
          },
          {
            image: peter3,
            right: true,
          },
          {
            image: peter4,
            right: false,
          },
        ]}
      />
    ),
  },
];
