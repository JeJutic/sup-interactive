import img1 from "img/questions/03/q1.jpg";
import img2 from "img/questions/03/q2.jpg";
import img3 from "img/questions/03/q3.jpg";
import img4 from "img/questions/03/q4.jpg";

import styles from "./Question3.module.css";
import commonStyles from "lib/commons.module.css";

function Question3() {
  return (
    <>
      <p className={commonStyles["shrinked-paragraph"]}>
        Аничков мост знаменит своей скульптурным ансамблем “Покорение коня
        человеком” из четырех коней — работа П.К. Клодта. Чтобы понять задумку
        автора, нужно рассматривать монументы в определенном порядке. Посмотрите
        на фото скульптур и расположите их в правильной последовательности.
      </p>
      <div className={styles["images-block"]}>
        <div className={styles["images-block2"]}>
          <div className={styles["image-block"]}>
            <div>1</div>
            <img src={img1} alt="" />
          </div>
          <div className={styles["image-block"]}>
            <div>2</div>
            <img src={img2} alt="" />
          </div>
        </div>
        <div className={styles["images-block2"]}>
          <div className={styles["image-block"]}>
            <div>3</div>
            <img src={img3} alt="" />
          </div>
          <div className={styles["image-block"]}>
            <div>4</div>
            <img src={img4} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Question3;
