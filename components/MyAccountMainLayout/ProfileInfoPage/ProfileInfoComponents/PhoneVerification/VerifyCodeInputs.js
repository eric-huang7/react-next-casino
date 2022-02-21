import styles from '../../../../../styles/MyAccount/UserInfoPage/PhoneVerification.module.scss'

export const VerifyCodeInputs = ({ t, verifyCodeInputHandler, verifyCode, sendVerifyCodeHandler }) => {

  return (
    <form onSubmit={(e) => sendVerifyCodeHandler(e)}>
      <div className={styles.codeInputWrapper}>
        <input
          type="text"
          onChange={(e) => verifyCodeInputHandler(e.target.value)}
          className={styles.verifyCodeInput}
          value={verifyCode}
        />
        <button
          onClick={(e) => sendVerifyCodeHandler(e)}
          className={styles.verifyCodeButton}
        >
          {t('myAccount.profilePage.phoneVerification.buttons.confirm')}
        </button>
      </div>
    </form>
  )
}