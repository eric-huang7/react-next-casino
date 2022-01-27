import styles from "../../../styles/ForgotPassword/ForgotPassword.module.scss";


export const InputContainer = ({t, register, handleSubmit, errors, onSubmitHandler}) => {


  return (
    <div className={styles.emailInputField}>
      <form
        id={'forgotPasswordForm'}
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <input
          {...register("email")}
          type="text"
          className={errors.email ? styles.errorField : ""}
        />
      </form>
      <span className={styles.emailError}>{t(errors.email?.message)}</span>
    </div>
  )
}