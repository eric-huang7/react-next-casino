import styles from "../../../styles/GamePage/GamePage.module.scss";


export const MinimizedControlPanel = ({closeGameHandler}) => {


  return (
    <div className={styles.minimizedControlPanel}>
      <p>Game Name</p>
      <button
        onClick={() => closeGameHandler()}
        className={styles.closeButton}
      />
    </div>
  )
}