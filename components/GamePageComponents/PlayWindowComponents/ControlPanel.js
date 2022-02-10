import styles from "../../../styles/GamePage/GamePage.module.scss";



export const ControlPanel = ({fullscreenClickHandler, closeGameHandler, minimizedHandler}) => {



  return (
    <div className={styles.controlPanel}>
      <button
        onClick={() => closeGameHandler()}
        className={styles.close}
      />
      <button
        onClick={() => fullscreenClickHandler()}
        className={styles.fullScreen}
      />
      <button
        onClick={() => minimizedHandler()}
        className={styles.minimize}
      >
        <span></span>
      </button>
    </div>
  )
}