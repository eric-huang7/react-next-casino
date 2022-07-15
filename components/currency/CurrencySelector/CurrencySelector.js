import {Text, Box, HStack} from "@chakra-ui/layout"
import {InputGroup, InputLeftElement, Input} from "@chakra-ui/react"
import {SearchIcon} from '@chakra-ui/icons'
import {CurrencyList} from './CurrencyList'
import {useState} from 'react'
import ErrorEmpty from '../../ErrorBoundaryComponents/ErrorEmpty'
import SearchInput from "./SearchInput";

export const CurrencySelector = ({
                                   t,
                                   onBack,
                                   onSelect,
                                   userAuth,
                                   currencies = [],
                                   onFilter,
                                   parentHeight
                                 }) => {
  const [searchValue, setSearchValue] = useState('')

  const searchInputHandler = (value) => {
    setSearchValue(value)
    onFilter(value)
  }

  const isEmpty = () => {
    let empty = true

    currencies?.forEach(item => {
      if (item.list?.length > 0) {
        empty = false
      }
    })

    return empty;
  }

  console.log('currencies', currencies)
  return (
    <Box px="20px" py="16px">
      <Box
        bg="#fcfcfc"
        border="1px solid #cad2d8"
        borderRadius="10px"
      >
        <SearchInput placeholder={t("selectCurrency.searchPlaceholder")} value={searchValue}
                     onChange={searchInputHandler}/>

        <Box
          h={`${parentHeight - 148}px`}
          overflowY="auto"
          css={{
            scrollbarColor: "scroll.100 scroll.500",
            scrollbarWidth: "thin",
          }}
        >
          {currencies.map((item, index) => item.list?.length > 0 ? (
            <ErrorEmpty key={index}>
              <CurrencyList
                userAuth={userAuth}
                onBack={onBack}
                subtitle={item.title}
                currenciesData={item.list}
                onSelect={onSelect}
              />
            </ErrorEmpty>
          ) : null)}

          {isEmpty() &&
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
