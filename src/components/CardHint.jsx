import Button from "lib/Button";
import styles from "./CardHint.module.css";

function CardHint({ hint }) {
  return <Button className={styles["hint-button"]}>?</Button>;
}

export default CardHint;
