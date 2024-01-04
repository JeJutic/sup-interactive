import styles from "./ContentGridLayout.module.css";

function ContentGridLayout({ title, content, sidebar }) {
  return (
    <div className={styles.grid}>
      <div className={styles.title}>{title}</div>
      <div className={styles.sidebar}>{sidebar}</div>
      <div className={styles.content}>{content}</div>
    </div>
  );
}

export default ContentGridLayout;
