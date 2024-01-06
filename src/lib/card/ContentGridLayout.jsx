import styles from "./ContentGridLayout.module.css";

function ContentGridLayout({ title, content, sidebar, customStyles }) {
  return (
    <div className={styles.grid}>
      <div className={styles.title}>{title}</div>
      <div
        className={styles.sidebar}
        style={customStyles && customStyles.sidebar}
      >
        {sidebar}
      </div>
      <div className={styles.content}>{content}</div>
    </div>
  );
}

export default ContentGridLayout;
