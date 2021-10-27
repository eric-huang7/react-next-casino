import styles from '../../../styles/DepositPage/DepositPage.module.scss';
import {useState} from "react";

export const DepositButtonSubmit = ({t, step, stepHandler, submitHandler, buttonText}) => {

  const submitButtonHandler = () => {
    if (step === 3) {
      submitHandler();
    } else {
      stepHandler(step);
    }
  }

  return (
    <div onClick={() => submitButtonHandler()} className={styles.depositsButton}>
      <p>{buttonText}</p>
    </div>
  )
}