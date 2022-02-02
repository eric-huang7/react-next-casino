import styles from "../../../styles/TwoFaAuth/TwoFaAuth.module.scss";
import {useRef} from "react";


export const TwoFaCodeInput = ({error}) => {

  const inputsRef = useRef();

  const inputsHandler = () => {
    // console.log(inputsRef.current.childNodes);
    for (let i = 0; i < inputsRef.current.childNodes.length; i += 1) {
      console.log(inputsRef.current.childNodes[i])
      if (inputsRef.current.childNodes[i].value === '') {
        inputsRef.current.childNodes[i].focus();

        break;
      } else {
        console.log('fill');
      }
    }
    // inputsRef.current.childNodes.forEach((inputItem) => {
    //   if (inputItem.value === '') {
    //     inputItem.focus();
    //
    //   } else {
    //
    //   }
    // })
  }

  return (
    <div className={styles.twoFaCodeInputsContainer}>
      <form >
        <div ref={inputsRef} className={`${styles.twoFaCodeInputs} ${error ? styles.errorBlockInput : ''}`}>
          <input
            type="number"
            min={'0'}
            max={'9'}
            className={styles.twoFaCodeInput}
            name={'one'}
            onChange={() => inputsHandler()}
          />
          <input
            type="number"
            min={'0'}
            max={'9'}
            className={styles.twoFaCodeInput}
            name={'two'}
            onChange={() => inputsHandler()}
          />
          <input
            type="number"
            min={'0'}
            max={'9'}
            className={styles.twoFaCodeInput}
            name={'three'}
            onChange={() => inputsHandler()}
          />
          <input
            type="number"
            min={'0'}
            max={'9'}
            className={styles.twoFaCodeInput}
            name={'four'}
            onChange={() => inputsHandler()}
          />
          <input
            type="number"
            min={'0'}
            max={'9'}
            className={styles.twoFaCodeInput}
            name={'five'}
            onChange={() => inputsHandler()}
          />
          <input
            type="number"
            min={'0'}
            max={'9'}
            className={styles.twoFaCodeInput}
            name={'six'}
            onChange={() => inputsHandler()}
          />
        </div>
      </form>
    </div>
  )
}