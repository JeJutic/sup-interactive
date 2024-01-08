import CardLayout from "./CardLayout";
import styles from "./QuestionCardLayout.module.css";
import { CardModalContext } from "./CardModal";
import { useContext } from "react";

function QuestionCardLayout({ children, onClick }) {
  const ctx = useContext(CardModalContext);

  const closeButton = (
    <div className={styles["close-button"]} onClick={ctx.closeModal}></div>
  );

  return (
    <CardLayout extra={closeButton} onClick={onClick}>
      {children}
    </CardLayout>
  );
}

export default QuestionCardLayout;
