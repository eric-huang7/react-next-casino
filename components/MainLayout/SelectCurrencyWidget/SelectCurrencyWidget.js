import styles from '../../../styles/CurrencySelector/CurrencySelector.module.scss';
import useWindowScroll from "../../../hooks/useWindowScroll";
import {useDispatch, useSelector} from "react-redux";
import {
  backButtonShouldDo,
  setStepDepositModal,
  showCurrencySwitcher, showMobileCryptoPayments,
  showPaymentCurrencySwitcher
} from "../../../redux/actions/showPopups";
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
import {hideRegister} from "../../../redux/actions/registerShow";
import {PaymentCurrencySelector} from "./PaymentCurrencySelector/PaymentCurrencySelector";
import {setUserPaymentMethod} from "../../../redux/actions/setUserPaymentMethod";


export const SelectCurrencyWidget = ({isShowCurrencySwitcher, isShowPaymentCurrencySwitcher, isShowMobileCryptoPayments, t}) => {
  let scrollHeight = useWindowScroll();
  const dispatch = useDispatch();

  const backButtonShouldDoState = useSelector((state) => state.showPopupsReducer.actionForBackButton);
  const actionCurrencySelector = useSelector((store) => store.currencySelectorType);
  const currencies = useSelector((store) => store.getCurrency);
  const userAuth = useSelector((store) => store.authInfo);
  const userPayment = useSelector((state) => state.userPaymentMethod);
  const userDepositValue = useSelector((state) => state.userDepositValue.value);
  const userCurrency = useSelector((state) => state.userSelectedCurrency);





  useEffect(() => {
    if (isShowCurrencySwitcher) {
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
    }

    if (isShowCurrencySwitcher || isShowPaymentCurrencySwitcher) {
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "auto"
    }
    return () => {
      document.body.style.overflowY = "auto"
    }

  }, [])
  // console.log(currencies, "<<<<<<<, currency")

  const closeCurrenciesClickHandler = () => {
    dispatch(hideRegister(false));

    if (isShowPaymentCurrencySwitcher) {
      dispatch(setUserPaymentMethod(null));
      dispatch(showPaymentCurrencySwitcher(false));
      dispatch(showMobileCryptoPayments(false));
    } else if (isShowCurrencySwitcher) {
      dispatch(showCurrencySwitcher(false));
    }
    dispatch(setStepDepositModal(1));
    dispatch(setCurrencySelectorType(true));
    if (backButtonShouldDoState !== null) {
      dispatch(backButtonShouldDo(false));
    }

  }

  const backButtonClickHandler = () => {
    if (backButtonShouldDoState !== false) {
      backButtonShouldDoState();
      dispatch(backButtonShouldDo(false));
    } else {
      if (isShowPaymentCurrencySwitcher) {
        dispatch(showPaymentCurrencySwitcher(false));
      } else if (isShowCurrencySwitcher) {
        dispatch(showCurrencySwitcher(false));
      }
    }
    dispatch(showMobileCryptoPayments(false));
    dispatch(setCurrencySelectorType(true));
  }
  if (isShowCurrencySwitcher && !isShowPaymentCurrencySwitcher) {
    if (currencies.popular_currency?.success && currencies.crypto_currency?.success && currencies.stable_currency?.success && currencies.fiat_currency?.success) {

      return (
        <div className={`${styles.selectCurrencyMainWrapper} ${isShowCurrencySwitcher ? "" : styles.hidden}`}>

          <div className={`${styles.selectCurrencyMainContainer} ${scrollHeight > 100 ? styles.marginNull : ''}`}>
            <SelectorHeading
              t={t}
              backButtonClickHandler={backButtonClickHandler}
              closeCurrenciesClickHandler={closeCurrenciesClickHandler}
              text={"selectCurrency.heading"}
            />
            <CurrencySelector
              t={t}
              popularCurrency={currencies.popular_currency.results}
              cryptoCurrency={currencies.crypto_currency.results}
              stableCurrency={currencies.stable_currency.results}
              fiatCurrency={currencies.fiat_currency.results}
              backButtonClickHandler={backButtonClickHandler}
              userAuth={userAuth.isAuthenticated}
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
  } else if (isShowPaymentCurrencySwitcher && !isShowCurrencySwitcher) {
    return (
      <div className={`${styles.selectCurrencyMainWrapper} ${isShowPaymentCurrencySwitcher ? "" : styles.hidden}`}>

        <div className={`${styles.selectCurrencyMainContainer} ${scrollHeight > 100 ? styles.marginNull : ''}`}>
          <SelectorHeading
            t={t}
            backButtonClickHandler={backButtonClickHandler}
            closeCurrenciesClickHandler={closeCurrenciesClickHandler}
            text={"selectCurrency.headingPayment"}
          />
          <PaymentCurrencySelector
            t={t}
            userPayment={userPayment}
            backButtonClickHandler={backButtonClickHandler}
            isShowMobileCryptoPayments={isShowMobileCryptoPayments}
            currencyData={currencies.currency}
            userDepositValue={userDepositValue}
            userInfo={userAuth.user}
            userCurrency={userCurrency}
          />
        </div>
      </div>
    )

  } else {
    return <></>
  }

}