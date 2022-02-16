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
