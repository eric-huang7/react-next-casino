import styles from '../../../styles/DepostWidget/DepositWidgetMainContainer.module.scss';
import {CurrencyChooser} from "./CurrencyChooser";
import {AmountInputContainer} from "./AmountInputContainer";
import {PaymentMethodMainBlock} from "./PaymentMethodChooser/PaymentMethodMainBlock";
import {PlayWithButton} from "./PlayWithButton";
import {CloseButton} from "./CloseButton";
import useWindowScroll from "../../../hooks/useWindowScroll";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {showCurrencySwitcher} from "../../../redux/actions/showPopups";
import {setUserDepositValue} from "../../../redux/actions/setUserDepositValue";
import {showRegister} from "../../../redux/actions/registerShow";


export const DepositWidgetMainContainer = ({t, userAuth}) => {
  const dispatch = useDispatch();

  const userCurrency = useSelector((state) => state.userSelectedCurrency);
  const userDepositValue = useSelector((state) => state.userDepositValue.value);
  const currency = useSelector((store) => store);

  // console.log(currency, userCurrency, '------------')

  let scrollHeight = useWindowScroll();
  const [activeWidget, setActiveWidget] = useState(true);

  const currencySwitcherShowHandler = () => {
    dispatch(showCurrencySwitcher(true));
  }
  const valueInputHandler = (e) => {
    if (e.target.value > 9999999999) {
      e.target.value = userDepositValue;
      return false;
    } else if (!Number(e.target.value)) {
      setErrorDepositValue(true);
      dispatch(setUserDepositValue(0));
    } else {
      setErrorDepositValue(false);
      dispatch(setUserDepositValue(Number(e.target.value)));
    }
  }

  const [isActivePayments, setIsActivePayments] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(null);

  const paymentMethodChooser = (method) => {
    setPaymentMethod(method);
    setIsActivePayments(false);
    setErrorPaymentMethod(false);
  }

  const [errorPaymentMethod, setErrorPaymentMethod] = useState(false);
  const [errorDepositValue, setErrorDepositValue] = useState(false);

  const openWindow = (type) => {
    console.log('open', type);
    if (!userAuth) {
      console.log(paymentMethod)
      // dispatch(showRegister(true));
    }
  }

  const whatShouldDoPlayWithButton = () => {
    if ((userCurrency.type === 3)) {
      if (!paymentMethod && Number(userDepositValue) === 0) {
        setErrorPaymentMethod(true);
        setErrorDepositValue(true);
      } else if (!paymentMethod) {
        setErrorPaymentMethod(true);
      } else if (Number(userDepositValue) === 0) {
        setErrorDepositValue(true);
      } else {
        if (paymentMethod.type === 'crypto') {
          openWindow('crypto');
        } else {
          openWindow('fiat');
        }
      }
    } else {
      if (Number(userDepositValue) === 0) {
        setErrorDepositValue(true);
      } else {
        openWindow('crypto');
      }
    }

  }

  useEffect(() => {
    if (scrollHeight < 900) {
      setIsActivePayments(false);
      setErrorPaymentMethod(false);
      setErrorDepositValue(false);
    }
  }, [scrollHeight])

  // console.log(paymentMethod, "+++++payment method")

  return (
    <div
      className={`${styles.depositWidgetMainContainer} ${userCurrency.type === 3 ? '' : styles.moveRight} ${(scrollHeight > 900) && activeWidget ? styles.showDepositWidget : ''}`}>
      <CurrencyChooser
        currencySwitcherShowHandler={currencySwitcherShowHandler}
        userCurrency={userCurrency}
        t={t}
      />
      <AmountInputContainer
        userDepositValue={userDepositValue}
        userCurrency={userCurrency}
        valueInputHandler={valueInputHandler}
        errorDepositValue={errorDepositValue}
        t={t}
      />
      {(userCurrency.type === 3) || (userCurrency.type === 0) ?
        <PaymentMethodMainBlock
          scrollHeight={scrollHeight}
          paymentMethod={paymentMethod}
          paymentMethodChooser={paymentMethodChooser}
          isActivePayments={isActivePayments}
          setIsActivePayments={setIsActivePayments}
          t={t}
          errorPaymentMethod={errorPaymentMethod}
        /> : <></>}

      <PlayWithButton
        userCurrency={userCurrency}
        userDepositValue={userDepositValue}
        whatShouldDoPlayWithButton={whatShouldDoPlayWithButton}
        t={t}
      />
      <CloseButton
        userCurrency={userCurrency}
        setActiveWidget={setActiveWidget}
        setIsActivePayments={setIsActivePayments}
        setErrorPaymentMethod={setErrorPaymentMethod}
        setErrorDepositValue={setErrorDepositValue}
      />
    </div>
  )
}