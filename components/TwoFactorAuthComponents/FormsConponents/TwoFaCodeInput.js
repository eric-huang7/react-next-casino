import styles from "../../../styles/TwoFaAuth/TwoFaAuth.module.scss";
import {useEffect, useRef, useState} from "react";
import dynamic from 'next/dynamic';

const ReactCodeInput = dynamic(import('react-code-input'));

export const TwoFaCodeInput = ({error, handleChange, codeRef}) => {



  return (
    <div className={styles.twoFaCodeInputsContainer}>
      <form >
        <ReactCodeInput
          className={`${styles.twoFaCodeInputs} ${error ? styles.errorBlockInput : ''}`}
          inputMode={"numeric"}
          type='number'
          fields={6}
          autoFocus={true}
          onChange={handleChange}
          ref={codeRef}
        />
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

// const inputsRef = useRef();
//
// const inputs = {
//   one : 0,
//   two: 1,
//   three: 2,
//   four: 3,
//   five: 4,
//   six: 5
// }
// const [inputsValues, setInputsValues] = useState({
//   one : '',
//   two: '',
//   three: '',
//   four: '',
//   five: '',
//   six: ''
// })
// const [counter, setCounter] = useState(0);
//
// const inputsHandler = (e) => {
//   // console.log(inputsRef.current.childNodes);
//   // console.log(e.target.name, inputs[e.target.name], counter);
//   // setCounter(inputs[e.target.name] + 1);
//   setInputsValues(prevState => {
//     return {
//       ...prevState,
//       [e.target.name]: e.target.value
//     }
//   })
//   // inputsRef.current.childNodes[counter].focus();
//
//   for (let i = 0; i < inputsRef.current.childNodes.length; i += 1) {
//     // console.log(inputsRef.current.childNodes[i])
//     if (inputsRef.current.childNodes[i].value === '') {
//       inputsRef.current.childNodes[i].focus();
//       break;
//     } else {
//       // console.log('fill');
//     }
//   }
// }
// const counterSetter = (e) => {
//   if (e.which === 8) {
//     if (counter === 0) {
//
//     } else {
//       setCounter(prevState => prevState - 1);
//     }
//
//   }
//   console.log(e.which, 'asdasdasd!!!!!', 1234);
// }