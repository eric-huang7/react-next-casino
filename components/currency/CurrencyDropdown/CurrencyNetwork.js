import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {ChevronDownIcon, ChevronUpIcon} from "@chakra-ui/icons";
import {Text} from "@chakra-ui/layout";

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
                      fontWeight={400}
                      textAlign="left"
                      _hover={{bg: "accent.890", color: "white"}}
                      _active={{bg: "accent.890", color: "white"}}
                      {...props}
                  >
                    <Text fontSize={17} fontFamily="Montserrat">Network</Text>
                  </MenuButton>

                  <MenuList bg="accent.890" borderRadius={12} border="none" p="10px" >
                  </MenuList>
              </>
          )}
      </Menu>
  )
}

export default CurrencyNetwork;