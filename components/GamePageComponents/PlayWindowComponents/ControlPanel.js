import styles from "../../../styles/GamePage/GamePage.module.scss";



export const ControlPanel = ({setIsFullScreen, closeGameHandler, setIsMinimized}) => {



  const minimizeHandler = () => {
    // Router.back()
    setIsMinimized(true);
  }

  const fullScreenHandler = () => {
    setIsFullScreen((prevState) => !prevState);
  }

  return (
    <div className={styles.controlPanel}>
      <button
        onClick={() => closeGameHandler()}
        className={styles.close}
      />
      <button
        onClick={() => fullScreenHandler()}
        className={styles.fullScreen}
      />
      <button
        onClick={() => minimizeHandler()}
        className={styles.minimize}
      >
        <span></span>
      </button>
    </div>
  )
}