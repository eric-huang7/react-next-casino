import styles from "../../../styles/ForgotPassword/ForgotPassword.module.scss";
import {useRef, useState} from "react";


export const InputContainer = ({t, register, handleSubmit, errors, onSubmitHandler}) => {

  const [moveLabel, setMoveLabel] = useState(false);

  const labelMoveHandler = (e) => {
    setMoveLabel(true);
  }

  const onBlurEmailHandler = (e) => {
    if (e.target.value) {
      return
    } else {
      setMoveLabel(false);
    }
  }


  return (
    <div className={styles.emailInputField}>
      <form
        id={'forgotPasswordForm'}
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <label className={`${styles.emailLabel} ${moveLabel ? styles.moveLabel : ''} ${errors.email ? styles.errorEmailLabel : ''}`} htmlFor='forgotPasswordEmail'>{t('forgotPasswordForm.emailLabel')}</label>
        <input
          {...register("email")}
          type="text"
          className={errors.email ? styles.errorField : ""}
          id={'forgotPasswordEmail'}
          // onChange={(e) => labelMoveHandler(e)}
          onFocus={(e) => labelMoveHandler(e)}
          onBlur={(e) => onBlurEmailHandler(e)}
        />
      </form>
      <span className={styles.emailError}>{t(errors.email?.message)}</span>
    </div>
  )
}