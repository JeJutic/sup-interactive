import { cloneElement, useContext } from "react";

import styles from "./QuestionBackCard.module.css";

import QuestionCardLayout from "lib/card/QuestionCardLayout";
import ContentGridLayout from "lib/card/ContentGridLayout";
import FancyHeader from "lib/FancyHeader";
import Button from "lib/Button";
import { CardModalContext } from "lib/card/CardModal";

function sidebar(images) {
  return (
    <div className={styles["sidebar"]}>
      <div>{images[0]}</div>
      <div className={styles["sidebar-extra-images"]}>
        {images[1].map((e, idx) => cloneElement(e, { key: idx }))}
      </div>
    </div>
  );
}

function QuestionBackCard({
  info,
  showSecondRowImages,
  images,
  answerState,
  title,
}) {
  const ctx = useContext(CardModalContext);

  const wrongAnswerBackContent = (
    <div className={styles["content"]}>
      Неверно! Попробуйте ещё раз или воспользуйтесь подсказкой!
    </div>
  );

  const goodAnswerBackContent = (
    <div className={styles["content"]}>
      <h2 className={styles["good-subheading"]}>Кстати!</h2>
      <div className={styles["content-info"]}>{info}</div>
      <div
        className={styles["sidebar-extra-images"]}
        style={
          showSecondRowImages ? { marginBottom: "1rem" } : { display: "none" }
        }
      >
        {images[1].map((e, idx) => cloneElement(e, { key: idx }))}
      </div>
      <Button onClick={ctx.closeModal}>Дальше</Button>
      <div className={styles["footer"]}></div>
    </div>
  );

  return (
    <QuestionCardLayout onClick={answerState ? undefined : ctx.flip}>
      <ContentGridLayout
        title={
          <FancyHeader
            className={styles["title"]}
            text={answerState ? "Верно!" : title}
          />
        }
        content={answerState ? goodAnswerBackContent : wrongAnswerBackContent}
        sidebar={answerState ? sidebar(images) : undefined}
        customStyles={{
          sidebar: {
            minHeight: "200px",
          },
          content: {
            minHeight: "200px",
          },
        }}
      />
    </QuestionCardLayout>
  );
}

export default QuestionBackCard;
