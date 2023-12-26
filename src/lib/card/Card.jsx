import styles from "./Card.module.css";
import CardLayout from "./CardLayout";

function Card({
    front,
    back,
    opacity = 1
}) {
    return (
        <div className={styles.card} style={{ opacity: opacity }}>
            <div className={styles['card-front']}>
                <CardLayout>
                    {front}
                </CardLayout>
            </div>
            {!!back && 
            <div className={styles['card-back']}>
                <CardLayout>
                    {back}
                </CardLayout>
            </div>}
        </div>
    )
}

export default Card;