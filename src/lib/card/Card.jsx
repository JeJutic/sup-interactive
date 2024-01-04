import styles from "./Card.module.css";

function Card({ front, back, opacity = 1 }) {
  return (
    <div className={styles.card} style={{ opacity: opacity }}>
      <div className={styles["card-front"]}>{front}</div>
      {!!back && <div className={styles["card-back"]}>{back}</div>}
    </div>
  );
}

export default Card;
