import styles from "../../../styles/ForgotPassword/ForgotPassword.module.scss";


export const TextContainer = ({t}) => {

  const liveChatClick = () => {

    const liveChatButton = document.getElementById('lhc_status_widget_v2').contentWindow.document.body.childNodes[0];
    liveChatButton.click();
  }

  return (
    <>
      <p className={styles.instructionsText}>
        {t('forgotPasswordForm.textBlocks.instructionsText')}
      </p>
      <p className={styles.supportText}>
        <span>
          {t('forgotPasswordForm.textBlocks.supportText.firstPart')}
        </span>
        <span
          className={styles.supportLink}
          onClick={() => liveChatClick()}
        >
          {` ${t('forgotPasswordForm.textBlocks.supportText.support')} ` }
        </span>
        <span>
          {t('forgotPasswordForm.textBlocks.supportText.secondPart')}
        </span>
      </p>
    </>
  )
}