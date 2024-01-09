import img from "img/questions/10/q1.jpg";

import styles from "./Question10.module.css";
import commonStyles from "lib/commons.module.css";

function Question10() {
  return (
    <div className={styles["content-wrapper"]}>
      <img className={styles["image"]} src={img} alt="Ф. М. Достоевский" />
      <div
        className={`${commonStyles["shrinked-paragraph"]} ${commonStyles["paragraph"]} ${styles["content"]}`}
      >
        <p>
          Кокушкин мост — один из самых «литературных» мостов Санкт-Петербурга.
          Посмотрите на картинку и попытайтесь догадаться, какие два
          прославленных автора упоминают этот мост в своих произведениях.
          (запишите ответ в виде: Иванов Петров)
        </p>
        <p>
          «Те, кто дожил до своих седых волос! <br />
          Те, кого мы обязаны уважать в пустыне! <br />
          Вот кто наши суровые знатоки и судьи!»
        </p>
      </div>
    </div>
  );
}

export default Question10;
