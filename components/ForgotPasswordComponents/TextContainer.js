import styles from "../../styles/ForgotPassword/ForgotPassword.module.scss";


export const TextContainer = ({t}) => {


  return (
    <>
      <p className={styles.instructionsText}>
        Fill in your e-mail address and we will
        send you instructions on how to reset
        your password via e-mail.
      </p>
      <p className={styles.supportText}>
        Contact us via <span className={styles.supportLink}>Support</span> if you need further help.
      </p>
    </>
  )
}