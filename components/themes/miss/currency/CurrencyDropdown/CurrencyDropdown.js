import {Text, Box} from "@chakra-ui/layout"
import {useState} from 'react'
import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {ChevronDownIcon, ChevronUpIcon} from "@chakra-ui/icons";
import SearchInput from "../CurrencySelector/SearchInput";
import ErrorEmpty from "/components/ErrorBoundaryComponents/ErrorEmpty";
import CurrencyDropdownItem from "./CurrencyDropdownItem";
import {getTheme} from "../../../../../helpers/theme";

const {thinScroll} = getTheme();

const CurrencyDropdown = ({
   t,
   onSelect,
   currencies = [],
   onFilter,
   isLoading,
   value
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
      <Menu closeOnSelect onChange={onSelect}>
          {({ isOpen }) => (
              <>
                  <MenuButton
                      isLoading={isLoading}
                      as={Button}
                      minW="260px"
                      h={54}
                      pl="15px"
                      pr="6px"
                      rightIcon={isOpen
                          ? <ChevronUpIcon w={7} h={7} color="text.950" />
                          : <ChevronDownIcon w={7} h={7} color="text.950" />
                      }
                      bg="primary.300"
                      color="text.950"
                      borderRadius={12}
                      textAlign="left"
                      fontWeight={400}

                      _hover={{bg: "primary.300", color: "text.950"}}
                      _active={{bg: "primary.300", color: "text.950"}}
                  >
                    {value
                      ? <CurrencyDropdownItem currencyData={value} />
                      : <Text fontSize={17} fontFamily="Montserrat">Currency</Text>
                    }
                  </MenuButton>

                  <MenuList minW="240px" bg="primary.300" borderRadius={12} border="none" p="10px">
                      <SearchInput placeholder={t("selectCurrency.searchPlaceholder")} value={searchValue}
                                   onChange={searchInputHandler} pb="20px"/>
                      <Box maxH="200px" overflowY="auto" css={thinScroll}>
                          {currencies.map((item, index) => item.list?.length > 0 ? (
                              <>
                                  {item.title && <MenuItem
                                    key={index}
                                    px="0"
                                    w="calc(100% - 10px)"
                                    _hover={{backgroundColor: 'transparent'}}
                                    _active={{backgroundColor: 'transparent'}}
                                    _focus={{backgroundColor: 'transparent'}}
                                    bg={`transparent url('/assets/img/currency/line.svg') repeat-x center`}
                                  >
                                      <Text pl="15px" pr="20px" as="span" bg="primary.300" color="primary.900" fontSize={16}>
                                        {item.title}
                                      </Text>
                                  </MenuItem>}
                                  {item.list?.map((currencyData) => (<MenuItem
                                    key={index}
                                    px={0}
                                    _hover={{bg: 'transparent'}}
                                    _active={{bg: 'transparent'}}
                                    _focus={{bg: 'transparent'}}
                                  >
                                      <ErrorEmpty key={`${currencyData.id} currency`}>
                                          <CurrencyDropdownItem
                                              currencyData={currencyData}
                                              onClick={() => onSelect(currencyData)}
                                              size={8}
                                              pl="12px"
                                              pr="6px"
                                              border
                                              pointer
                                          />
                                      </ErrorEmpty>
                                  </MenuItem>))}
                              </>
                          ) : null)}
                          {isEmpty() &&
                          <MenuItem
                            justifyContent="center"
                            _hover={{bg: 'transparent'}}
                            _active={{bg: 'transparent'}}
                            _focus={{bg: 'transparent'}}
                          >
                              <Text fontSize={18} fontWeight={600} color="text.300" maxW={200} textAlign="center">
                                  {t('selectCurrency.nothingFound')}
                              </Text>
                          </MenuItem>
                        }
                      </Box>
                  </MenuList>
              </>
          )}
      </Menu>
  )
}

export default CurrencyDropdown;