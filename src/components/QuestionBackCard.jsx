import { useContext } from "react";

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
      <div className={styles["sidebar-extra-images"]}>{images[1]}</div>
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
    <div className={styles["content"]} onClick={ctx.flip}>
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
        {images[1]}
      </div>
      <Button onClick={ctx.closeModal}>Дальше</Button>
      <div className={styles["footer"]}></div>
    </div>
  );

  return (
    <QuestionCardLayout>
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
            "min-height": "200px",
          },
          content: {
            "min-height": "200px",
          },
        }}
      />
    </QuestionCardLayout>
  );
}

export default QuestionBackCard;