import styles from "./FancyHeader.module.css";

function FancyHeader({ text }) {
    return (
        <h1 className={styles.header}>
            {text}
        </h1>
    )
}

export default FancyHeader;