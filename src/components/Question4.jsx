import QuestionChoice from "./QuestionChoice";
import { QuestionLayoutContext } from "./QuestionLayout";
import Button from "lib/Button";
import styles from "./Question4.module.css";
import { useContext } from "react";

import img0 from "img/questions/04/q0.jpg";
import img1 from "img/questions/04/q1.jpg";
import img2 from "img/questions/04/q2.jpg";
import img3 from "img/questions/04/q3.jpg";
import img4 from "img/questions/04/q4.jpg";
import img5 from "img/questions/04/q5.jpg";
import img6 from "img/questions/04/q6.jpg";

function Question4() {
  const good = [false, true, true, false, true, false];
  const choice = QuestionChoice(new Array(6), styles["toggled"], true);
  const ctx = useContext(QuestionLayoutContext);

  const cmp = (lhs, rhs) => {
    if (lhs.length != rhs.length) {
      return false;
    }

    for (var i = 0; i < lhs.length; i++) {
      if (lhs[i] != rhs[i]) {
        return false;
      }
    }
    return true;
  };

  return (
    <div className={styles["content-wrapper"]}>
      <div className={styles["content"]}>
        <p>
          На мосту расположены уникальные шестигранные фонари с миниатюрными
          скульптурами в виде мифических существ (проект архитектора И. А.
          Фомина). Каких животных соединяют в себе эти скульптуры на фонарях?
          Выберите несколько вариантов из предложенных картинок:
        </p>
        <img src={img0} alt="" />
      </div>
      <div className={styles["buttons"]}>
        <div className={styles["images-block"]}>
          <div className={styles["images-block2"]}>
            <Button
              className={styles["image-block"]}
              onClick={choice.onClick(0)}
            >
              <img src={img1} alt="" />
            </Button>
            <Button
              className={styles["image-block"]}
              onClick={choice.onClick(1)}
            >
              <img src={img2} alt="" />
            </Button>
            <Button
              className={styles["image-block"]}
              onClick={choice.onClick(2)}
            >
              <img src={img3} alt="" />
            </Button>
          </div>
          <div className={styles["images-block2"]}>
            <Button
              className={styles["image-block"]}
              onClick={choice.onClick(3)}
            >
              <img src={img4} alt="" />
            </Button>
            <Button
              className={styles["image-block"]}
              onClick={choice.onClick(4)}
            >
              <img src={img5} alt="" />
            </Button>
            <Button
              className={styles["image-block"]}
              onClick={choice.onClick(5)}
            >
              <img src={img6} alt="" />
            </Button>
          </div>
        </div>
      </div>
      <Button
        className={styles["submit-button"]}
        onClick={() => ctx(cmp(choice.checked, good))}
      >
        Отправить
      </Button>
    </div>
  );
}

export default Question4;
