import { useEffect, useContext } from "react";

import styles from "./QuestionLayout.module.css";

import Card from "lib/card/Card";
import QuestionBackCard from "./QuestionBackCard";
import QuestionCardLayout from "lib/card/QuestionCardLayout";
import ContentGridLayout from "lib/card/ContentGridLayout";
import FancyHeader from "lib/FancyHeader";
import { CardModalContext } from "lib/card/CardModal";
import CardHint from "./CardHint";

function QuestionLayout({
  title,
  id,
  children,
  answerState,
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
  );
}

export default QuestionLayout;
