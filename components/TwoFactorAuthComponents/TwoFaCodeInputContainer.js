import styles from "../../styles/TwoFaAuth/TwoFaAuth.module.scss";
import {InstructionsTextContainer} from "./InstructionsTextContainer";
import {TwoFaCodeInput} from "./FormsConponents/TwoFaCodeInput";


export const TwoFaCodeInputContainer = ({t, }) => {


  return (
    <div className={styles.inputsBlock}>
      <InstructionsTextContainer
        text={'Enter the code to continue.'}
        t={t}
      />
      <TwoFaCodeInput
        error={''}
      />
      <p className={styles.errorMessage}>{'Asdasd asd asd'}</p>
    </div>
  )
}