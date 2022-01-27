import styles from "../../styles/ForgotPassword/ForgotPassword.module.scss";


export const HeadingBlock = ({t, closeForgotPasswordHandler, whatDoBackButton, text}) => {

  return (
    <div className={styles.blockHeading}>
      <button
        className={styles.backButton}
        onClick={() => whatDoBackButton()}
      >
      </button>
      <h3 className={styles.heading}>{t(text)}</h3>
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