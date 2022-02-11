import styles from "../../../../../../styles/MyAccount/CashoutPage/CashoutPage.module.scss";
import {AmountInput} from "./AmountInput";
import {AddressInput} from "./AddressInput";
import {ButtonContainer} from "./ButtonContainer";
import {useEffect, useRef, useState} from "react";
import {post_withdraw_url} from "../../../../../../redux/url/url";
import axios from "axios";
import {useRouter} from "next/router";


export const FormContainer = ({t, typeOfCurrency, chosenPayment, userInfo}) => {

  const router = useRouter();
  const [amountValue, setAmountValue] = useState('');
  const [addressValue, setAddressValue] = useState('');
  const [memoAddressValue, setMemoAddressValue] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [valueError, setValueError] = useState('');
  const [addressError, setAddressError] = useState('');

  const valueRef = useRef();

  const amountInputHandler = (value) => {
    setAmountValue(value);
  }
  const addressInputHandler = (value) => {
    setAddressValue(value);
  }
  const memoAddressInputHandler = (value) => {
    setMemoAddressValue(value);
  }

  const withdrawFormHandler = (e) => {
    e.preventDefault();

    const sendData = {
      currency_id: chosenPayment ? chosenPayment.id : typeOfCurrency.id,
      currency_to: typeOfCurrency.id,
      user_id: userInfo.id,
      memo: memoAddressValue,
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

    if (Number(chosenPayment ? chosenPayment.withdrawMin : typeOfCurrency.withdrawMin) > Number(amountValue)) {
      setValueError(t('myAccount.cashoutPage.selectPaymentContainer.errors.valueErrorMessage'));
    } else if (addressValue.length === 0) {
      setAddressError(t('myAccount.cashoutPage.selectPaymentContainer.errors.emptyAddressErrorMessage'));
    } else {
      setValueError('');
      setAddressError('');
      axios.post(post_withdraw_url, body, config)
        .then((data) => {
          console.log('withdraw Success', data);
          setSuccessMessage(t("myAccount.cashoutPage.selectPaymentContainer.errors.successMessage"));
          setErrorMessage('');
        })
        .catch((e) => {
          console.log(e.response, 'withdraw Error');
          setSuccessMessage('');

          setErrorMessage(t("myAccount.cashoutPage.selectPaymentContainer.errors.errorMessage"));
        })
    }
  }



  useEffect(() => {
    setAddressValue('');
    setAmountValue('');
    setSuccessMessage('');
    setErrorMessage('');
    setValueError('');
    setAddressError('');
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
          valueRef={valueRef}
          valueError={valueError}
        />
        <AddressInput
          t={t}
          addressInputHandler={addressInputHandler}
          addressValue={addressValue}
          name={"myAccount.cashoutPage.selectPaymentContainer.address"}
          addressError={addressError}
        />
        {
          typeOfCurrency.memo_req !== 0
          ?
            <AddressInput
              t={t}
              addressInputHandler={memoAddressInputHandler}
              addressValue={memoAddressValue}
              name={"myAccount.cashoutPage.selectPaymentContainer.memoAddress"}
            />
            :
            <></>
        }

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