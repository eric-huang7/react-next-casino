import styles from "../../../styles/GamePage/GamePage.module.scss";


export const MinimizedControlPanel = () => {

  return (
    <div className={styles.minimizedControlPanel}>
      <p>Game Name</p>
      <button className={styles.closeButton}></button>
    </div>
  )
}