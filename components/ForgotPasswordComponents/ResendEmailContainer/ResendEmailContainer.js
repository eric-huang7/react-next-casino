import styles from "../../../styles/ForgotPassword/ForgotPassword.module.scss";
import {HeadingBlock} from "../HeadingBlock";
import {EmailEnteringContainer} from "../EmailEnteringContainer/EmailEnteringContainer";
import {ResetPasswordButton} from "../ResetPasswordButton";
import {InputContainer} from "../EmailEnteringContainer/InputContainer";


export const ResendEmailContainer = ({t, register, handleSubmit, onSubmitHandler, errors}) => {

  return (
    <div className={`${styles.forgotPasswordWrapper} `}>
      <div className={styles.mainContainer}>
        <div className={styles.instructionsBlock}>
          <HeadingBlock t={t}/>
          <div className={`${styles.innerContainer} ${styles.resendContainer}`}>
            <InputContainer
              register={register}
              handleSubmit={handleSubmit}
              onSubmitHandler={onSubmitHandler}
              errors={errors}
              t={t}
            />
          </div>
        </div>
        <ResetPasswordButton t={t} />
      </div>
    </div>
  )
}