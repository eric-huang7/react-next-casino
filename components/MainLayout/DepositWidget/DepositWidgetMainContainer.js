import styles from '../../../styles/DepostWidget/DepositWidgetMainContainer.module.scss';
import {CurrencyChooser} from "./CurrencyChooser";
import {AmountInputContainer} from "./AmountInputContainer";
import {PaymentMethodMainBlock} from "./PaymentMethodChooser/PaymentMethodMainBlock";
import {PlayWithButton} from "./PlayWithButton";
import {CloseButton} from "./CloseButton";
import useWindowScroll from "../../../hooks/useWindowScroll";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {showCurrencySwitcher} from "../../../redux/actions/showPopups";
import {setUserDepositValue} from "../../../redux/actions/setUserDepositValue";


export const DepositWidgetMainContainer = ({t}) => {
  const dispatch = useDispatch();

  const userCurrency = useSelector((state) => state.userSelectedCurrency);
  const userDepositValue = useSelector((state) => state.userDepositValue.value);
  const currency = useSelector((store) => store);

  console.log(currency, userCurrency, '------------')

  let scrollHeight = useWindowScroll();
  const [activeWidget, setActiveWidget] = useState(true);

  const currencySwitcherShowHandler = () => {
    dispatch(showCurrencySwitcher(true));
  }
  const valueInputHandler = (e) => {
    if (e.target.value > 9999999999) {
      e.target.value = userDepositValue;
      return false;
    } else if (!e.target.value) {
      dispatch(setUserDepositValue(0));
    } else {
      dispatch(setUserDepositValue(e.target.value));
    }
  }

  const [isActivePayments, setIsActivePayments] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(null);

  const paymentMethodChooser = (method) => {
    setPaymentMethod(method);
    setIsActivePayments(false);
  }

  console.log(paymentMethod, "+++++payment method")

  return (
    <div className={`${styles.depositWidgetMainContainer} ${userCurrency.type === 3 ? '' : styles.moveRight} ${(scrollHeight > 900) && activeWidget ? styles.showDepositWidget : ''}`}>
      <CurrencyChooser
        currencySwitcherShowHandler={currencySwitcherShowHandler}
        userCurrency={userCurrency}
        t={t}
      />
      <AmountInputContainer
        userDepositValue={userDepositValue}
        userCurrency={userCurrency}
        valueInputHandler={valueInputHandler}
        t={t}
      />
      {(userCurrency.type === 3) || (userCurrency.type === 0) ? <PaymentMethodMainBlock
        scrollHeight={scrollHeight}
        paymentMethod={paymentMethod}
        paymentMethodChooser={paymentMethodChooser}
        isActivePayments={isActivePayments}
        setIsActivePayments={setIsActivePayments}
        t={t}
      /> : <></>}

      <PlayWithButton
        userCurrency={userCurrency}
        userDepositValue={userDepositValue}
        t={t}
      />
      <CloseButton
        userCurrency={userCurrency}
        setActiveWidget={setActiveWidget}
        setIsActivePayments={setIsActivePayments}
      />
    </div>
  )
}