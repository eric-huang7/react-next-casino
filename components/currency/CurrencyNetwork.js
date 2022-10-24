import {Text, Box, HStack} from "@chakra-ui/layout"
import {useLayoutEffect, useRef, useState} from 'react'
import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {ChevronDownIcon, ChevronUpIcon} from "@chakra-ui/icons";
import SearchInput from "./CurrencySelector/SearchInput";
import ErrorEmpty from "../ErrorBoundaryComponents/ErrorEmpty";
import {CurrencyList} from "./CurrencySelector/CurrencyList";
import {CurrencyItem} from "./CurrencySelector/CurrencyItem";
import {thinScroll} from "../../styles/theme";

const CurrencyNetwork = ({
   t,
   onBack,
   onSelect,
   userAuth,
   currencies = [],
   onFilter,
   isLoading
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
      <Menu>
          {({ isOpen }) => (
              <>
                  <MenuButton
                      isLoading={isLoading}
                      as={Button}
                      // minW="260px"
                      h={54}
                      pl="15px"
                      pr="6px"
                      rightIcon={isOpen
                          ? <ChevronUpIcon w={7} h={7} color="white" />
                          : <ChevronDownIcon w={7} h={7} color="white" />
                      }
                      bg="accent.890"
                      color="white"
                      borderRadius={12}
                      textAlign="left"
                      _hover={{bg: "accent.890", color: "white"}}
                      _active={{bg: "accent.890", color: "white"}}
                  >
                      Network
                  </MenuButton>

                  <MenuList bg="accent.890" borderRadius={12} border="none" p="10px">
                  </MenuList>
              </>
          )}
      </Menu>
  )
}

export default CurrencyNetwork;