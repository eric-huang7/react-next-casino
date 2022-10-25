import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {ChevronDownIcon, ChevronUpIcon} from "@chakra-ui/icons";

const CurrencyNetwork = ({
   t,
   onSelect,
   currencies = [],
   onFilter,
   isLoading,
   ...props
 }) => {
  return (
      <Menu closeOnSelect>
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
                      {...props}
                  >
                      Network
                  </MenuButton>

                  <MenuList bg="accent.890" borderRadius={12} border="none" p="10px" >
                  </MenuList>
              </>
          )}
      </Menu>
  )
}

export default CurrencyNetwork;