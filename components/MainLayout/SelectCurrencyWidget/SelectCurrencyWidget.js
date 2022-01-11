import styles from '../../../styles/CurrencySelector/CurrencySelector.module.scss';
import useWindowScroll from "../../../hooks/useWindowScroll";
import {useDispatch, useSelector} from "react-redux";
import {backButtonShouldDo, showCurrencySwitcher} from "../../../redux/actions/showPopups";
import {setCurrencySelectorType} from "../../../redux/actions/setSelectedCurrency";
import {SelectorHeading} from "./SelectorHeading";
import {CurrencySelector} from "./CurrencySelector/CurrencySelector";



export const SelectCurrencyWidget = ({isShowCurrencySwitcher, t}) => {
  let scrollHeight = useWindowScroll();
  const dispatch = useDispatch();

  const backButtonShouldDoState = useSelector((state) => state.showPopupsReducer.actionForBackButton);
  const actionCurrencySelector = useSelector((store) => store.currencySelectorType);

  const closeCurrenciesClickHandler = () => {
    dispatch(showCurrencySwitcher(false));
    dispatch(setCurrencySelectorType(true));
    if (backButtonShouldDoState !== null) {
      dispatch(backButtonShouldDo(false));
    }
  }

  const backButtonClickHandler = () => {
    if (backButtonShouldDoState !== false) {
      backButtonShouldDoState();
    } else {
      dispatch(showCurrencySwitcher(false));
    }
    dispatch(setCurrencySelectorType(true));
  }

  return (
    <div className={`${styles.selectCurrencyMainWrapper} ${isShowCurrencySwitcher ? "" : styles.hidden}`}>
      {/*<Header t={t}/>*/}
      <div className={`${styles.selectCurrencyMainContainer} ${scrollHeight > 100 ? styles.marginNull : ''}`}>
        <SelectorHeading
          t={t}
          backButtonClickHandler={backButtonClickHandler}
          closeCurrenciesClickHandler={closeCurrenciesClickHandler}
        />
        <CurrencySelector t={t} />

      </div>
    </div>
  )
}