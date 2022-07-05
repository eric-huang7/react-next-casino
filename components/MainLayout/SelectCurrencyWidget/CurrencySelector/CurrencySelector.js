import styles from '../../../../styles/CurrencySelector/CurrencySelector.module.scss'
import {InputContainer} from './InputContainer'
import {CurrencyList} from './CurrencyList'
import {useState} from 'react'
import ErrorEmpty from '../../../ErrorBoundaryComponents/ErrorEmpty'

export const CurrencySelector = ({
                                   t,
                                   cryptoCurrency,
                                   popularCurrency,
                                   stableCurrency,
                                   fiatCurrency,
                                   backButtonClickHandler,
                                   userAuth
                                 }) => {
  const [searchValue, setSearchValue] = useState('')

  const [cryptoFindArr, setCryptoFindArr] = useState(cryptoCurrency)
  const [popularFindArr, setPopularFindArr] = useState(popularCurrency)
  const [stableFindArr, setStableFindArr] = useState(stableCurrency)
  const [fiatFindArr, setFiatFindArr] = useState(fiatCurrency)

  const searchInputHandler = (value) => {
    setSearchValue(value)

    cryptoFinder(value)
  }

  const cryptoFinder = (value) => {
    let searchReg = new RegExp(value.toLowerCase().trim())

    const cryptoFindArr = cryptoCurrency.filter((currency) =>
      searchReg.test(currency.abbreviation.toLowerCase()) || searchReg.test(currency.name.toLowerCase())
    )
    setCryptoFindArr(cryptoFindArr)

    const popularFindArr = popularCurrency.filter((currency) =>
      searchReg.test(currency.abbreviation.toLowerCase()) || searchReg.test(currency.name.toLowerCase())
    )
    setPopularFindArr(popularFindArr)

    const stableFindArr = stableCurrency.filter((currency) =>
      searchReg.test(currency.abbreviation.toLowerCase()) || searchReg.test(currency.name.toLowerCase())
    )
    setStableFindArr(stableFindArr)

    const fiatFindArr = fiatCurrency.filter((currency) =>
      searchReg.test(currency.abbreviation.toLowerCase()) || searchReg.test(currency.name.toLowerCase())
    )
    setFiatFindArr(fiatFindArr)
  }

  return (
    <div className={styles.currencySelectorContainerWrapper}>
      <div className={styles.currencySelectorContainer}>
        <InputContainer searchValue={searchValue} searchInputHandler={searchInputHandler} t={t}/>
        <div className={styles.currenciesListsContainer}>
          {popularFindArr.length > 0 && <ErrorEmpty>
            <CurrencyList
              userAuth={userAuth}
              backButtonClickHandler={backButtonClickHandler}
              type={t('selectCurrency.popularCrypto')}
              currenciesData={popularFindArr}
            />
          </ErrorEmpty>}
          {stableFindArr.length > 0 && <ErrorEmpty>
            <CurrencyList
              userAuth={userAuth}
              backButtonClickHandler={backButtonClickHandler}
              type={t('selectCurrency.stableCoins')}
              currenciesData={stableFindArr}
            />
          </ErrorEmpty>}
          {fiatFindArr.length > 0 && <ErrorEmpty>
            <CurrencyList
              userAuth={userAuth}
              backButtonClickHandler={backButtonClickHandler}
              type={t('selectCurrency.fiat')}
              currenciesData={fiatFindArr}
            />
          </ErrorEmpty>}
          {cryptoFindArr.length > 0 && <ErrorEmpty>
            <CurrencyList
              userAuth={userAuth}
              backButtonClickHandler={backButtonClickHandler}
              type={t('selectCurrency.cryptoCurrencies')}
              currenciesData={cryptoFindArr}
            />
          </ErrorEmpty>}
          {!(popularFindArr.length || stableFindArr.length || fiatFindArr.length || cryptoFindArr.length) &&
          <p className={styles.nothingFoundText}>{t('selectCurrency.nothingFound')}</p>}
        </div>
      </div>
    </div>
  )
}
