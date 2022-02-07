import styles from "../../../styles/GamePage/GamePage.module.scss";
import Router, {useRouter} from "next/router";


export const ControlPanel = ({setIsFullScreen}) => {
  const router = useRouter();


  const minimizeHandler = () => {
    // Router.back()
    console.log('minimize');
  }
  const closeHandler = () => {

  }

  const fullScreenHandler = () => {
    setIsFullScreen((prevState) => !prevState);
  }

  return (
    <div className={styles.controlPanel}>
      <button
        onClick={() => closeHandler()}
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