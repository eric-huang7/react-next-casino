import styles from "../../../../../../styles/MyAccount/CashoutPage/CashoutPage.module.scss";
import {AmountInput} from "./AmountInput";
import {AddressInput} from "./AddressInput";
import {ButtonContainer} from "./ButtonContainer";
import {useEffect, useState} from "react";
import axios from "axios";
import {post_withdraw_url} from "../../../../../../redux/url/url";
import {useRouter} from "next/router";


export const FormContainer = ({t, typeOfCurrency, userInfo}) => {
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
      currency_id: typeOfCurrency.id,
      user_id: userInfo.id,
      memo: "",
      address: addressValue,
      amount: amountValue
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
        setSuccessMessage(t("myAccount.cashoutPage.selectPaymentContainer.errors.successMessage"));
        setErrorMessage('');
      })
      .catch((e) => {
        console.log(e.response, 'withdraw Error');
        setSuccessMessage('');
        setErrorMessage(t("myAccount.cashoutPage.selectPaymentContainer.errors.errorMessage"))
      })
  }

  useEffect(() => {
    setAddressValue('');
    setAmountValue('');
    setSuccessMessage('');
    setErrorMessage('');
  }, [router])

  return (
    <div  className={styles.paymentMethodFormWrapper}>
      <form onSubmit={(e) => withdrawFormHandler(e)} id={"paymentForm"}>
        <AmountInput
          t={t}
          typeOfCurrency={typeOfCurrency}
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
        <ButtonContainer withdrawFormHandler={withdrawFormHandler} t={t} />
      </form>
    </div>
  )
}