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
import { useEffect } from 'react'
import {
  get_crypto_currency,
  get_fiat_currency,
  get_popular_currency,
  get_stable_currency
} from '../../../redux/currency/action'
import { LoadingComponent } from '../../LoadingComponent/LoadingComponent'
import { hideRegister } from '../../../redux/ui/action'
import { setUserPaymentMethod } from '../../../redux/userFinance/action'
import ErrorText from '../../ErrorBoundaryComponents/ErrorText'
import {CurrencySelector} from "../SelectCurrencyWidget/CurrencySelector/CurrencySelector";
import {useTranslation} from "next-i18next";

export const SelectCurrencyModal = ({
  isShow,
  onClose,
  onBack,
  onSelect,
}) => {
  let scrollHeight = useWindowScroll()
  const dispatch = useDispatch()
  const { t } = useTranslation("common")

  const backButtonShouldDoState = useSelector((state) => state.popups.actionForBackButton)
  const currencies = useSelector((store) => store.currency)
  const userAuth = useSelector((store) => store.authInfo)
  const userPayment = useSelector((state) => state.userFinance)
  const userDepositValue = useSelector((state) => state.userFinance?.depositValue)
  const userCurrency = useSelector((state) => state.userFinance)

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

  useEffect(() => {
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
  }, [])

  if (isShow) {
    if (currencies.popular_currency?.success && currencies.crypto_currency?.success && currencies.stable_currency?.success && currencies.fiat_currency?.success) {

      return (
        <div className={`${styles.selectCurrencyMainWrapper}`}>

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
                onSelect={onSelect}
                userAuth={userAuth.isAuthenticated}
              />
            </ErrorText>
          </div>
        </div>
      )
    } else {
      return (
        <div className={`${styles.selectCurrencyMainWrapper}`}>
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
  }

}
