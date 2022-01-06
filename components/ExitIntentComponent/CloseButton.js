import styles from "../../styles/ExitIntentComponent/ExitInentPopup.module.scss";


export const CloseButton = ({t, closeHandler}) => {


  return (
    <div className={styles.closeButtonContainer}>
      <button onClick={(e) => closeHandler(e)}>
        <span className={styles.closeOne}></span>
        <span className={styles.closeTwo}></span>
      </button>
    </div>
  )
}