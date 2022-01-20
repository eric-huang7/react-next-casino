import styles from '../../../styles/DepositPage/DepositPage.module.scss';
import {useState} from "react";
import {useDispatch} from "react-redux";
import {setErrorUserDepositValue} from "../../../redux/actions/setUserDepositValue";
import {setErrorUserPaymentMethod} from "../../../redux/actions/setUserPaymentMethod";
import {payments_methods_url} from "../../../redux/url/url";
import {siteID} from "../../../envs/envsForFetching";
import axios from "axios";
import {showCreditCardModal} from "../../../redux/actions/showPopups";

export const DepositButtonSubmit = ({t, step, stepHandler, submitHandler, buttonText, userDepositValue, userPayment, userCurrency}) => {
const dispatch = useDispatch();

  const submitButtonHandler = () => {
    if (step === 1 || step === 3) {
      if ((userDepositValue > 0) && !!userDepositValue) {

        dispatch(setErrorUserDepositValue(''));

        if (step === 3) {
          submitHandler();
        } else {

          stepHandler(step);
        }

      } else {

        dispatch(setErrorUserDepositValue("depositPage.errors.wrongValue"));
      }
    } else if (step === 2) {

      if (!!userPayment.paymentMethodData) {
        // stepHandler(step);
        dispatch(setErrorUserPaymentMethod(''));
        if (userPayment.paymentMethodData.paymentType === 'creditCard') {
          dispatch(showCreditCardModal(true));
        } else if (userPayment.paymentMethodData.paymentType === 'crypto') {
          console.log(userPayment, "OPEN CRYPTO");
        }

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