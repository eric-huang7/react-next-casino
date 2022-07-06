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

import {CurrencySelector} from "./CurrencySelector";
import {SelectModal} from "./SelectModal";

export const SelectCurrencyModal = ({ isOpen, onClose, onBack, onSelect }) => {
  const {t} = useTranslation("common")
  const dispatch = useDispatch()
  const wrapperRef = useRef();
  const [height, setHeight] = useState(0)

  const currencies = useSelector((store) => store.currency)
  const userAuth = useSelector((store) => store.authInfo)

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
        : <CurrencySelector
          t={t}
          popularCurrency={currencies?.popular_currency?.results}
          cryptoCurrency={currencies?.crypto_currency?.results}
          stableCurrency={currencies?.stable_currency?.results}
          fiatCurrency={currencies?.fiat_currency?.results}
          backButtonClickHandler={onBack}
          onSelect={onSelect}
          userAuth={userAuth.isAuthenticated}
          parentHeight={height}
        />
      }
    </ErrorText>
  </SelectModal>)
}
