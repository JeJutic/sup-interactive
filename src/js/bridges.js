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
    position: [59.941065, 30.334762],
    overlayComponent: (onQuestionSolved) => (
      <DefaultQuestion
        cardData={{
          questionInfo: {
            question: "Задание 1 из 13",
            image: stoneBridge,
            header: "1-й Садовый мост",
            description:
              "Каменный мост сохранился практически в первозданном виде и входит в список памятников архитектуры федерального значения. Современный каменный мост был возведён в 1766—1776 гг. по проекту инженера В. Назимова и под наблюдением инженера И. Борисова",
            questionDescription:
              "Рассчитать стоимость строительства моста на современные деньги, то есть перевести 3500 рублей 1890-ых годов современные деньги",
            hint: "Подсказка: 1 рубль = 104 поездкам в метро Санкт- Петербурга по карте подорожник)",
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
    position: [59.942101, 30.337787],
    overlayComponent: (onQuestionSolved) => (
      <DefaultQuestion
        cardData={{
          questionInfo: {
            question: "Задание 2 из 13",
            image: stoneBridge,
            header: "1-й Инженерный мост",
            description:
              "Каменный мост сохранился практически в первозданном виде и входит в список памятников архитектуры федерального значения. Современный каменный мост был возведён в 1766—1776 гг. по проекту инженера В. Назимова и под наблюдением инженера И. Борисова",
            questionDescription:
              "Рассчитать стоимость строительства моста на современные деньги, то есть перевести 3500 рублей 1890-ых годов современные деньги",
            hint: "Подсказка: 1 рубль = 104 поездкам в метро Санкт- Петербурга по карте подорожник)",
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
    position: [59.933107, 30.342766],
    overlayComponent: (onQuestionSolved) => (
      <DefaultQuestion
        cardData={{
          questionInfo: {
            question: "Задание 3 из 13",
            image: stoneBridge,
            header: "Аничков мост",
            description:
              "Каменный мост сохранился практически в первозданном виде и входит в список памятников архитектуры федерального значения. Современный каменный мост был возведён в 1766—1776 гг. по проекту инженера В. Назимова и под наблюдением инженера И. Борисова",
            questionDescription:
              "Рассчитать стоимость строительства моста на современные деньги, то есть перевести 3500 рублей 1890-ых годов современные деньги",
            hint: "Подсказка: 1 рубль = 104 поездкам в метро Санкт- Петербурга по карте подорожник)",
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
    position: [59.928447, 30.33573],
    overlayComponent: (onQuestionSolved) => (
      <DefaultQuestion
        cardData={{
          questionInfo: {
            question: "Задание 4 из 13",
            image: stoneBridge,
            header: "Мост Ломоносова",
            description:
              "Каменный мост сохранился практически в первозданном виде и входит в список памятников архитектуры федерального значения. Современный каменный мост был возведён в 1766—1776 гг. по проекту инженера В. Назимова и под наблюдением инженера И. Борисова",
            questionDescription:
              "Рассчитать стоимость строительства моста на современные деньги, то есть перевести 3500 рублей 1890-ых годов современные деньги",
            hint: "Подсказка: 1 рубль = 104 поездкам в метро Санкт- Петербурга по карте подорожник)",
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
    position: [59.9215, 30.3171],
    overlayComponent: (onQuestionSolved) => (
      <DefaultQuestion
        cardData={{
          questionInfo: {
            question: "Задание 5 из 13",
            image: stoneBridge,
            header: "Обуховский мост",
            description:
              "Каменный мост сохранился практически в первозданном виде и входит в список памятников архитектуры федерального значения. Современный каменный мост был возведён в 1766—1776 гг. по проекту инженера В. Назимова и под наблюдением инженера И. Борисова",
            questionDescription:
              "Рассчитать стоимость строительства моста на современные деньги, то есть перевести 3500 рублей 1890-ых годов современные деньги",
            hint: "Подсказка: 1 рубль = 104 поездкам в метро Санкт- Петербурга по карте подорожник)",
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
    position: [59.9192101, 30.307146],
    overlayComponent: (onQuestionSolved) => (
      <DefaultQuestion
        cardData={{
          questionInfo: {
            question: "Задание 6 из 13",
            image: stoneBridge,
            header: "Измайловский мост",
            description:
              "Каменный мост сохранился практически в первозданном виде и входит в список памятников архитектуры федерального значения. Современный каменный мост был возведён в 1766—1776 гг. по проекту инженера В. Назимова и под наблюдением инженера И. Борисова",
            questionDescription:
              "Рассчитать стоимость строительства моста на современные деньги, то есть перевести 3500 рублей 1890-ых годов современные деньги",
            hint: "Подсказка: 1 рубль = 104 поездкам в метро Санкт- Петербурга по карте подорожник)",
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
    position: [59.920398, 30.298423],
    overlayComponent: (onQuestionSolved) => (
      <DefaultQuestion
        cardData={{
          questionInfo: {
            question: "Задание 7 из 13",
            image: stoneBridge,
            header: "Пикалов мост",
            description:
              "Каменный мост сохранился практически в первозданном виде и входит в список памятников архитектуры федерального значения. Современный каменный мост был возведён в 1766—1776 гг. по проекту инженера В. Назимова и под наблюдением инженера И. Борисова",
            questionDescription:
              "Рассчитать стоимость строительства моста на современные деньги, то есть перевести 3500 рублей 1890-ых годов современные деньги",
            hint: "Подсказка: 1 рубль = 104 поездкам в метро Санкт- Петербурга по карте подорожник)",
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
    position: [59.92433, 30.302031],
    overlayComponent: (onQuestionSolved) => (
      <DefaultQuestion
        cardData={{
          questionInfo: {
            question: "Задание 8 из 13",
            image: stoneBridge,
            header: "Харламов мост",
            description:
              "Каменный мост сохранился практически в первозданном виде и входит в список памятников архитектуры федерального значения. Современный каменный мост был возведён в 1766—1776 гг. по проекту инженера В. Назимова и под наблюдением инженера И. Борисова",
            questionDescription:
              "Рассчитать стоимость строительства моста на современные деньги, то есть перевести 3500 рублей 1890-ых годов современные деньги",
            hint: "Подсказка: 1 рубль = 104 поездкам в метро Санкт- Петербурга по карте подорожник)",
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
    position: [59.926805, 30.301405],
    overlayComponent: (onQuestionSolved) => (
      <DefaultQuestion
        cardData={{
          questionInfo: {
            question: "Задание 9 из 13",
            image: stoneBridge,
            header: "Львиный мост",
            description:
              "Каменный мост сохранился практически в первозданном виде и входит в список памятников архитектуры федерального значения. Современный каменный мост был возведён в 1766—1776 гг. по проекту инженера В. Назимова и под наблюдением инженера И. Борисова",
            questionDescription:
              "Рассчитать стоимость строительства моста на современные деньги, то есть перевести 3500 рублей 1890-ых годов современные деньги",
            hint: "Подсказка: 1 рубль = 104 поездкам в метро Санкт- Петербурга по карте подорожник)",
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
    position: [59.925818, 30.313631],
    overlayComponent: (onQuestionSolved) => (
      <DefaultQuestion
        cardData={{
          questionInfo: {
            question: "Задание 10 из 13",
            image: stoneBridge,
            header: "Кокушкин мост",
            description:
              "Каменный мост сохранился практически в первозданном виде и входит в список памятников архитектуры федерального значения. Современный каменный мост был возведён в 1766—1776 гг. по проекту инженера В. Назимова и под наблюдением инженера И. Борисова",
            questionDescription:
              "Рассчитать стоимость строительства моста на современные деньги, то есть перевести 3500 рублей 1890-ых годов современные деньги",
            hint: "Подсказка: 1 рубль = 104 поездкам в метро Санкт- Петербурга по карте подорожник)",
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
    position: [59.932062, 30.324241],
    overlayComponent: (onQuestionSolved) => (
      <DefaultQuestion
        cardData={{
          questionInfo: {
            question: "Задание 11 из 13",
            image: stoneBridge,
            header: "Банковский мост",
            description:
              "Каменный мост сохранился практически в первозданном виде и входит в список памятников архитектуры федерального значения. Современный каменный мост был возведён в 1766—1776 гг. по проекту инженера В. Назимова и под наблюдением инженера И. Борисова",
            questionDescription:
              "Рассчитать стоимость строительства моста на современные деньги, то есть перевести 3500 рублей 1890-ых годов современные деньги",
            hint: "Подсказка: 1 рубль = 104 поездкам в метро Санкт- Петербурга по карте подорожник)",
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
    position: [59.93726, 30.326601],
    overlayComponent: (onQuestionSolved) => (
      <DefaultQuestion
        cardData={{
          questionInfo: {
            question: "Задание 12 из 13",
            image: stoneBridge,
            header: "Итальянский мост",
            description:
              "Каменный мост сохранился практически в первозданном виде и входит в список памятников архитектуры федерального значения. Современный каменный мост был возведён в 1766—1776 гг. по проекту инженера В. Назимова и под наблюдением инженера И. Борисова",
            questionDescription:
              "Рассчитать стоимость строительства моста на современные деньги, то есть перевести 3500 рублей 1890-ых годов современные деньги",
            hint: "Подсказка: 1 рубль = 104 поездкам в метро Санкт- Петербурга по карте подорожник)",
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
    position: [59.941685, 30.328126],
    overlayComponent: (onQuestionSolved) => (
      <DefaultQuestion
        cardData={{
          questionInfo: {
            question: "Задание 13 из 13",
            image: stoneBridge,
            header: "Тройной мост",
            description:
              "Каменный мост сохранился практически в первозданном виде и входит в список памятников архитектуры федерального значения. Современный каменный мост был возведён в 1766—1776 гг. по проекту инженера В. Назимова и под наблюдением инженера И. Борисова",
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
