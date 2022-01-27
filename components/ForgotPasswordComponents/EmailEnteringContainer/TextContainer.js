import styles from "../../../styles/ForgotPassword/ForgotPassword.module.scss";


export const TextContainer = ({t}) => {

  const liveChatClick = () => {

    const liveChatButton = document.getElementById('lhc_status_widget_v2').contentWindow.document.body.childNodes[0];
    liveChatButton.click();
  }

  return (
    <>
      <p className={styles.instructionsText}>
        Fill in your e-mail address and we will
        send you instructions on how to reset
        your password via e-mail.
      </p>
      <p className={styles.supportText}>
        Contact us via
        <span
          className={styles.supportLink}
          onClick={() => liveChatClick()}
        >
          {` ${'Support'} ` }
        </span>
        if you need further help.
      </p>
    </>
  )
}