import Button from "lib/Button";
import styles from "./CardHint.module.css";
import { useState, Fragment } from "react";
import Modal from "react-overlays/Modal";

function CardHint({ hint }) {
  const [showHint, setShowHint] = useState(false);
  console.log(Modal);
  return (
    <>
      <Button
        onClick={() => setShowHint(true)}
        className={styles["hint-button"]}
      >
        ?
      </Button>
      <Modal
        className={styles["modal"]}
        show={showHint}
        onHide={() => setShowHint(false)}
      >
        <Fragment>
          <div className={styles["modal-content"]}>
            <h3>Подсказка</h3>
            <div className={styles["modal-content-hint"]}>{hint}</div>
          </div>
          <Button
            onClick={() => setShowHint(false)}
            className={styles["modal-close"]}
          >
            &#215;
          </Button>
        </Fragment>
      </Modal>
    </>
  );
}

export default CardHint;
