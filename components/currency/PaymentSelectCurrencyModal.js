import {useDispatch, useSelector} from 'react-redux'
import {useTranslation} from "next-i18next";
import {useEffect, useRef, useState} from 'react'
import {
  get_crypto_currency,
  get_fiat_currency,
  get_popular_currency,
  get_stable_currency
} from '../../redux/currency/action'
import {LoadingComponent} from '../LoadingComponent/LoadingComponent'
import ErrorText from '../ErrorBoundaryComponents/ErrorText'
import {SelectModal} from "./SelectModal";
import {PaymentCurrencySelector} from "./PaymentCurrencySelector/PaymentCurrencySelector";

const PaymentSelectCurrencyModal = ({ isOpen, onClose, onBack, onSelect }) => {
  const {t} = useTranslation("common")
  const dispatch = useDispatch()
  const wrapperRef = useRef();
  const [height, setHeight] = useState(0)

  const userPayment = useSelector((state) => state.userFinance)
  const currencies = useSelector((store) => store.currency)
  const userAuth = useSelector((store) => store.authInfo)
  const userDepositValue = useSelector((state) => state.userFinance?.depositValue)
  const userCurrency = useSelector((state) => state.userFinance)

  useEffect(() => {
    if (currencies?.loading_popular_currency && !currencies?.popular_currency?.success) {
      dispatch(get_popular_currency())
    }
    if (currencies?.loading_crypto_currency && !currencies?.crypto_currency?.success) {
      dispatch(get_crypto_currency())
    }
    if (currencies?.loading_stable_currency && !currencies?.stable_currency?.success) {
      dispatch(get_stable_currency())
    }
    if (currencies?.loading_fiat_currency && !currencies?.fiat_currency?.success) {
      dispatch(get_fiat_currency())
    }
  }, [])

  const isLoading = !(currencies?.popular_currency?.success
    && currencies?.crypto_currency?.success
    && currencies?.stable_currency?.success
    && currencies?.fiat_currency?.success)

  useEffect(() => {
    if (wrapperRef?.current?.offsetHeight > 0) {
      setHeight(wrapperRef?.current?.offsetHeight)
    }
  }, [wrapperRef?.current?.offsetHeight, height])

  return (<SelectModal
    isOpen={isOpen}
    onClose={onClose}
    onBack={onBack}
    wrapperRef={wrapperRef}
    title={t('selectCurrency.heading')}
  >
    <ErrorText>
      {isLoading || !height
        ? <LoadingComponent t={t}/>
        : <PaymentCurrencySelector
          t={t}
          userPayment={userPayment}
          backButtonClickHandler={onBack}
          isShowMobileCryptoPayments={isOpen}
          currencyData={currencies.currency}
          userDepositValue={userDepositValue}
          userInfo={userAuth.user}
          userCurrency={userCurrency}
          onSelect={onSelect}
          parentHeight={height}
        />
      }
    </ErrorText>
  </SelectModal>)
}

export default PaymentSelectCurrencyModal;
