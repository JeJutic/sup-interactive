import { useState, useContext } from "react";

import styles from "./QuestionTextInput.module.css";

import Card from "lib/card/Card";
import QuestionBackCard from "./QuestionBackCard";
import QuestionCardLayout from "lib/card/QuestionCardLayout";
import ContentGridLayout from "lib/card/ContentGridLayout";
import FancyHeader from "lib/FancyHeader";
import Button from "lib/Button";
import { CardModalContext } from "lib/card/CardModal";

function QuestionTextInput({
  title,
  children,
  rightAnswers,
  width,
  images,
  hint,
  info,
  showSecondRowImages = false,
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
        title={<FancyHeader className={styles["title"]} text={title} />}
        content={content}
      />
    </QuestionCardLayout>
  );

  return (
    <Card
      front={front}
      back={
        <QuestionBackCard
          info={info}
          showSecondRowImages={showSecondRowImages}
          images={images}
          answerState={answerState}
          title={title}
        />
      }
    />
  );
}

export default QuestionTextInput;
