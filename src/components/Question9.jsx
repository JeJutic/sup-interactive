import Card from "lib/card/Card";

import styles from "./Question9.module.css";
import { QuestionLayoutContext } from "./QuestionLayout";
import { useContext, useState } from "react";
import { CardModalContext } from "lib/card/CardModal";
import DecoratedBox from "./DecoratedBox";
import Button from "lib/Button";

import failImg from "img/questions/09/fail.jpg";

const CustomButton = (props) => (
  <Button className={styles["button"]} {...props} />
);

const AnswerButton = (props) => {
  return (
    <div className={styles["answer-button"]}>
      <Button {...props} />
      <CustomButton>Анастасия</CustomButton>
    </div>
  );
};

const dataGen = (ctx, state, setState) => [
  {
    state: "intro1",
    data: (
      <div className={styles["screen-centered"]}>
        <DecoratedBox>
          <div className={styles["box-content"]}>
            <p>
              В 19 веке у Львиного моста располагалась Балетная Академия. Так
              как современных средств связи не было, юноши приходили на мост и
              пытались позвать возлюбленную балерину на свидание. Но только
              самым настойчивым удавалось привлечь внимание юных танцовщиц.
            </p>
            <CustomButton
              style={{
                alignSelf: "center",
              }}
              onClick={() => setState("intro2")}
            >
              Дальше
            </CustomButton>
          </div>
        </DecoratedBox>
      </div>
    ),
  },
  {
    state: "intro2",
    data: (
      <div className={styles["screen-centered"]}>
        <DecoratedBox>
          <div className={styles["box-content"]}>
            <p>
              Наш герой Иван уже как целый год безнадежно посещает выступления
              Анастасии. Но вот ему выпал шанс. Молодые люди встретились на
              Львином мосту. Помогите Ивану подобрать нужные слова, чтобы
              позвать вечно занятую Анастасию на свидание.
            </p>
            <CustomButton
              style={{
                alignSelf: "center",
              }}
              onClick={() => setState("block1")}
            >
              Дальше
            </CustomButton>
          </div>
        </DecoratedBox>
      </div>
    ),
  },
  {
    state: "block1",
    data: (
      <div className={styles["block"]}>
        <div className={styles["block-buttons"]}>
          <CustomButton onClick={() => setState("answer1")}>
            В такой красоте перед вами мое сердце просит меня окунуться в
            приключение, поклониться вашему величию и предложить вам прогуляться
            вдоль канала.
          </CustomButton>
          <CustomButton onClick={() => setState("answer1")}>
            Ma chérie, мое самое авантюрное желание - искупаться в лучах
            золотого солнца вашего обаяния и красоты.Так возьмите меня под руку
            и пройдемте за мной.
          </CustomButton>
          <CustomButton onClick={() => setState("answer1")}>
            Мне пришло письмо из рая и сказали, что пропал самый красивый ангел.
            Но я Вас не сдал! В благодарность, может, составите компанию?
          </CustomButton>
        </div>
      </div>
    ),
  },
  {
    state: "answer1",
    moveScreen: true,
    data: (
      <div className={styles["answer"]} onClick={() => setState("block2")}>
        <AnswerButton>
          О, юноша, повседневность моего танца и скитания по сценам отнимает у
          меня время и силы. Вы были на каждом моем поступлении, окутывая меня
          своим восхищением, но я не могу принять ваше любезное предложение о
          прогулке.
        </AnswerButton>
      </div>
    ),
  },
  {
    state: "block2",
    data: (
      <div className={styles["block"]}>
        <div className={styles["block-buttons"]}>
          <CustomButton onClick={() => setState("answer2")}>
            Ваше искусство наполняет мою душу радостью и вдохновением. Позвольте
            мне помочь вам отдохнуть от блеска сцены и насладиться прекрасными
            видами города. Прогулка позволит вам отвлечься от трудов и
            насладиться спокойствием и красотой мира вокруг нас.
          </CustomButton>
          <CustomButton onClick={() => setState("answer2")}>
            Моя Госпожа, Ваша грация и красота овладели моим разумом и сердцем.
            Но я жажду встретить Вас вне танца.
          </CustomButton>
          <CustomButton onClick={() => setState("answer2")}>
            Я ради Вас готов сам станцевать, ну же, станцуем этот танец жизни
            вместе?
          </CustomButton>
        </div>
      </div>
    ),
  },
  {
    state: "answer2",
    moveScreen: true,
    data: (
      <div className={styles["answer"]} onClick={() => setState("block3")}>
        <AnswerButton>
          Благодарю вас за ваше внимание, но для меня танец &mdash; мое
          призвание и непреложная часть моего существования. Я не могу
          допустить, чтобы что-то отвлекло меня от своей цели и посвятить время
          романтическим свиданиям. Прошу вас понять и принять моё решение.
        </AnswerButton>
      </div>
    ),
  },
  {
    state: "block3",
    data: (
      <div className={styles["block"]}>
        <div className={styles["block-buttons"]}>
          <CustomButton onClick={() => setState("answer31")}>
            Ваша страсть к танцу поистине великолепна. Я уважаю ваше решение и
            преданность искусству. И я готов взять всю ответственность за Вас,
            поверьте, со мной вы приобретите защиту и тепло.
          </CustomButton>
          <CustomButton onClick={() => setState("answer32")}>
            Вы не видите, что я могу дать вам вселенскую любовь. Танец - всего
            лишь временное искусство, а я превращу вашу жизнь в вечную радость и
            блаженство.
          </CustomButton>
          <CustomButton onClick={() => setState("answer33")}>
            Танечка, ну не ломайтесь! Если вы к моей несчастной доле хоть каплю
            жалости храните, не оставьте же меня!
          </CustomButton>
        </div>
      </div>
    ),
  },
  {
    state: "answer31",
    moveScreen: true,
    data: (
      <div
        className={styles["answer"]}
        onClick={() => setState("success-finish")}
      >
        <AnswerButton>
          Вы так мило настойчивы, юноша. Ваше внимание и преданность меня
          трогают. Я согласна предоставить вам эту честь и насладиться вашей
          компанией.
        </AnswerButton>
      </div>
    ),
  },
  {
    state: "success-finish",
    moveScreen: true,
    data: (
      <div className={styles["screen-centered"]} onClick={() => ctx(true)}>
        <DecoratedBox>
          <div
            className={styles["box-content"]}
            style={{
              padding: "1rem",
            }}
          >
            <p>Поздравляем, вы справились!</p>
          </div>
        </DecoratedBox>
      </div>
    ),
  },
  {
    state: "answer32",
    moveScreen: true,
    data: (
      <div className={styles["answer"]} onClick={() => setState("bad-finish")}>
        <AnswerButton>
          Ваши слова и поведение свидетельствуют о неуважении к моему искусству
          и личным предпочтениям. Более не смейте ко мне подходить!
        </AnswerButton>
      </div>
    ),
  },
  {
    state: "answer33",
    moveScreen: true,
    data: (
      <div className={styles["answer"]} onClick={() => setState("bad-finish")}>
        <AnswerButton>
          О какой романтике Вы говорите, если неправильно называете моё имя…
        </AnswerButton>
      </div>
    ),
  },
  {
    state: "bad-finish",
    moveScreen: true,
    data: (
      <div className={styles["screen-centered"]}>
        <DecoratedBox>
          <div className={styles["box-content"]}>
            <img
              src={failImg}
              alt=""
              style={{
                alignSelf: "center",
                width: "80%",
              }}
            />
            <p>
              К несчастью, Ивану отказали. Попробуйте снова, пока Иван не успел
              спрыгнуть с моста!
            </p>
            <CustomButton
              style={{
                alignSelf: "center",
              }}
              onClick={() => setState("block3")}
            >
              Ещё раз!
            </CustomButton>
          </div>
        </DecoratedBox>
      </div>
    ),
  },
];

function Content() {
  const qCtx = useContext(QuestionLayoutContext);
  const [state, setState] = useState("intro1");
  const element = dataGen(qCtx, state, setState).find((e) => e.state == state);
  const b = !!element.moveScreen;

  return (
    <div
      className={`${styles["content-wrapper"]} ${
        b ? styles["move-screen"] : ""
      }`}
    >
      {element.data}
    </div>
  );
}

function Question9() {
  const ctx = useContext(CardModalContext);
  return (
    <Card
      front={
        <>
          <Content />
          <div
            className={styles["close-button"]}
            onClick={ctx.closeModal}
          ></div>
        </>
      }
    />
  );
}

export default Question9;
