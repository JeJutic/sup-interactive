import { useState, useEffect, useContext, createContext } from "react";

import styles from "./QuestionLayout.module.css";

import Card from "lib/card/Card";
import QuestionBackCard from "./QuestionBackCard";
import QuestionCardLayout from "lib/card/QuestionCardLayout";
import ContentGridLayout from "lib/card/ContentGridLayout";
import FancyHeader from "lib/FancyHeader";
import { CardModalContext } from "lib/card/CardModal";
import CardHint from "./CardHint";

export const QuestionLayoutContext = createContext(null);

export function QuestionLayout({
  title,
  id,
  children,
  images,
  hint,
  info,
  showSecondRowImages = false,
}) {
  const alreadySolved = !!localStorage.getItem(id);
  const ctx = useContext(CardModalContext);

  useEffect(() => {
    if (alreadySolved) {
      ctx.flip(false);
    }
  }, []);

  const [answerState, setAnswerState] = useState(alreadySolved);

  const checkAnswerOnClick = (good) => {
    console.log(good);
    if (good) {
      localStorage.setItem(id, true);
      setAnswerState(true);
    }
    ctx.flip();
  };

  const front = (
    <QuestionCardLayout>
      <ContentGridLayout
        title={
          <div className={styles["heading"]}>
            <FancyHeader className={styles["title"]} text={title} />
            <CardHint hint={hint} />
          </div>
        }
        content={children}
      />
    </QuestionCardLayout>
  );

  return (
    <QuestionLayoutContext.Provider value={checkAnswerOnClick}>
      <Card
        front={front}
        back={
          <QuestionBackCard
            info={info}
            showSecondRowImages={showSecondRowImages}
            images={images}
            answerState={answerState}
            title={title}
          />
        }
      />
    </QuestionLayoutContext.Provider>
  );
}

export default QuestionLayout;
