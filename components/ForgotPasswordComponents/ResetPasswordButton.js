import styles from "../../styles/ForgotPassword/ForgotPassword.module.scss";


export const ResetPasswordButton = ({t, text}) => {


  return (
    <button
      className={styles.resetPasswordButton}
      type={"submit"}
      form={'forgotPasswordForm'}
    >
      {t(text)}
    </button>
  )
}