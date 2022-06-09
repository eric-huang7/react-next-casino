import styles from '../../../styles/PaymentsModals/CreditCardPayment.module.scss';

import Image from "next/image";
import {ConfirmButton} from "./CreditCardComponents/ConfirmButton";
import {PaymentHeading} from "./CreditCardComponents/Heading";
import {InputsContainer} from "./CreditCardComponents/InputsContainer";
import {useDispatch, useSelector} from "react-redux";
import {
  setStepDepositModal,
  showCreditCardModal,
  showCryptoModal,
  showDepositModal
} from "../../../redux/popups/action";
import {annulDeposit, postCreditCardPayment} from "../../../redux/deposits/action";
import useWindowScroll from "../../../hooks/useWindowScroll";
import {useEffect, useState} from "react";
import {siteID} from "../../../envs/envsForFetching";
import {setUserPaymentMethod} from "../../../redux/userFinance/action";
import {LoadingComponent} from "../../LoadingComponent/LoadingComponent";
import ErrorText from "../../ErrorBoundaryComponents/ErrorText";
import ErrorEmpty from "../../ErrorBoundaryComponents/ErrorEmpty";

export const PaymentsCardWrapper = ({t, userInfo, paymentsData, isShow}) => {

  useEffect(() => {
    let timer = setTimeout(() => {
      if (isShow) {
        document.body.style.overflowY = "hidden"
      } else {
        document.body.style.overflowY = "auto"
      }
    }, 1);

    return () => {
      document.body.style.overflowY = "auto"
      clearTimeout(timer);
    }
  }, [])

  let scrollHeight = useWindowScroll();
  const userCurrency = useSelector((state) => state.userFinance);
  const userDepositValue = useSelector((state) => state.userFinance?.depositValue);
  const userPayment = useSelector((state) => state.userFinance);


  const dispatch = useDispatch()
  const closeCardPayment = () => {
    dispatch(showCreditCardModal(false));
    dispatch(annulDeposit());
    dispatch(setUserPaymentMethod(null));
    dispatch(setStepDepositModal(1));
  }

  const backButtonClickHandler = () => {
    dispatch(showCreditCardModal(false));
    // dispatch(showDepositModal(true));
  }
  const [amountError, setAmountError] = useState(null);

  // TODO: ADD AMOUNT VALUE
  const [amountValue, setAmountValue] = useState('');
  const [cardNumberError, setCardNumberError] = useState(null);
  const [dateInput, setDateInput] = useState('');
  const [cvvValue, setCvvValue] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardDateError, setCardDateError] = useState('')
  const [cardNameInput, setCardNameInput] = useState('')
  const [cardNameErrorInput, setCardNameErrorInput] = useState('')

  const confirmButtonClickHandler = () => {
    if (!amountError && !cardNumberError && !cardDateError && !cardNameErrorInput) {
      let date = dateInput.split('/').join('')
      let paymentData = {
        senderCurrency_id: userCurrency?.userCurrencyData?.id,
        user_id: `${userInfo?.user?.user?.id}`,
        site_id: siteID,
        number: `${cardNumber}`,
        cvv: Number(cvvValue),
        name: `${cardNameInput}`,
        expiry: `${date}`,
        bonus_offer_id: '',
        deposit_amount: ''
      }
      dispatch(postCreditCardPayment(paymentData));
    } else {

    }
  }

  if (!userPayment?.paymentMethodData.methodData) {
    return (
      <div className={styles.paymentsMainWrapper}>
        <div className={`${styles.paymentsInnerWrapper} ${scrollHeight > 100 ? styles.marginNull : ''}`}>
          <div className={styles.paymentsMainContainer}>
            <ErrorText>
              <PaymentHeading
                closeHandler={closeCardPayment}
                t={t}
                type={'fiat'}
                showBackButton={true}
                backButtonClickHandler={backButtonClickHandler}
              />
            </ErrorText>
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
            <ErrorText>
              <PaymentHeading
                closeHandler={closeCardPayment}
                t={t}
                type={'confirmed'}
              />
            </ErrorText>
            <div className={styles.confirmedPayment}>
              <div className={styles.confirmedImageWrapper}>
                <Image src={'/assets/img/paymentsModals/confirmed.png'} width={120} height={126} layout={'fixed'}
                       alt={'confirmed icon'}/>
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
            <ErrorText>
              <PaymentHeading
                closeHandler={closeCardPayment}
                t={t}
                type={'fiat'}
                showBackButton={false}
                backButtonClickHandler={backButtonClickHandler}
              />
            </ErrorText>
            <ErrorText>
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
                setCardNumber={setCardNumber}
                cardDateError={cardDateError}
                setCardDateError={setCardDateError}
                cardNameInput={cardNameInput}
                setCardNameInput={setCardNameInput}
                setCardNameErrorInput={setCardNameErrorInput}
                cardNameErrorInput={cardNameErrorInput}
              />
            </ErrorText>
          </div>
          <ErrorEmpty>
            <ConfirmButton
              t={t}
              confirmButtonClickHandler={confirmButtonClickHandler}
            />
          </ErrorEmpty>
        </div>
      </div>
    )
  }
}
