import styles from '../../../../styles/MyAccount/UserInfoPage/TwoFactorAuthPage.module.scss'

export const TwoFactorCompleteInputsBlock = ({
  t,
  deactivateButtonClickHandler,
  deactivateCodeValue,
  deactivateInputHandler,
  deactivateError
}) => {

  return (
    <div className={styles.deactivateAuthInputsBlock}>
      <p
        className={styles.deactivateHeading}>{t('myAccount.twoFactorAuthPage.twoFaCompleteContainer.deactivateGoogleAuth')}</p>
      <p
        className={styles.deactivateInfo}>{t('myAccount.twoFactorAuthPage.twoFaCompleteContainer.enterCurrentAuthCode')}</p>
      <p className={styles.errorMessage}>{deactivateError}</p>
      <form onSubmit={(e) => deactivateButtonClickHandler(e)}>
        <div className={styles.inputsBlock}>
          <input onChange={(e) => deactivateInputHandler(e.target.value)} type="text" className={styles.deactivateInput}
                 value={deactivateCodeValue}/>
          <button
            type={'submit'}
            onClick={(e) => deactivateButtonClickHandler(e)}
            className={styles.deactivateButton}
          >
            {t('myAccount.twoFactorAuthPage.twoFaCompleteContainer.confirmButton')}
          </button>
        </div>
      </form>
    </div>
  )
}