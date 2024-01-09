import Card from "lib/card/Card";

import styles from "./Question9.module.css";
import CardLayout from "lib/card/CardLayout";
import QuestionCardLayout from "lib/card/QuestionCardLayout";
import { useContext } from "react";
import { CardModalContext } from "lib/card/CardModal";

function Content() {
    return (
        <div className={styles["content-wrapper"]}>
            hi
        </div>
    )
}

function Question9() {
    const ctx = useContext(CardModalContext);
    return (<Card
        front={(
            <>
                <Content />
                <div className={styles["close-button"]} onClick={ctx.closeModal}></div>
            </>
        )}
    />)
}

export default Question9;