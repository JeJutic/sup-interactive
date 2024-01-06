import styles from "./WelcomeScreen.module.css";
import CardModal from "../lib/card/CardModal";
import { useState } from "react";
import Card from "../lib/card/Card";
import CardLayout from "lib/card/CardLayout";
import FancyHeader from "../lib/FancyHeader";
import Button from "../lib/Button";

function WelcomeScreen() {
  const [showModal, setShowModal] = useState(true);

  const content = (
    <div className={styles.content}>
      <div className={styles.header}>
        <div className={styles.title}>
          <FancyHeader text={"ФОНТАНКА SUP"} />
        </div>
        <div className={styles.subheading}>XI ФЕСТИВАЛЬ САПСЁРФИНГА</div>
      </div>

      <div className={styles.description}>
        Пройдите квест по маршруту гонки “Фонтанка SUP” и узнайте всё самое
        интересное, связанное с мостами на пути.
      </div>
      <Button onClick={() => setShowModal(false)}>Поплыли</Button>
    </div>
  );

  return (
    <CardModal
      showModal={showModal}
      setShowModal={setShowModal}
      disableAnimationOnEnter={true}
    >
      <Card front={<CardLayout>{content}</CardLayout>} opacity={0.9} />
    </CardModal>
  );
}

export default WelcomeScreen;
