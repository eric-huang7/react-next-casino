import styles from '../../../styles/CurrencySelector/CurrencySelector.module.scss'
import useWindowScroll from '../../../hooks/useWindowScroll'
import { useDispatch, useSelector } from 'react-redux'
import {
  backButtonShouldDo,
  setStepDepositModal,
  showCurrencySwitcher, showMobileCryptoPayments,
  showPaymentCurrencySwitcher
} from '../../../redux/popups/action'
import { setCurrencySelectorType } from '../../../redux/userFinance/action'
import { SelectorHeading } from './SelectorHeading'
import { CurrencySelector } from './CurrencySelector/CurrencySelector'
import { useEffect } from 'react'
import {
  get_crypto_currency,
  get_fiat_currency,
  get_popular_currency,
  get_stable_currency
} from '../../../redux/currency/action'
import { LoadingComponent } from '../../LoadingComponent/LoadingComponent'
import { hideRegister } from '../../../redux/ui/action'
import { PaymentCurrencySelector } from './PaymentCurrencySelector/PaymentCurrencySelector'
import { setUserPaymentMethod } from '../../../redux/userFinance/action'
import ErrorText from '../../ErrorBoundaryComponents/ErrorText'

export const SelectCurrencyWidget = ({
  isShowCurrencySwitcher,
  isShowPaymentCurrencySwitcher,
  isShowMobileCryptoPayments,
  t
}) => {
  let scrollHeight = useWindowScroll()
  const dispatch = useDispatch()

  const backButtonShouldDoState = useSelector((state) => state.popups.actionForBackButton)
  const currencies = useSelector((store) => store.currency)
  const userAuth = useSelector((store) => store.authInfo)
  const userPayment = useSelector((state) => state.userPaymentMethod)
  const userDepositValue = useSelector((state) => state.userFinance?.depositValue)
  const userCurrency = useSelector((state) => state.userFinance)


  useEffect(() => {
    if (isShowCurrencySwitcher) {
      if (currencies.loading_popular_currency && !currencies.popular_currency?.success) {
        dispatch(get_popular_currency())
      }
      if (currencies.loading_crypto_currency && !currencies.crypto_currency?.success) {
        dispatch(get_crypto_currency())
      }
      if (currencies.loading_stable_currency && !currencies.stable_currency?.success) {
        dispatch(get_stable_currency())
      }
      if (currencies.loading_fiat_currency && !currencies.fiat_currency?.success) {
        dispatch(get_fiat_currency())
      }
    }
  }, [])

  const closeCurrenciesClickHandler = () => {
    dispatch(hideRegister(false))

    if (isShowPaymentCurrencySwitcher) {
      dispatch(setUserPaymentMethod(null))
      dispatch(showPaymentCurrencySwitcher(false))
      dispatch(showMobileCryptoPayments(false))
    } else if (isShowCurrencySwitcher) {
      dispatch(showCurrencySwitcher(false))
    }
    dispatch(setStepDepositModal(1))
    dispatch(setCurrencySelectorType(true))
    if (backButtonShouldDoState !== null) {
      dispatch(backButtonShouldDo(false))
    }

  }

  const backButtonClickHandler = () => {
    if (backButtonShouldDoState !== false) {
      backButtonShouldDoState()
      dispatch(backButtonShouldDo(false))
    } else {
      if (isShowPaymentCurrencySwitcher) {
        dispatch(showPaymentCurrencySwitcher(false))
      } else if (isShowCurrencySwitcher) {
        dispatch(showCurrencySwitcher(false))
      } else {
        dispatch(showPaymentCurrencySwitcher(false))
        dispatch(showCurrencySwitcher(false))
      }
    }
    dispatch(showMobileCryptoPayments(false))
    dispatch(setCurrencySelectorType(true))
  }
  if (isShowCurrencySwitcher && !isShowPaymentCurrencySwitcher) {
    if (currencies.popular_currency?.success && currencies.crypto_currency?.success && currencies.stable_currency?.success && currencies.fiat_currency?.success) {

      return (
        <div className={`${styles.selectCurrencyMainWrapper} ${isShowCurrencySwitcher ? '' : styles.hidden}`}>

          <div className={`${styles.selectCurrencyMainContainer} ${scrollHeight > 100 ? styles.marginNull : ''}`}>
            <ErrorText>
              <SelectorHeading
                t={t}
                backButtonClickHandler={backButtonClickHandler}
                closeCurrenciesClickHandler={closeCurrenciesClickHandler}
                text={'selectCurrency.heading'}
              />
            </ErrorText>
            <ErrorText>
              <CurrencySelector
                t={t}
                popularCurrency={currencies.popular_currency.results}
                cryptoCurrency={currencies.crypto_currency.results}
                stableCurrency={currencies.stable_currency.results}
                fiatCurrency={currencies.fiat_currency.results}
                backButtonClickHandler={backButtonClickHandler}
                userAuth={userAuth.isAuthenticated}
              />
            </ErrorText>
          </div>
        </div>
      )
    } else {
      return (
        <div className={`${styles.selectCurrencyMainWrapper} ${isShowCurrencySwitcher ? '' : styles.hidden}`}>
          <div className={`${styles.selectCurrencyMainContainer} ${scrollHeight > 100 ? styles.marginNull : ''}`}>
            <ErrorText>
              <SelectorHeading
                t={t}
                backButtonClickHandler={backButtonClickHandler}
                closeCurrenciesClickHandler={closeCurrenciesClickHandler}
              />
            </ErrorText>
            <LoadingComponent t={t}/>
          </div>
        </div>
      )
    }
  } else if (isShowPaymentCurrencySwitcher && !isShowCurrencySwitcher) {
    return (
      <div className={`${styles.selectCurrencyMainWrapper} ${isShowPaymentCurrencySwitcher ? '' : styles.hidden}`}>

        <div className={`${styles.selectCurrencyMainContainer} ${scrollHeight > 100 ? styles.marginNull : ''}`}>
          <ErrorText>
            <SelectorHeading
              t={t}
              backButtonClickHandler={backButtonClickHandler}
              closeCurrenciesClickHandler={closeCurrenciesClickHandler}
              text={'selectCurrency.headingPayment'}
            />
          </ErrorText>
          <ErrorText>
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
          </ErrorText>
        </div>
      </div>
    )

  } else {
    return <></>
  }

}
