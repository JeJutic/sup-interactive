import QuestionChoice from "./QuestionChoice";
import { QuestionLayoutContext } from "./QuestionLayout";
import Button from "lib/Button";
import styles from "./Question1.module.css";
import { useContext } from "react";

function Question12() {
  const options = [
    ["17 836 000", true],
    ["25 480 000", false],
    ["16 380 000", false],
    ["20 020 000", false],
  ];
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
        В конце 19 века на возведение этого моста потратили 3500 рублей.
        Посчитайте стоимость строительства моста на современные деньги, если 1
        рубль 1890-ых годов = 104 поездкам в метро Санкт-Петербурга по карте
        подорожник. Выберите верный вариант:
      </p>
      <div className={styles["buttons"]}>
        {options.map((content, idx) => {
          return (
            <Button key={idx} onClick={choice.onClick(idx)}>
              {content[0]}
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

export default Question12;
