import styles from "../../../../styles/PaymentsModals/CreditCardPayment.module.scss";
import Image from "next/image";
import {useState} from "react";
import {validateExpiry} from "../../../../helpers/validateExpiryCardDate";


export const InputsContainer = ({t, serverCardNumberError, cardNameErrorInput, setCardNameErrorInput, cardNameInput, setCardNameInput, userCurrency, userDepositValue, cardDateError, amountError, cardNumber, cardNumberError, cvvValue, dateInput, setCardDateError, setAmountError, setCardNumberError, setCardNumber, setCvvValue, setDateInput}) => {

const amountValueInputHandler = (e) => {
  if (e.target.value < 20) {
    setAmountError(t("creditCardPayment.errors.moreValue"));
  } else if (e.target.value > 4000) {
    setAmountError(t("creditCardPayment.errors.lessValue"));
  } else {
    setAmountError(null);
  }
}


const cardDateValue = (e) => {

  let date = e.target.value.replace(/\//g, "").substring(0, 2) + (e.target.value.length > 2 ? '/' : '') + e.target.value.replace(/\//g, "").substring(2, 4);

    if (date.length > 5) {
      console.log('date')
    } else {
      if (date.length > 0) {
        if (date[0].match(/[2-9]/)) {
          setDateInput("0" + date);
        } else {
          setDateInput(date);
        }
      } else {
        setDateInput(date);
      }
    }
    if (validateExpiry(date)) {
      setCardDateError('')
    } else {
      if (serverCardNumberError?.data?.extra_error_info?.errors?.filter((el) => el.property === 'expiry')[0]?.constraints?.isNotEmpty) {
        setCardDateError('')
        if (date.length === 0) {
          setCardDateError('');
        }
      } else {
        setCardDateError(t("creditCardPayment.errors.wrongDate"))
        if (date.length === 0) {
          setCardDateError('');
        }
      }
    }
}

const cvvInputHandler = (e) => {
  if (e.target.value.length > 4) {
    console.log('cvv');
  } else if (e.target.value.length < 3) {
    console.log('wrong cvv')
    setCvvValue(e.target.value);
  } else {

    setCvvValue(e.target.value);
  }
}

const cardNumberInputHandler = (e) => {
  if (e.target.value.length === 0) {
    setCardNumberError(null);
    setCardNumber(e.target.value);
  } else if (e.target.value.length > 16) {
    console.log('cvv');
  } else if (e.target.value.length < 16) {
    console.log('error');
    if (serverCardNumberError?.data?.extra_error_info?.errors[0]?.constraints?.isCreditCard) {
      setCardNumberError('');
      setCardNumber(e.target.value);
    } else {
      setCardNumberError(t("creditCardPayment.errors.wrongCard"));
      setCardNumber(e.target.value);
    }
  } else {
    setCardNumberError(null);
    setCardNumber(e.target.value);
  }
}

const cardNameInputHandler = (e) => {
  if (e.target.value.trim().length === 0) {
    if (serverCardNumberError?.data?.extra_error_info?.errors?.filter((el) => el.property === 'name')[0]?.constraints?.isNotEmpty) {
      setCardNameInput(e.target.value);
      setCardNameErrorInput('');
    } else {
      setCardNameInput(e.target.value);
      setCardNameErrorInput(t("creditCardPayment.errors.wrongName"));
    }

  } else {
    setCardNameErrorInput('');
    setCardNameInput(e.target.value)
  }
}

  return (
    <div className={styles.inputsWrapper}>
      <div className={styles.cardNumberDate}>
        <div className={styles.cardNumberWrapper}>
          <input
            onChange={(e) => cardNumberInputHandler(e)}
            id={'cardNumber'}
            type="number"
            value={cardNumber}
            className={styles.cardNumberInput}
            placeholder={t("creditCardPayment.creditCard")}
          />
          <span className={styles.errorText}>{cardNumberError}</span>
          <span className={styles.errorText}>{serverCardNumberError?.data?.extra_error_info?.errors[0]?.constraints?.isCreditCard}</span>
          {/*<span className={styles.errorText}>{serverCardNumberError?.data?.extra_error_info?.errors[0]?.constraints?.isCreditCard*/}
          {/*  ? t("creditCardPayment.errors.serverCardNumberError")*/}
          {/*  :*/}
          {/*  ''*/}
          {/*}</span>*/}
          <label htmlFor="cardNumber" className={styles.cardNumberLabel}>
          </label>
        </div>
        <div className={styles.cardDateWrapper}>
          <input
            onChange={(e) => cardDateValue(e)}
            value={dateInput}
            id={'dateInput'}
            type="text"
            className={styles.dateInput}
            placeholder={t("creditCardPayment.expiryDate")}
            autoComplete={"cc-exp"}
          />
          <span className={styles.errorText}>{cardDateError}</span>
          <span className={`${styles.errorText} ${styles.errorTextLong}`}>{serverCardNumberError?.data?.extra_error_info?.errors?.filter((el) => el.property === 'expiry')[0]?.constraints?.isNotEmpty}</span>
        </div>
      </div>
      <div className={styles.nameCardCvv}>
        <div className={styles.cardNameWrapper}>
          <input
            id={'cardName'}
            type="text"
            value={cardNameInput}
            className={styles.cardNameInput}
            placeholder={t("creditCardPayment.creditHolder")}
            onChange={(e) => cardNameInputHandler(e)}
          />
          <span className={styles.errorText}>{cardNameErrorInput}</span>
          <span className={styles.errorText}>{serverCardNumberError?.data?.extra_error_info?.errors?.filter((el) => el.property === 'name')[0]?.constraints?.isNotEmpty}</span>
          <label htmlFor="cardName" className={styles.cardNameLabel}></label>
        </div>
        <input onChange={(e) => cvvInputHandler(e)} type="number" value={cvvValue} className={styles.cardCvv} placeholder={'CVV'}/>
      </div>
      <div className={styles.amountValue}>
        <p>{t("creditCardPayment.amountValue")}(Min 20.00, max 4000.00)</p>
        <input id={"amountValueModal"} onChange={(e) => amountValueInputHandler(e)} defaultValue={`${userDepositValue}`} type="number" className={styles.amountValueInput}/>
        <label htmlFor="amountValueModal" className={styles.amountValueLabel}>{userCurrency.userCurrencyData.symbol}</label>
        <span className={styles.errorText}>{amountError}</span>
      </div>
      <div className={styles.secureBlock}>
        <Image src={'/assets/img/paymentsModals/lock.png'} layout={'fixed'} width={20} height={28} alt={'lock icon'} />
        <p className={styles.secureText}>{t("creditCardPayment.secureText")}</p>
      </div>
    </div>
  )
}