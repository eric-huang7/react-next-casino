import styles from "../../../styles/TwoFaAuth/TwoFaAuth.module.scss";
import {useRef, useState} from "react";


export const TwoFaCodeInput = ({error}) => {

  const inputsRef = useRef();

  const inputs = {
    one : 0,
    two: 1,
    three: 2,
    four: 3,
    five: 4,
    six: 5
  }
  const [inputsValues, setInputsValues] = useState({
    one : '',
    two: '',
    three: '',
    four: '',
    five: '',
    six: ''
  })
  const [counter, setCounter] = useState(0);

  const inputsHandler = (e) => {
    // console.log(inputsRef.current.childNodes);
    // console.log(e.target.name, inputs[e.target.name], counter);
    // setCounter(inputs[e.target.name] + 1);
    setInputsValues(prevState => {
      return {
        ...prevState,
        [e.target.name]: e.target.value
      }
    })
    // inputsRef.current.childNodes[counter].focus();

    for (let i = 0; i < inputsRef.current.childNodes.length; i += 1) {
      // console.log(inputsRef.current.childNodes[i])
      if (inputsRef.current.childNodes[i].value === '') {
        inputsRef.current.childNodes[i].focus();
        break;
      } else {
        // console.log('fill');
      }
    }
  }
  const counterSetter = (e) => {
    if (e.which === 8) {
      if (counter === 0) {

      } else {
        setCounter(prevState => prevState - 1);
      }

    }
    console.log(e.which, 'asdasdasd!!!!!', 1234);
  }

  // console.log(counter, inputsValues, 'asd');

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
            onChange={(e) => inputsHandler(e)}
            onKeyDown={(e) => counterSetter(e)}
          />
          <input
            type="number"
            min={'0'}
            max={'9'}
            className={styles.twoFaCodeInput}
            name={'two'}
            onChange={(e) => inputsHandler(e)}
            onKeyDown={(e) => counterSetter(e)}
          />
          <input
            type="number"
            min={'0'}
            max={'9'}
            className={styles.twoFaCodeInput}
            name={'three'}
            onChange={(e) => inputsHandler(e)}
            onKeyDown={(e) => counterSetter(e)}
          />
          <input
            type="number"
            min={'0'}
            max={'9'}
            className={styles.twoFaCodeInput}
            name={'four'}
            onChange={(e) => inputsHandler(e)}
            onKeyDown={(e) => counterSetter(e)}
          />
          <input
            type="number"
            min={'0'}
            max={'9'}
            className={styles.twoFaCodeInput}
            name={'five'}
            onChange={(e) => inputsHandler(e)}
            onKeyDown={(e) => counterSetter(e)}
          />
          <input
            type="number"
            min={'0'}
            max={'9'}
            className={styles.twoFaCodeInput}
            name={'six'}
            onChange={(e) => inputsHandler(e)}
            onKeyDown={(e) => counterSetter(e)}
          />
        </div>
      </form>
    </div>
  )
}

// for (let i = 0; i < inputsRef.current.childNodes.length; i += 1) {
//   console.log(inputsRef.current.childNodes[i])
//   if (inputsRef.current.childNodes[i].value === '') {
//     inputsRef.current.childNodes[i].focus();
//
//     break;
//   } else {
//     console.log('fill');
//   }
// }
// inputsRef.current.childNodes.forEach((inputItem) => {
//   if (inputItem.value === '') {
//     inputItem.focus();
//
//   } else {
//
//   }
// })