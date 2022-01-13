import styles from '../../../styles/CurrencySelector/CurrencySelector.module.scss';
import useWindowScroll from "../../../hooks/useWindowScroll";
import {useDispatch, useSelector} from "react-redux";
import {backButtonShouldDo, showCurrencySwitcher} from "../../../redux/actions/showPopups";
import {setCurrencySelectorType} from "../../../redux/actions/setSelectedCurrency";
import {SelectorHeading} from "./SelectorHeading";
import {CurrencySelector} from "./CurrencySelector/CurrencySelector";
import {useEffect} from "react";
import {
  get_crypto_currency,
  get_fiat_currency,
  get_popular_currency,
  get_stable_currency
} from "../../../redux/actions/currency";
import {LoadingComponent} from "../../LoadingComponent/LoadingComponent";



export const SelectCurrencyWidget = ({isShowCurrencySwitcher, t}) => {
  let scrollHeight = useWindowScroll();
  const dispatch = useDispatch();

  const backButtonShouldDoState = useSelector((state) => state.showPopupsReducer.actionForBackButton);
  const actionCurrencySelector = useSelector((store) => store.currencySelectorType);
  const currencies = useSelector((store) => store.getCurrency);
  const userAuth = useSelector((store) => store.authInfo.isAuthenticated);


  useEffect(() => {
    if (currencies.loading_popular_currency && !currencies.popular_currency?.success) {
      dispatch(get_popular_currency());
    }
    if (currencies.loading_crypto_currency && !currencies.crypto_currency?.success) {
      dispatch(get_crypto_currency());
    }
    if (currencies.loading_stable_currency && !currencies.stable_currency?.success) {
      dispatch(get_stable_currency());
    }
    if (currencies.loading_fiat_currency && !currencies.fiat_currency?.success) {
      dispatch(get_fiat_currency());
    }
  }, [])
  // console.log(currencies, "<<<<<<<, currency")

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

  if (currencies.popular_currency?.success && currencies.crypto_currency?.success && currencies.stable_currency?.success && currencies.fiat_currency?.success) {

    return (
      <div className={`${styles.selectCurrencyMainWrapper} ${isShowCurrencySwitcher ? "" : styles.hidden}`}>
        {/*<Header t={t}/>*/}
        <div className={`${styles.selectCurrencyMainContainer} ${scrollHeight > 100 ? styles.marginNull : ''}`}>
          <SelectorHeading
            t={t}
            backButtonClickHandler={backButtonClickHandler}
            closeCurrenciesClickHandler={closeCurrenciesClickHandler}
          />
          <CurrencySelector
            t={t}
            popularCurrency={currencies.popular_currency.results}
            cryptoCurrency={currencies.crypto_currency.results}
            stableCurrency={currencies.stable_currency.results}
            fiatCurrency={currencies.fiat_currency.results}
            backButtonClickHandler={backButtonClickHandler}
            userAuth={userAuth}
          />
        </div>
      </div>
    )
  } else {
    return (
      <div className={`${styles.selectCurrencyMainWrapper} ${isShowCurrencySwitcher ? "" : styles.hidden}`}>
        {/*<Header t={t}/>*/}
        <div className={`${styles.selectCurrencyMainContainer} ${scrollHeight > 100 ? styles.marginNull : ''}`}>
          <SelectorHeading
            t={t}
            backButtonClickHandler={backButtonClickHandler}
            closeCurrenciesClickHandler={closeCurrenciesClickHandler}
          />
          <LoadingComponent t={t}/>
        </div>
      </div>
    )
  }


}