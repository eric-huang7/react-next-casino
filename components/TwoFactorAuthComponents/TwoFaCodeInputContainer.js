import styles from "../../styles/TwoFaAuth/TwoFaAuth.module.scss";
import {InstructionsTextContainer} from "./InstructionsTextContainer";


export const TwoFaCodeInputContainer = ({t}) => {


  return (
    <div className={styles.inputsBlock}>
      <InstructionsTextContainer
        text={'Enter the code to continue.'}
        t={t}
      />
      <div className={styles.inputsContainer}>
        <form >
          <input type="text" className={styles.twoFaCodeInput} placeholder={'TwoFa'}/>
        </form>
      </div>
      <p className={styles.errorMessage}>{'Asdasd asd asd'}</p>
    </div>
  )
}