import {Text, Box} from "@chakra-ui/layout"
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
                                   onSelect,
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

  const allArr = [
    {list: popularFindArr, title: t('selectCurrency.popularCrypto')},
    {list: stableFindArr, title: t('selectCurrency.stableCoins')},
    {list: fiatFindArr, title: t('selectCurrency.fiat')},
    {list: cryptoFindArr, title: t('selectCurrency.cryptoCurrencies')},
  ]

  return (
    <Box px="20px">
      <div className={styles.currencySelectorContainer}>
        <InputContainer searchValue={searchValue} searchInputHandler={searchInputHandler} t={t}/>
        <div className={styles.currenciesListsContainer}>
          {allArr.map((item, index) => item.list?.length > 0 ? (
            <ErrorEmpty>
              <CurrencyList
                userAuth={userAuth}
                backButtonClickHandler={backButtonClickHandler}
                type={item.title}
                currenciesData={popularFindArr}
                onSelect={onSelect}
              />
            </ErrorEmpty>
          ) : null)}
          {!(popularFindArr.length || stableFindArr.length || fiatFindArr.length || cryptoFindArr.length) &&
          <p>
            <Text fontSize={18} fontWeight={600} color="text.300" textAlign="center">
              {t('selectCurrency.nothingFound')}
            </Text>
          </p>}
        </div>
      </div>
    </Box>
  )
}
