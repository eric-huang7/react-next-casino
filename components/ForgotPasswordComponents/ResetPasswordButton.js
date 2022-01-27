import styles from "../../styles/ForgotPassword/ForgotPassword.module.scss";


export const ResetPasswordButton = ({t}) => {


  return (
    <button
      className={styles.resetPasswordButton}
      type={"submit"}
      form={'forgotPasswordForm'}
    >
      Reset password
    </button>
  )
}