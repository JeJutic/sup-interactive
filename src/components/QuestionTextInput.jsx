import { useState, useEffect, useContext } from "react";

import styles from "./QuestionTextInput.module.css";

import Card from "lib/card/Card";
import QuestionBackCard from "./QuestionBackCard";
import QuestionCardLayout from "lib/card/QuestionCardLayout";
import ContentGridLayout from "lib/card/ContentGridLayout";
import FancyHeader from "lib/FancyHeader";
import Button from "lib/Button";
import { CardModalContext } from "lib/card/CardModal";
import CardHint from "./CardHint";

function QuestionTextInput({
  title,
  id,
  children,
  rightAnswers,
  images,
  hint,
  info,
  showSecondRowImages = false,
}) {
  const alreadySolved = !!localStorage.getItem(id);
  const [answerState, setAnswerState] = useState(alreadySolved);
  const [answerValue, setAnswerValue] = useState("");

  useEffect(() => {
    if (answerState) {
      localStorage.setItem(id, true);
      ctx.flip(!alreadySolved);
    }
  }, [answerState]);

  const ctx = useContext(CardModalContext);

  const checkAnswer = () => {
    const good = rightAnswers.includes(answerValue);
    setAnswerState(good);
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
        title={
          <div className={styles["heading"]}>
            <FancyHeader className={styles["title"]} text={title} />
            <CardHint hint={hint} />
          </div>
        }
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
