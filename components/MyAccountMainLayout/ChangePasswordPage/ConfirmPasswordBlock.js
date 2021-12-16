import styles from "../../../styles/MyAccount/UserInfoPage/ChangePasswordPage.module.scss";


export const ConfirmPasswordBlock = ({t, confirmPasswordInputHandler, passwordConfirmValue, passwordConfirmError}) => {

  return (
    <div className={styles.passwordConfirmWrapper}>
      <label htmlFor="passwordConfirm">Password confirmation<abbr title="required">*</abbr></label>
      <div className={styles.passwordInnerWrpapper}>
        <input onChange={(e) => confirmPasswordInputHandler(e.target.value)} type="password" id={"passwordConfirm"} value={passwordConfirmValue}/>
        <p className={`${styles.passwordConfirmText} ${styles.errorMessage}`}>{passwordConfirmError}</p>
      </div>
    </div>
  )
}