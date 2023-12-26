import styles from "./Button.module.css";

function Button({ children, ...props }) {
    return (
        <div className={styles.button} {...props}>
            {children}
        </div>
    )
}

export default Button;