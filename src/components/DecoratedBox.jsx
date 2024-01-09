import { useEffect, useRef, useState } from "react";
import styles from "./DecoratedBox.module.css";
import decorationSvg from "img/questions/09/decoration.svg";

function DecoratedBox({ children }) {
  const parentRef = useRef(null);
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  useEffect(() => {
    if (!parentRef.current) {
      return;
    }

    const resizeObserver = new ResizeObserver(() => {
      if (parentRef.current.offsetWidth !== width) {
        setWidth(parentRef.current.offsetWidth);
      }
      if (parentRef.current.offsetHeight !== height) {
        setHeight(parentRef.current.offsetHeight);
      }
    });

    resizeObserver.observe(parentRef.current);
    return () => resizeObserver.disconnect();
  }, [parentRef.current]);

  const margin = Math.min(Math.max(0.1 * Math.max(width, height), 40), 100);
  const imgSize = ((0.5 * margin) / 90) * 230;
  return (
    <div className={styles["box"]}>
      <div
        className={styles["phantom"]}
        style={{
          backgroundSize: imgSize,
        }}
      ></div>
      <div
        className={styles["phantom"]}
        style={{
          backgroundSize: imgSize,
          transform: "scaleY(-1)",
        }}
      ></div>
      <div
        className={styles["phantom"]}
        style={{
          backgroundSize: imgSize,
          transform: "scaleY(-1) scaleX(-1)",
        }}
      ></div>
      <div
        className={styles["phantom"]}
        style={{
          backgroundSize: imgSize,
          transform: "scaleX(-1)",
        }}
      ></div>
      <div
        className={styles["inner"]}
        style={{
          margin: margin,
        }}
        ref={parentRef}
      >
        {children}
      </div>
    </div>
  );
}

export default DecoratedBox;
