import styles from '../../../../styles/CurrencySelector/CurrencySelector.module.scss'
import { InputContainer } from './InputContainer'
import { CurrencyList } from './CurrencyList'
import { useState } from 'react'
import ErrorEmpty from '../../../ErrorBoundaryComponents/ErrorEmpty'

export const CurrencySelector = ({
  t,
  cryptoCurrency,
  popularCurrency,
  stableCurrency,
  fiatCurrency,
  backButtonClickHandler,
  userAuth,
  onSelect
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

    const cryptoFindArr = cryptoCurrency.filter((currency) => {
      if (searchReg.test(currency.abbreviation.toLowerCase()) || searchReg.test(currency.name.toLowerCase())) {
        return true
      } else {
        return false
      }
    })
    setCryptoFindArr(cryptoFindArr)
    const popularFindArr = popularCurrency.filter((currency) => {
      if (searchReg.test(currency.abbreviation.toLowerCase()) || searchReg.test(currency.name.toLowerCase())) {
        return true
      } else {
        return false
      }
    })
    setPopularFindArr(popularFindArr)
    const stableFindArr = stableCurrency.filter((currency) => {
      if (searchReg.test(currency.abbreviation.toLowerCase()) || searchReg.test(currency.name.toLowerCase())) {
        return true
      } else {
        return false
      }
    })
    setStableFindArr(stableFindArr)
    const fiatFindArr = fiatCurrency.filter((currency) => {
      if (searchReg.test(currency.abbreviation.toLowerCase()) || searchReg.test(currency.name.toLowerCase())) {
        return true
      } else {
        return false
      }
    })
    setFiatFindArr(fiatFindArr)

  }

  return (
    <div className={styles.currencySelectorContainerWrapper}>
      <div className={styles.currencySelectorContainer}>
        <InputContainer searchValue={searchValue} searchInputHandler={searchInputHandler} t={t}/>
        <div className={styles.currenciesListsContainer}>
          {
            popularFindArr.length === 0
              ?
              <></>
              :
              <ErrorEmpty>
                <CurrencyList
                  userAuth={userAuth}
                  backButtonClickHandler={backButtonClickHandler}
                  t={t}
                  type={t('selectCurrency.popularCrypto')}
                  currenciesData={popularFindArr}
                  onSelect={onSelect}
                />
              </ErrorEmpty>
          }
          {
            stableFindArr.length === 0
              ?
              <></>
              :
              <ErrorEmpty>
                <CurrencyList
                  userAuth={userAuth}
                  backButtonClickHandler={backButtonClickHandler}
                  t={t}
                  type={t('selectCurrency.stableCoins')}
                  currenciesData={stableFindArr}
                  onSelect={onSelect}
                />
              </ErrorEmpty>
          }
          {
            fiatFindArr.length === 0
              ?
              <></>
              :
              <ErrorEmpty>
                <CurrencyList
                  userAuth={userAuth}
                  backButtonClickHandler={backButtonClickHandler}
                  t={t}
                  type={t('selectCurrency.fiat')}
                  currenciesData={fiatFindArr}
                  onSelect={onSelect}
                />
              </ErrorEmpty>
          }
          {
            cryptoFindArr.length === 0
              ?
              <></>
              :
              <ErrorEmpty>
                <CurrencyList
                  userAuth={userAuth}
                  backButtonClickHandler={backButtonClickHandler}
                  t={t}
                  type={t('selectCurrency.cryptoCurrencies')}
                  currenciesData={cryptoFindArr}
                  onSelect={onSelect}
                />
              </ErrorEmpty>
          }
          {
            popularFindArr.length || stableFindArr.length || fiatFindArr.length || cryptoFindArr.length
              ?
              <></>
              :
              <p className={styles.nothingFoundText}>{t('selectCurrency.nothingFound')}</p>
          }
        </div>
      </div>
    </div>
  )
}
