import QuestionChoice from "./QuestionChoice";
import { QuestionLayoutContext } from "./QuestionLayout";
import Button from "lib/Button";
import styles from "./Question6.module.css";
import { useContext } from "react";

function Question6() {
  const options = [
    [
      "Солдат Данила",
      false,
      [
        "180 см",
        "25 лет",
        "дед Петра служил в гвардии Преображенского полка",
        "замечен в компании соратников Емельяна Пугачева",
      ],
    ],
    [
      "Солдат Александр",
      false,
      [
        "169 см",
        "21 год",
        "отец Александра — генерал-майор",
        "обучался в гарнизонной школе, но завалил почти все экзамены",
      ],
    ],
    [
      "Солдат Кондратий",
      true,
      [
        "178 см",
        "24 года",
        "никого в роду с чином выше полковника нет",
        "отличился на фронте русско-турецкой войны 1768—1774 гг.",
      ],
    ],
  ];

  const choice = QuestionChoice(
    options.map((x) => x[1]),
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
        Этот мост назван в честь Измайловского гвардейского полка. Известно, что
        солдаты проходили строжайший отбор по множеству критериев: рост,
        возраст, физические данные, социальный статус, образование, политические
        взгляды, внешность и т.д. Предположите,чего именно ожидали от кандидатов
        и выберите наилучшего солдата из четырех предложенных:
      </p>
      <div className={styles["buttons"]}>
        {options.map((content, idx) => {
          return (
            <div className={styles["option"]}>
              <Button key={idx} onClick={choice.onClick(idx)}>
                {content[0]}
              </Button>
              <ol>
                {content[2].map((text, idx) => {
                  return <li key={idx}>{text}</li>;
                })}
              </ol>
            </div>
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

export default Question6;
