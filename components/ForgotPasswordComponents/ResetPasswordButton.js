import styles from "../../styles/ForgotPassword/ForgotPassword.module.scss";


export const ResetPasswordButton = ({t, text, whichForm}) => {


  return (
    <button
      className={styles.resetPasswordButton}
      type={"submit"}
      form={whichForm}
    >
      {t(text)}
    </button>
  )
}