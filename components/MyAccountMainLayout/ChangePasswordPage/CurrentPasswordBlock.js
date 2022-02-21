import styles from '../../../styles/MyAccount/UserInfoPage/ChangePasswordPage.module.scss'

export const CurrentPasswordBlock = ({ t, currentPasswordInputHandler, currenPasswordError, currenPasswordValue }) => {

  return (
    <div className={styles.passwordCurrentWrapper}>
      <label htmlFor="passwordCurrent">{t('myAccount.changePasswordPage.currentPassword')}<abbr
        title="required">*</abbr></label>
      <div className={styles.passwordInnerWrpapper}>
        <input
          onChange={(e) => currentPasswordInputHandler(e.target.value)}
          type="password"
          id={'passwordCurrent'}
          value={currenPasswordValue}
        />
        <p className={styles.errorMessage}>{currenPasswordError}</p>
        <p className={styles.passwordCurrentText}>{t('myAccount.changePasswordPage.needCurrentPassword')}</p>
      </div>
    </div>
  )
}