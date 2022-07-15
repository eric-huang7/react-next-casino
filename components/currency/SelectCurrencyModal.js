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

import {CurrencySelector} from "./CurrencySelector/CurrencySelector";
import SelectModal from "../modal/SelectModal";

export const SelectCurrencyModal = ({ isOpen, onClose, onBack, onSelect }) => {
  const {t} = useTranslation("common")
  const dispatch = useDispatch()
  const wrapperRef = useRef();
  const [height, setHeight] = useState(0)
  const [cryptoFindArr, setCryptoFindArr] = useState([])
  const [popularFindArr, setPopularFindArr] = useState([])
  const [stableFindArr, setStableFindArr] = useState([])
  const [fiatFindArr, setFiatFindArr] = useState([])

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
    cryptoFinder()
  }, [currencies])

  useEffect(() => {
    if (wrapperRef?.current?.offsetHeight > 0) {
      setHeight(wrapperRef?.current?.offsetHeight)
    }
  }, [wrapperRef?.current?.offsetHeight, height])

  const cryptoFinder = (value = '') => {
    let searchReg = new RegExp(value.toLowerCase().trim())

    const cryptoFindArr = currencies?.crypto_currency?.results?.filter((currency) =>
      searchReg.test(currency.abbreviation.toLowerCase()) || searchReg.test(currency.name.toLowerCase())
    )
    setCryptoFindArr(cryptoFindArr)

    const popularFindArr = currencies?.popular_currency?.results?.filter((currency) =>
      searchReg.test(currency.abbreviation.toLowerCase()) || searchReg.test(currency.name.toLowerCase())
    )
    setPopularFindArr(popularFindArr)

    const stableFindArr = currencies?.stable_currency?.results?.filter((currency) =>
      searchReg.test(currency.abbreviation.toLowerCase()) || searchReg.test(currency.name.toLowerCase())
    )
    setStableFindArr(stableFindArr)

    const fiatFindArr = currencies?.fiat_currency?.results?.filter((currency) =>
      searchReg.test(currency.abbreviation.toLowerCase()) || searchReg.test(currency.name.toLowerCase())
    )
    setFiatFindArr(fiatFindArr)
  }

  const getCurrencies = () => [
    {list: popularFindArr, title: t('selectCurrency.popularCrypto')},
    {list: stableFindArr, title: t('selectCurrency.stableCoins')},
    {list: fiatFindArr, title: t('selectCurrency.fiat')},
    {list: cryptoFindArr, title: t('selectCurrency.cryptoCurrencies')},
  ]

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
          currencies={getCurrencies()}
          backButtonClickHandler={onBack}
          onSelect={onSelect}
          userAuth={userAuth.isAuthenticated}
          parentHeight={height}
          onFilter={cryptoFinder}
        />
      }
    </ErrorText>
  </SelectModal>)
}
