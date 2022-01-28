import styles from "../../../styles/ForgotPassword/ForgotPassword.module.scss";


export const PasswordInputsContainer = ({t, handleSubmit, onSubmitHandler, register, errors, requestError}) => {


  return (
    <div className={styles.emailInputField}>
      <form
        id={'changePasswordWindowForm'}
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <div className={styles.changePasswordInputWrapper}>
          <label
            htmlFor="changePasswordWindowInput"
            className={styles.changePasswordLabel}
          >
            {"New password"}
          </label>
          <input
            {...register("password")}
            type="text"
            className={errors.password ? styles.errorField : ""}
            id={'changePasswordWindowInput'}
          />
          <p
            className={styles.emailError}>{t(errors.password?.message)}</p>
        </div>
        <div className={styles.changePasswordInputWrapper}>
          <label
            htmlFor="changePasswordWindowInput"
            className={styles.confirmPasswordLabel}
          >
            {"Confirm new password"}
          </label>
          <input
            {...register("passwordConfirmation")}
            type="text"
            className={errors.passwordConfirmation ? styles.errorField : ""}
            id={'confirmPasswordWindowInput'}
          />
          <p
            className={styles.emailError}>{t(errors.passwordConfirmation?.message)}</p>
        </div>
      </form>
      <p className={styles.emailError}>{t(requestError)}</p>
    </div>
  )
}