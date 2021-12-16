import styles from "../../../styles/MyAccount/UserInfoPage/ChangePasswordPage.module.scss";


export const CurrentPasswordBlock = ({t, currentPasswordInputHandler, currenPasswordError, currenPasswordValue}) => {

  return (
    <div className={styles.passwordCurrentWrapper}>
      <label htmlFor="passwordCurrent">Current password<abbr title="required">*</abbr></label>
      <div className={styles.passwordInnerWrpapper}>
        <input onChange={(e) => currentPasswordInputHandler(e.target.value)} type="password" id={"passwordCurrent"} value={currenPasswordValue}/>
        <p className={styles.errorMessage}>{currenPasswordError}</p>
        <p className={styles.passwordCurrentText}>{"(we need your current password to confirm your changes)"}</p>
      </div>
    </div>
  )
}