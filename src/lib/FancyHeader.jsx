import styles from "./FancyHeader.module.css";

function FancyHeader({ text, className = "" }) {
  return <h1 className={`${styles.header} ${className}`}>{text}</h1>;
}

export default FancyHeader;
