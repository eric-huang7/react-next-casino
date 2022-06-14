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

export const SelectCurrencyReusableWidget = ({
  isShowCurrencySwitcher,
  onClose,
  onBack,
  onSelect,
  t
}) => {
  let scrollHeight = useWindowScroll()
  const dispatch = useDispatch()

  const currencies = useSelector((store) => store.currency)
  const userAuth = useSelector((store) => store.authInfo)

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
  }, [isShowCurrencySwitcher])

  if (isShowCurrencySwitcher) {
    if (currencies.popular_currency?.success && currencies.crypto_currency?.success && currencies.stable_currency?.success && currencies.fiat_currency?.success) {

      return (
        <div className={`${styles.selectCurrencyMainWrapper} ${isShowCurrencySwitcher ? '' : styles.hidden}`}>

          <div className={`${styles.selectCurrencyMainContainer} ${scrollHeight > 100 ? styles.marginNull : ''}`}>
            <ErrorText>
              <SelectorHeading
                t={t}
                backButtonClickHandler={onBack}
                closeCurrenciesClickHandler={onClose}
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
                backButtonClickHandler={onBack}
                userAuth={userAuth.isAuthenticated}
                onSelect={onSelect}
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
                backButtonClickHandler={onBack}
                closeCurrenciesClickHandler={onClose}
              />
            </ErrorText>
            <LoadingComponent t={t}/>
          </div>
        </div>
      )
    }
  } else {
    return <></>
  }

}
