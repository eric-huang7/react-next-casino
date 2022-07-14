import styles from "../../styles/ForgotPassword/ForgotPassword.module.scss";

export const ResetPasswordButton = ({text, whichForm}) => (
  <button
    className={styles.resetPasswordButton}
    type={"submit"}
    form={whichForm}
  >
    {text}
  </button>
)
