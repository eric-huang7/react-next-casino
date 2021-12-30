import styles from "../../../../../../styles/MyAccount/CashoutPage/CashoutPage.module.scss";
import {AmountInput} from "./AmountInput";
import {AddressInput} from "./AddressInput";
import {ButtonContainer} from "./ButtonContainer";
import {useEffect, useState} from "react";
import {post_withdraw_url} from "../../../../../../redux/url/url";
import axios from "axios";
import {useRouter} from "next/router";


export const FormContainer = ({t, typeOfCurrency, chosenPayment, userInfo}) => {
  const router = useRouter();
  const [amountValue, setAmountValue] = useState('');
  const [addressValue, setAddressValue] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const amountInputHandler = (value) => {
    setAmountValue(value);
  }
  const addressInputHandler = (value) => {
    setAddressValue(value);
  }

  const withdrawFormHandler = (e) => {
    e.preventDefault();
    // const currency_to = typeOfCurrency;
    const sendData = {
      currency_id: chosenPayment ? chosenPayment.id : typeOfCurrency.id,
      currency_to: typeOfCurrency.id,
      user_id: userInfo.id,
      memo: "",
      address: addressValue,
      amount: amountValue
    }

    if (!chosenPayment) {
      delete sendData.currency_to;
    }

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const body = JSON.stringify(sendData);

    axios.post(post_withdraw_url, body, config)
      .then((data) => {
        console.log('withdraw Success', data);
        setSuccessMessage('The withdrawal request has been accepted, await the receipt of funds to your wallet.');
        setErrorMessage('');
      })
      .catch((e) => {
        console.log(e.response, 'withdraw Error');
        setSuccessMessage('');
        setErrorMessage('Payment error, please try again or contact support.')
      })
  }



  useEffect(() => {
    setAddressValue('');
    setAmountValue('');
    setSuccessMessage('');
    setErrorMessage('');
  }, [router])

  return (
    <div className={styles.paymentMethodFormWrapper}>
      <form onSubmit={(e) => withdrawFormHandler(e)} id={"paymentForm"}>
        <AmountInput
          t={t}
          typeOfCurrency={typeOfCurrency}
          chosenPayment={chosenPayment}
          amountInputHandler={amountInputHandler}
          amountValue={amountValue}
        />
        <AddressInput
          t={t}
          addressInputHandler={addressInputHandler}
          addressValue={addressValue}
        />
        <span className={styles.errorMessage}>{errorMessage}</span>
        <span className={styles.successMessage}>{successMessage}</span>
        <ButtonContainer
          withdrawFormHandler={withdrawFormHandler}
          t={t}
        />
      </form>
    </div>
  )
}