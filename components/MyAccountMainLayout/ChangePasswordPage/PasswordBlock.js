import styles from "../../../styles/MyAccount/UserInfoPage/ChangePasswordPage.module.scss";


export const PasswordBlock = ({t, errors, passwordValue, passwordInputHandler, passwordError, register}) => {

  return (
    <div className={styles.passwordWrapper}>
      <label htmlFor="changePassword">New Password<abbr title="required">*</abbr></label>
      <div className={styles.passwordInnerWrpapper}>
        <input
          {...register("password")}
          onChange={(e) => passwordInputHandler(e.target.value)}
          type="password"
          id={"changePassword"}
          value={passwordValue}
        />
        <p className={styles.errorMessage}>{t(errors.password?.message)}</p>
        <p className={styles.passwordChangeText}>{"(leave blank if you don't want to change it)"}</p>
      </div>
    </div>
  )
}