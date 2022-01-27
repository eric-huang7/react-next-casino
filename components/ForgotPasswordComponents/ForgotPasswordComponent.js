import styles from '../../styles/ForgotPassword/ForgotPassword.module.scss';
import {HeadingBlock} from "./HeadingBlock";
import {TextContainer} from "./TextContainer";
import {InputContainer} from "./InputContainer";
import {ResendButton} from "./ResendButton";
import {ResetPasswordButton} from "./ResetPasswordButton";


export const ForgotPasswordComponent = ({t}) => {


  return (
    <div className={`${styles.forgotPasswordWrapper} `}>
      <div className={styles.mainContainer}>
        <div className={styles.instructionsBlock}>
          <HeadingBlock t={t}/>
          <div className={styles.innerContainer}>
            <TextContainer t={t} />
            <InputContainer t={t} />
            <ResendButton t={t} />
          </div>
        </div>

        <ResetPasswordButton t={t} />
      </div>
    </div>
  )
}