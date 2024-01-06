import { useState, useContext } from "react";

import styles from "./QuestionTextInput.module.css";

import Card from "lib/card/Card";
import QuestionCardLayout from "lib/card/QuestionCardLayout";
import ContentGridLayout from "lib/card/ContentGridLayout";
import FancyHeader from "lib/FancyHeader";
import Button from "lib/Button";
import { CardModalContext } from "lib/card/CardModal";

function sidebar(images) {
  return (
    <div className={styles["sidebar"]}>
      <div>
        <img alt="" src={images[0]} className={styles["sidebar-image"]} />
      </div>
      <div className={styles["sidebar-extra-images"]}>
        {(images[1] || []).map((i) => (
          <img alt="" src={i} className={styles["sidebar-image"]} />
        ))}
      </div>
    </div>
  );
}

function QuestionTextInput({
  title,
  children,
  rightAnswers,
  width,
  images,
  hint,
  info,
}) {
  const [answerState, setAnswerState] = useState(false);
  const [answerValue, setAnswerValue] = useState("");

  const ctx = useContext(CardModalContext);

  const checkAnswer = () => {
    setAnswerState(rightAnswers.includes(answerValue));
    ctx.flip();
  };

  const content = (
    <div className={styles["content-wrapper"]}>
      {children}
      <div className={styles["form"]}>
        <input
          className={styles["input"]}
          placeholder="Введите ответ"
          type="text"
          value={answerValue}
          onChange={(e) => setAnswerValue(e.target.value)}
        />
        <Button onClick={checkAnswer}>Отправить</Button>
      </div>
    </div>
  );

  const front = (
    <QuestionCardLayout>
      <ContentGridLayout
        title={<FancyHeader text={title} />}
        content={content}
      />
    </QuestionCardLayout>
  );

  const wrongAnswerBackContent = (
    <div className={styles["content"]} onClick={ctx.flip}>
      Неверно! Попробуйте ещё раз или воспользуйтесь подсказкой!
    </div>
  );

  const goodAnswerBackContent = (
    <div className={styles["content"]}>
      <h2 className={styles["good-subheading"]}>Кстати!</h2>
      <div className={styles["content-info"]}>{info}</div>
      <Button onClick={ctx.closeModal}>Дальше</Button>
    </div>
  );

  const backCard = (
    <ContentGridLayout
      title={<FancyHeader text={answerState ? "Верно!" : title} />}
      content={answerState ? goodAnswerBackContent : wrongAnswerBackContent}
      sidebar={answerState ? sidebar(images) : undefined}
      customStyles={{
        sidebar: {
          "min-height": 0,
        },
      }}
    />
  );

  return (
    <Card
      front={front}
      back={<QuestionCardLayout>{backCard}</QuestionCardLayout>}
    />
  );
}

export default QuestionTextInput;
