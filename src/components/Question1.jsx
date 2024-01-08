import QuestionChoice from "./QuestionChoice";
import { QuestionLayoutContext } from "./QuestionLayout";
import Button from "lib/Button";
import styles from "./Question1.module.css";
import { useContext } from "react";

function Question1() {
  const options = [
    ["Зимний сад", false],
    ["Михайловский сквер", false],
    ["Марсово поле", true],
    ["Михайловский сад", true],
    ["Летний сад", true],
    ["Сквер у Инженерного Замка", true],
  ];
  const choice = QuestionChoice(
    options.map((x) => x[0]),
    styles["toggled"],
    true,
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
        Название моста связано с его местоположением: 1-й Садовый мост окружен
        зелеными насаждениями со всех четырех сторон. Выберите из списка
        названия этих насаждений:
      </p>
      <div className={styles["buttons"]}>
        {options.map((content, idx) => {
          return (
            <Button key={idx} onClick={choice.onClick(idx)}>
              {content}
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

export default Question1;
