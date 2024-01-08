import styles from "./CardLayout.module.css";

import bottomImg from "img/bottomImg.svg";

function CardLayout({ extra, children, onClick }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content} onClick={onClick}>
        <div className={styles["inner-content"]}>{children}</div>
      </div>
      <div className={styles["bottom-img-wrapper"]} onClick={onClick}>
        <img className={styles["bottom-img"]} src={bottomImg} alt="..." />
      </div>
      {extra}
    </div>
  );
}

export default CardLayout;
