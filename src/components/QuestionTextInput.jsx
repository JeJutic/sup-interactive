import { useState, useContext } from "react";

import styles from "./QuestionTextInput.module.css";

import Button from "lib/Button";
import { QuestionLayoutContext } from "./QuestionLayout";

function QuestionTextInput({ children, rightAnswers }) {
  const [answerValue, setAnswerValue] = useState("");
  const qCtx = useContext(QuestionLayoutContext);

  return (
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
        <Button onClick={() => qCtx(rightAnswers.includes(answerValue.trim()))}>
          Отправить
        </Button>
      </div>
    </div>
  );
}

export default QuestionTextInput;
