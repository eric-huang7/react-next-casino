import styles from "../../../../styles/PaymentsModals/CreditCardPayment.module.scss";
import Image from "next/image";
import {useState} from "react";


export const InputsContainer = ({t, userCurrency, userDepositValue}) => {
  const [amountError, setAmountError] = useState(null);
  const [cardNumberError, setCardNumberError] = useState(null);
  const [dateInput, setDateInput] = useState('');
  const [cvvValue, setCvvValue] = useState('');
  const [cardNumber, setCurdNumber] = useState('');
const amountValueInputHandler = (e) => {
  if (e.target.value < 20) {
    setAmountError('The amount should be $20 or more.');
  } else if (e.target.value > 4000) {
    setAmountError('The amount should be $4000 or less.');
  } else {
    setAmountError(null);
  }
}
  function validateExpiry (input) {
    // ensure basic format is correct
    if (input.match(/^(0\d|1[0-2])\/\d{2}$/)) {
      const {0: month, 1: year} = input.split("/");

      // get midnight of first day of the next month
      const expiry = new Date("20"+year, month);
      const current = new Date();

      return expiry.getTime() > current.getTime();

    } else return false;
  }

const cardDateValue = (e) => {
  console.log(validateExpiry('12/21'))
  //   let input = e.target.value;
  //   if (/^0[1-9]|1[0-2]/[0-9]+$/.test(input)) {
  //     return input;
  //   }
  //
  //   let regexpExpiry = /^(?<month>0[1-9]|1[0-2])(?<year>[0-9]+)$/
  //   let match = regexpExpiry.exec(input);
  // console.log(`${match.groups.month}/${match.groups.year}`);

    if (e.target.value.length > 5) {
      console.log('date')
    } else {
      if (e.target.value.length > 0) {
        if (e.target.value[0].match(/[2-9]/)) {
          setDateInput("0" + e.target.value);
        } else {
          setDateInput(e.target.value);
        }
      } else {
        setDateInput(e.target.value);
      }
    }
}

const cvvInputHandler = (e) => {
  if (e.target.value.length > 4) {
    console.log('cvv');
  } else {

    setCvvValue(e.target.value);
  }
}

const cardNumberInputHandler = (e) => {
  if (e.target.value.length === 0) {
    setCardNumberError(null);
    setCurdNumber(e.target.value);
  } else if (e.target.value.length > 16) {
    console.log('cvv');
  } else if (e.target.value.length < 16) {
    console.log('error');
    setCardNumberError('Wrong format.');
    setCurdNumber(e.target.value);
  } else {
    setCardNumberError(null);
    setCurdNumber(e.target.value);
  }
}

  return (
    <div className={styles.inputsWrapper}>
      <div className={styles.cardNumberDate}>
        <div className={styles.cardNumberWrapper}>
          <input onChange={(e) => cardNumberInputHandler(e)} id={'cardNumber'} type="number" value={cardNumber} className={styles.cardNumberInput} placeholder={'Credit Card Number'}/>
          <span className={styles.errorText}>{cardNumberError}</span>
          <label htmlFor="cardNumber" className={styles.cardNumberLabel}>
          </label>
        </div>
        <input onChange={(e) => cardDateValue(e)} value={dateInput} id={'dateInput'} type="text" className={styles.dateInput} placeholder={'Expiry Date'}/>
      </div>
      <div className={styles.nameCardCvv}>
        <div className={styles.cardNameWrapper}>
          <input id={'cardName'} type="text" className={styles.cardNameInput} placeholder={'Credit Holder Number'}/>
          <label htmlFor="cardName" className={styles.cardNameLabel}></label>
        </div>
        <input onChange={(e) => cvvInputHandler(e)} type="number" value={cvvValue} className={styles.cardCvv} placeholder={'CVV'}/>
      </div>
      <div className={styles.amountValue}>
        <p>Amount (Min 20.00, max 4000.00)</p>
        <input id={"amountValueModal"} onChange={(e) => amountValueInputHandler(e)} defaultValue={`${userDepositValue}`} type="number" className={styles.amountValueInput}/>
        <label htmlFor="amountValueModal" className={styles.amountValueLabel}>{userCurrency.currencySymbol}</label>
        <span className={styles.errorText}>{amountError}</span>
      </div>
      <div className={styles.secureBlock}>
        <Image src={'/assets/img/paymentsModals/lock.png'} layout={'fixed'} width={20} height={28} alt={'lock icon'} />
        <p className={styles.secureText}>Secure Payment Processing Time: Instant Fee 2.5%</p>
      </div>
    </div>
  )
}