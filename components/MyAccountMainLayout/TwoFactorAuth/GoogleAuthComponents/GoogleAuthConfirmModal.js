import styles from "../../../../styles/MyAccount/UserInfoPage/GoogleAuthConfirmModal.module.scss";
import {HeadingBlock} from "./HeadingBlock";

export const GoogleAuthConfirmModal = ({t, register, handleSubmit, onSubmitHandler, errors, onBack, onClose, requestError}) => {

  return (
    <div className={`${styles.forgotPasswordWrapper} `}>
      <div className={styles.mainContainer}>
        <div className={styles.instructionsBlock}>
          <HeadingBlock
            t={t}
            whatDoBackButton={onBack}
            closeForgotPasswordHandler={onClose}
            text={'forgotPasswordForm.headings.resendEmail'}
            isShowBackButton={true}
          />
          <div className={`${styles.innerContainer} ${styles.resendContainer}`}>
          </div>
        </div>
      </div>
    </div>
  )
}
