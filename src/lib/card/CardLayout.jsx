import styles from "./CardLayout.module.css";

import bottomImg from "img/bottomImg.svg";

function CardLayout({ children }) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles['inner-content']}>
                    {children}
                </div>
            </div>
            <div className={styles['bottom-img-wrapper']}>
                <img className={styles['bottom-img']} src={bottomImg} alt="..." />
            </div>
        </div>
    )
}

export default CardLayout;