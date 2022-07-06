import {Text, Box, HStack} from "@chakra-ui/layout"
import {InputGroup, InputLeftElement, Input} from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons'
import {CurrencyList} from './CurrencyList'
import {useState} from 'react'
import ErrorEmpty from '../ErrorBoundaryComponents/ErrorEmpty'

export const CurrencySelector = ({
                                   t,
                                   cryptoCurrency,
                                   popularCurrency,
                                   stableCurrency,
                                   fiatCurrency,
                                   backButtonClickHandler,
                                   onSelect,
                                   userAuth,
                                   parentHeight
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
    <Box px="20px" py="16px">
      <Box
        bg="#fcfcfc"
        border="1px solid #cad2d8"
        borderRadius="10px"
      >
        <InputGroup>
          <InputLeftElement pointerEvents='none' fontSize={18} h="50px">
            <SearchIcon color="text.200" opacity={.5}/>
          </InputLeftElement>
          <Input
            h="50px"
            type="text"
            placeholder={t("selectCurrency.searchPlaceholder")}
            _placeholder={{ opacity: .6, fontWeight: 600, fontSize: 18, color: "text.150" }}
            border="none"
            focusBorderColor="transparent"
            fontSize={18}
            fontWeight={600}
            color="text.300"
            value={searchValue}
            onChange={(e) => searchInputHandler(e.target.value)}
          />
        </InputGroup>

        <Box
          h={`${parentHeight - 148}px`}
          overflowY="auto"
          css={{
            scrollbarColor: "#fda3a2 #dcdcdc",
            scrollbarWidth: "thin",
          }}
        >
          {allArr.map((item, index) => item.list?.length > 0 ? (
            <ErrorEmpty key={index}>
              <CurrencyList
                userAuth={userAuth}
                backButtonClickHandler={backButtonClickHandler}
                type={item.title}
                currenciesData={item.list}
                onSelect={onSelect}
              />
            </ErrorEmpty>
          ) : null)}

          {!(popularFindArr?.length || stableFindArr?.length || fiatFindArr?.length || cryptoFindArr?.length) &&
            <HStack justifyContent="center">
              <Text fontSize={18} fontWeight={600} color="text.300" maxW={200} textAlign="center">
                {t('selectCurrency.nothingFound')}
              </Text>
            </HStack>
          }
        </Box>
      </Box>
    </Box>
  )
}
