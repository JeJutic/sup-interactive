import styles from "./WelcomeScreen.module.css";
import CardModal from "../lib/card/CardModal";
import { useState } from "react";
import Card from "../lib/card/Card";
import CardLayout from "lib/card/CardLayout";
import FancyHeader from "../lib/FancyHeader";
import Button from "../lib/Button";

function FinishScreen() {
  const [showModal, setShowModal] = useState(true);

  const content = (
    <div className={styles.content}>
      <div className={styles.header}>
        <div className={styles.subheading}>XI ФЕСТИВАЛЬ САПСЁРФИНГА</div>
        <div className={styles.title}>
          <FancyHeader text={"ФОНТАНКА SUP"} />
        </div>
      </div>
      <div className={styles.description}>
        Поздравляем, вы ответили на все вопросы!
      </div>
      <Button onClick={() => setShowModal(false)}>Вернуться на главную</Button>
    </div>
  );

  return (
    <CardModal showModal={showModal} setShowModal={setShowModal}>
      <Card front={<CardLayout>{content}</CardLayout>} opacity={0.9} />
    </CardModal>
  );
}

export default FinishScreen;
