import styles from '../../../styles/DepositPage/DepositPage.module.scss';
import {useState} from "react";
import {useDispatch} from "react-redux";
import {setErrorUserDepositValue} from "../../../redux/actions/setUserDepositValue";
import {setErrorUserPaymentMethod} from "../../../redux/actions/setUserPaymentMethod";

export const DepositButtonSubmit = ({t, step, stepHandler, submitHandler, buttonText, userDepositValue, userPayment}) => {
const dispatch = useDispatch();
  const submitButtonHandler = () => {
    if (step === 1 || step === 3) {
      if ((userDepositValue > 0) && !!userDepositValue) {
        console.log('success')
        dispatch(setErrorUserDepositValue(''));
        if (step === 3) {
          submitHandler();
        } else {
          stepHandler(step);
        }
      } else {
        console.log('unsuccess')
        dispatch(setErrorUserDepositValue("depositPage.errors.wrongValue"));
      }
    } else if (step === 2) {
      if (!!userPayment.paymentId) {
        stepHandler(step);
        dispatch(setErrorUserPaymentMethod(''));
      } else {
        dispatch(setErrorUserPaymentMethod("depositPage.errors.choosePaymentMethod"));
      }
    }

  }

  return (
    <div onClick={() => submitButtonHandler()} className={styles.depositsButton}>
      <p>{buttonText}</p>
    </div>
  )
}