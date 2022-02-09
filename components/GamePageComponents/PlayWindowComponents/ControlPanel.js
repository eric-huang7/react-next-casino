import styles from "../../../styles/GamePage/GamePage.module.scss";



export const ControlPanel = ({setIsFullScreen, closeGameHandler, minimizedHandler}) => {


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
        onClick={() => minimizedHandler()}
        className={styles.minimize}
      >
        <span></span>
      </button>
    </div>
  )
}