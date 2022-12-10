import {Text, Box, HStack} from "@chakra-ui/layout"
import {CurrencyList} from './CurrencyList'
import {useLayoutEffect, useRef, useState} from 'react'
import ErrorEmpty from '/components/ErrorBoundaryComponents/ErrorEmpty'
import SearchInput from "./SearchInput";
import {getTheme} from "../../../../../helpers/theme";

const {thinScroll} = getTheme();

export const CurrencySelector = ({
                                   t,
                                   onBack,
                                   onSelect,
                                   userAuth,
                                   currencies = [],
                                   onFilter,
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

  return (
    <Box px="20px" py="16px" h="100%">
      <Box
        bg="#fcfcfc"
        border="1px solid #cad2d8"
        borderRadius="10px"
        h="100%"
      >
        <SearchInput placeholder={t("selectCurrency.searchPlaceholder")} value={searchValue}
                     onChange={searchInputHandler}/>
        <Box
          h="calc(100% - 55px)"
          overflowY="auto"
          css={thinScroll}
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
