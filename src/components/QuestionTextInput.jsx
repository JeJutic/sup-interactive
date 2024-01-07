import { useState, useContext } from "react";

import styles from "./QuestionTextInput.module.css";

import Button from "lib/Button";
import { CardModalContext } from "lib/card/CardModal";
import QuestionLayout from "./QuestionLayout";

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

  const ctx = useContext(CardModalContext);

  const checkAnswer = () => {
    const good = rightAnswers.includes(answerValue);

    if (good) {
      localStorage.setItem(id, true);
      setAnswerState(true);
    }
    ctx.flip();
  };

  return (
    <QuestionLayout
      title={title}
      id={id}
      answerState={answerState}
      images={images}
      hint={hint}
      info={info}
      showSecondRowImages={showSecondRowImages}
    >
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
    </QuestionLayout>
  );
}

export default QuestionTextInput;
