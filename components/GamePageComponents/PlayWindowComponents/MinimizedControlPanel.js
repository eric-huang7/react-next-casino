import styles from "../../../styles/GamePage/GamePage.module.scss";

export const MinimizedControlPanel = ({closeGameHandler, gameInfo}) => (
  <div className={styles.minimizedControlPanel}>
    <p>{`${gameInfo.gameName}`}</p>
    <button
      onClick={() => closeGameHandler()}
      className={styles.closeButton}
    />
  </div>
)
