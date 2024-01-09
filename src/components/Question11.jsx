import QuestionChoice from "./QuestionChoice";
import { QuestionLayoutContext } from "./QuestionLayout";
import Button from "lib/Button";
import styles from "./Question11.module.css";
import { useState, useContext } from "react";

function Question11() {
  const handleMouseIn = () => {
    console.log("in");
  };

  const handleMouseOut = () => {
    console.log("out");
  };

  const options = [
    [["мужа", "Москве", "обеспечивать", "открыть бизнес"], false],
    [["мужчину", "Сочи", "катать на своей яхте", "переехать в Москву"], false],
    [["парня", "Брянске", "поддерживать", "сдать экзамены"], true],
  ];

  const defaultFillState = ["", "", "", ""];
  const [fillState, setFillState] = useState(defaultFillState);

  const choice = QuestionChoice(
    options.map((x) => x[0]),
    styles["toggled"],
    false,
  );
  const ctx = useContext(QuestionLayoutContext);

  const cmp = (lhs, rhs) => {
    if (lhs.length != rhs.length) {
      return false;
    }
    console.log(lhs, rhs);
    for (var i = 0; i < lhs.length; i++) {
      if (lhs[i] != rhs[i]) {
        return false;
      }
    }
    return true;
  };

  return (
    <div className={styles["content-wrapper"]}>
      <p>
        Грифоны с позолоченными крыльями на Банковском мосту знамениты своей
        магической силой исполнения желаний и улучшения финансового
        благополучия. Так во время реставрации скульптур внутри фигур было
        найдено множество записок с пожеланиями. Попробуйте догадаться, какие
        слова должны стоять на месте пропусков в следующей записке:
      </p>
      <p>
        «Найти себе <span className={styles["filled"]}>{fillState[0]}</span> в{" "}
        <span className={styles["filled"]}>{fillState[1]}</span>, который будет{" "}
        <span className={styles["filled"]}>{fillState[2]}</span>, не даст упасть
        духом, впасть в зимнюю депрессию и поможет{" "}
        <span className={styles["filled"]}>{fillState[3]}</span>».
      </p>
      <div className={styles["buttons"]}>
        {options.map((content, idx) => {
          return (
            <Button
              key={idx}
              onClick={choice.onClick(idx)}
              onMouseOver={() => setFillState(options[idx][0])}
              onMouseOut={() =>
                choice.checked.every((x) => x === false) &&
                setFillState(defaultFillState)
              }
            >
              {content[0].join(", ")}
            </Button>
          );
        })}
      </div>
      <Button
        className={styles["submit-button"]}
        onClick={() =>
          ctx(
            cmp(
              choice.checked,
              options.map((x) => x[1]),
            ),
          )
        }
      >
        Отправить
      </Button>
    </div>
  );
}

export default Question11;
