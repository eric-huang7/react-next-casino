import styles from '../../../../../styles/MyAccount/UserInfoPage/PhoneVerification.module.scss'

export const PhoneInputContainer = ({ t, phoneInputValue, phoneNumber, sendPhoneNumberHandler, phoneError }) => {

  return (
    <div className={styles.phoneInputContainer}>
      <div>
        <p className={styles.textFirst}>{t('myAccount.profilePage.phoneVerification.inputsLabels.addVerifiedPhone')}</p>
        <p
          className={styles.textSecond}>{t('myAccount.profilePage.phoneVerification.inputsLabels.verifyCodeWillSend')}</p>
      </div>
      <form onSubmit={(e) => sendPhoneNumberHandler(e)}>
        <div className={styles.phoneInputWrapper}>
          <input onChange={(e) => phoneInputValue(e.target.value)} value={phoneNumber} type="tel"
                 className={styles.phoneVerifyInput}/>
          <button
            type={'submit'}
            onClick={(e) => sendPhoneNumberHandler(e)}
            className={styles.phoneVerifyButton}
          >
            {t('myAccount.profilePage.phoneVerification.buttons.add')}
          </button>
        </div>
      </form>
      <span className={styles.errorMessage}>{phoneError}</span>
    </div>
  )
}