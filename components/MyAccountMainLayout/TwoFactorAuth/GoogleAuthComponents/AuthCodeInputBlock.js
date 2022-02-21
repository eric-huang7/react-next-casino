import styles from '../../../../styles/MyAccount/UserInfoPage/TwoFactorAuthPage.module.scss'

export const AuthCodeInputBlock = ({
  t,
  confirmButtonClickHandler,
  googleKEyInputHandler,
  googleKeyValue,
  googleAuthError
}) => {

  return (
    <div className={styles.authKeyInputBlock}>
      <p
        className={styles.keyInputHeading}>{t('myAccount.twoFactorAuthPage.twoFaNOTCompleteContainer.codeInputBlock.textOne')}</p>
      <p
        className={styles.enterKeyText}>{t('myAccount.twoFactorAuthPage.twoFaNOTCompleteContainer.codeInputBlock.textTwo')}</p>
      <p className={styles.errorMessage}>{googleAuthError}</p>
      <form onSubmit={(e) => confirmButtonClickHandler(e)}>
        <div className={styles.inputsBlock}>
          <input onChange={(e) => googleKEyInputHandler(e.target.value)} value={googleKeyValue} type="text"
                 className={styles.inputCode}/>
          <button type={'submit'} onClick={(e) => confirmButtonClickHandler(e)} className={styles.confirmButton}>
            {t('myAccount.twoFactorAuthPage.twoFaNOTCompleteContainer.codeInputBlock.confirmButton')}
          </button>
        </div>
      </form>
    </div>
  )
}