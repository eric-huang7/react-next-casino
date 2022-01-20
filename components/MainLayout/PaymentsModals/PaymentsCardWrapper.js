import styles from '../../../styles/PaymentsModals/CreditCardPayment.module.scss';

import Image from "next/image";
import {ConfirmButton} from "./CreditCardComponents/ConfirmButton";
import {PaymentHeading} from "./CreditCardComponents/Heading";
import {InputsContainer} from "./CreditCardComponents/InputsContainer";
import {useDispatch, useSelector} from "react-redux";
import {showCreditCardModal, showCryptoModal} from "../../../redux/actions/showPopups";
import {annulDeposit, postCreditCardPayment} from "../../../redux/actions/depositPayments";
import useWindowScroll from "../../../hooks/useWindowScroll";
import {useState} from "react";
import {siteID} from "../../../envs/envsForFetching";
import {setUserPaymentMethod} from "../../../redux/actions/setUserPaymentMethod";
import {LoadingComponent} from "../../LoadingComponent/LoadingComponent";

export const PaymentsCardWrapper = ({t, userInfo, paymentsData}) => {
  let scrollHeight = useWindowScroll();
  const userCurrency = useSelector((state) => state.userSelectedCurrency);
  const userDepositValue = useSelector((state) => state.userDepositValue.value);
  const userPayment = useSelector((state) => state.userPaymentMethod);

  // console.log(userPayment, 'userPayment');

  const dispatch = useDispatch()
  const closeCardPayment = () => {
    dispatch(showCreditCardModal(false));
    dispatch(annulDeposit());
    dispatch(setUserPaymentMethod(null));
  }
  const [amountError, setAmountError] = useState(null);
  const [cardNumberError, setCardNumberError] = useState(null);
  const [dateInput, setDateInput] = useState('');
  const [cvvValue, setCvvValue] = useState('');
  const [cardNumber, setCurdNumber] = useState('');
  const [cardDateError, setCardDateError] = useState('')
  const [cardNameInput, setCardNameInput] = useState('')
  const [cardNameErrorInput, setCardNameErrorInput] = useState('')

  const confirmButtonClickHandler = () => {
    if (!amountError && !cardNumberError && !cardDateError && !cardNameErrorInput) {
      let date = dateInput.split('/').join('')
      console.log(date, cvvValue, cardNumber, cardNameInput, userCurrency.userCurrencyData.id, siteID, userInfo.user.user.id, userInfo.user.user);
      let paymentData = {
        senderCurrency_id: userCurrency.userCurrencyData.id,
        user_id: `${userInfo.user.user.id}`,
        site_id: siteID,
        number: `${cardNumber}`,
        cvv: Number(cvvValue),
        name: `${cardNameInput}`,
        expiry: `${date}`,
        bonus_offer_id: ''
      }
    dispatch(postCreditCardPayment(paymentData));
    } else {
      console.log('check errors')
    }
  }

   if (!userPayment.paymentMethodData.methodData) {
     return (
       <div className={styles.paymentsMainWrapper}>
         <div className={`${styles.paymentsInnerWrapper} ${scrollHeight > 100 ? styles.marginNull : ''}`}>
           <div className={styles.paymentsMainContainer}>
             <PaymentHeading closeHandler={closeCardPayment} t={t} type={'fiat'} />
             <div className={styles.confirmedPayment}>
                <LoadingComponent t={t} text={'creditCardPayment.errors.errorPaymentMethod'}/>
             </div>
           </div>
         </div>
       </div>
     )
   }
  if (paymentsData?.creditPaymentData?.data?.success) {
    return (
      <div className={styles.paymentsMainWrapper}>
        <div className={`${styles.paymentsInnerWrapper} ${scrollHeight > 100 ? styles.marginNull : ''}`}>
          <div className={styles.paymentsMainContainer}>
            <PaymentHeading closeHandler={closeCardPayment} t={t} type={'confirmed'} />
            <div className={styles.confirmedPayment}>
              <div className={styles.confirmedImageWrapper}>
                <Image src={'/assets/img/paymentsModals/confirmed.png'} width={120} height={126} layout={'fixed'} alt={'confirmed icon'}/>
              </div>
              <p className={styles.confirmedText}>{t("creditCardPayment.confirmText")}</p>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className={styles.paymentsMainWrapper}>
        <div className={`${styles.paymentsInnerWrapper} ${scrollHeight > 100 ? styles.marginNull : ''}`}>
          <div className={styles.paymentsMainContainer}>
            <PaymentHeading closeHandler={closeCardPayment} t={t} type={'fiat'} />
            <InputsContainer
              serverCardNumberError={paymentsData.isCreditPaymentError}
              userDepositValue={userDepositValue}
              userCurrency={userCurrency}
              t={t}
              amountError={amountError}
              setAmountError={setAmountError}
              cardNumberError={cardNumberError}
              setCardNumberError={setCardNumberError}
              dateInput={dateInput}
              setDateInput={setDateInput}
              cvvValue={cvvValue}
              setCvvValue={setCvvValue}
              cardNumber={cardNumber}
              setCurdNumber={setCurdNumber}
              cardDateError={cardDateError}
              setCardDateError={setCardDateError}
              cardNameInput={cardNameInput}
              setCardNameInput={setCardNameInput}
              setCardNameErrorInput={setCardNameErrorInput}
              cardNameErrorInput={cardNameErrorInput}
            />
          </div>
          <ConfirmButton
            t={t}
            confirmButtonClickHandler={confirmButtonClickHandler}
          />
        </div>
      </div>
    )
  }
}