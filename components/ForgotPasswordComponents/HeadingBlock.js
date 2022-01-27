import styles from "../../styles/ForgotPassword/ForgotPassword.module.scss";


export const HeadingBlock = () => {

  return (
    <div className={styles.blockHeading}>
      <button className={styles.backButton}>
      </button>
      <h3 className={styles.heading}>Forgot password?</h3>
      <button className={styles.closeButton}>
        <span className={styles.closeOne}></span>
        <span className={styles.closeTwo}></span>
      </button>
    </div>
  )
}