import styles from "../../../styles/ForgotPassword/ForgotPassword.module.scss";


export const ResendButton = ({t, showResendContainerClickHandler}) => {


  return (
    <button onClick={() => showResendContainerClickHandler()} className={styles.resendButton}>
      {t('forgotPasswordForm.buttonsText.resendConfirmation')}
    </button>
  )
}