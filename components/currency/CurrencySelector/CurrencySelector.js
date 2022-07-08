import {Text, Box, HStack} from "@chakra-ui/layout"
import {InputGroup, InputLeftElement, Input} from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons'
import {CurrencyList} from './CurrencyList'
import {useState} from 'react'
import ErrorEmpty from '../../ErrorBoundaryComponents/ErrorEmpty'

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
