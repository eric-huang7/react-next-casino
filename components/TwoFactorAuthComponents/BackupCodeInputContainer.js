import styles from "../../styles/TwoFaAuth/TwoFaAuth.module.scss";
import {InstructionsTextContainer} from "./InstructionsTextContainer";
import {BackupCodeInput} from "./FormsConponents/BackupCodeInput";


export const BackupCodeInputContainer = ({t}) => {


  return (
    <div className={styles.inputsBlock}>
      <InstructionsTextContainer
        text={'Enter the code to continue.'}
        t={t}
      />
      <BackupCodeInput
      error={''}
      />
      <p className={styles.errorMessage}>{'Asdasd asd asd'}</p>
    </div>
  )
}