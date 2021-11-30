import styles from '../../../styles/DepostWidget/DepositWidgetMainContainer.module.scss';
import {CurrencyChooser} from "./CurrencyChooser";
import {AmountInputContainer} from "./AmountInputContainer";
import {PaymentMethodMainBlock} from "./PaymentMethodChooser/PaymentMethodMainBlock";
import {PlayWithButton} from "./PlayWithButton";
import {CloseButton} from "./CloseButton";
import useWindowScroll from "../../../hooks/useWindowScroll";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {showCurrencySwitcher} from "../../../redux/actions/showPopups";


export const DepositWidgetMainContainer = ({t}) => {
  const dispatch = useDispatch();
  let scrollHeight = useWindowScroll();
  const [activeWidget, setActiveWidget] = useState(true);

  const currencySwitcherShowHandler = () => {
    dispatch(showCurrencySwitcher(true));
  }

  return (
    <div className={`${styles.depositWidgetMainContainer} ${(scrollHeight > 900) && activeWidget ? styles.showDepositWidget : ''}`}>
      <CurrencyChooser currencySwitcherShowHandler={currencySwitcherShowHandler} t={t}/>
      <AmountInputContainer t={t}/>
      <PaymentMethodMainBlock t={t}/>
      <PlayWithButton t={t} />
      <CloseButton setActiveWidget={setActiveWidget}/>
    </div>
  )
}