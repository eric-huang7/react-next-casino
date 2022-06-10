import styles from "../../styles/ForgotPassword/ForgotPassword.module.scss";


export const HeadingBlock = ({t, closeForgotPasswordHandler, whatDoBackButton, text }) => {

  return (
    <div className={styles.blockHeading}>
      {
        whatDoBackButton
          ?
          <button
            className={styles.backButton}
            onClick={() => whatDoBackButton()}
          >
          </button>
          :
          <div className={styles.emptyBlock}>

          </div>
      }

      <h3 className={`${styles.heading} ${isShowBackButton ? '' : styles.smallHeading}`}>{t(text)}</h3>
      <button
        onClick={() => closeForgotPasswordHandler()}
        className={styles.closeButton}
      >
        <span className={styles.closeOne}></span>
        <span className={styles.closeTwo}></span>
      </button>
    </div>
  )
}
