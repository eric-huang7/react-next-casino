import styles from '../../../styles/MyAccount/UserInfoPage/ChangePasswordPage.module.scss'

export const PasswordBlock = ({ t, errors, passwordValue, passwordInputHandler, passwordError, register }) => {

  return (
    <div className={styles.passwordWrapper}>
      <label htmlFor="changePassword">{t('myAccount.changePasswordPage.newPassword')}<abbr
        title="required">*</abbr></label>
      <div className={styles.passwordInnerWrpapper}>
        <input
          {...register('password')}
          onChange={(e) => passwordInputHandler(e.target.value)}
          type="password"
          id={'changePassword'}
          value={passwordValue}
        />
        <p className={styles.errorMessage}>{t(errors.password?.message)}</p>
        <p className={styles.errorMessage}>{passwordError}</p>
        <p className={styles.passwordChangeText}>{t('myAccount.changePasswordPage.leaveBlank')}</p>
      </div>
    </div>
  )
}