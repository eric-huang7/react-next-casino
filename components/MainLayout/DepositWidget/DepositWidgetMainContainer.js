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

  let scrollHeight = useWindowScroll();
  const [activeWidget, setActiveWidget] = useState(true);


  const currencySwitcherShowHandler = () => {
    dispatch(showCurrencySwitcher(true));
  }
  const valueInputHandler = (e) => {
    dispatch(setUserDepositValue(e.target.value));
  }

  return (
    <div className={`${styles.depositWidgetMainContainer} ${(scrollHeight > 900) && activeWidget ? styles.showDepositWidget : ''}`}>
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
      <PaymentMethodMainBlock
        scrollHeight={scrollHeight}
        t={t}
      />
      <PlayWithButton
        userCurrency={userCurrency}
        userDepositValue={userDepositValue}
        t={t}
      />
      <CloseButton setActiveWidget={setActiveWidget}/>
    </div>
  )
}