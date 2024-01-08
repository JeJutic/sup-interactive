import { useState, useRef } from "react";

function QuestionChoice(options, toggleClassName = null, multiChoice = false) {
  const [checked, setChecked] = useState(new Array(options.length).fill(false));
  const targetsRef = useRef(new Map());

  const onClick = (idx) => (e) => {
    const targets = targetsRef.current;
    setChecked(checked.map((b, i) => (i == idx ? !b : multiChoice && b)));

    if (toggleClassName) {
      e.target.classList.toggle(toggleClassName);
      if (!multiChoice) {
        for (const [_, t] of targets) {
          t.classList.remove(toggleClassName);
        }
        targets.clear();
      }
    }

    if (!checked[idx]) {
      targets.set(idx, e.target);
    } else {
      targets.delete(idx);
    }
  };

  return { onClick, checked };
}

export default QuestionChoice;
