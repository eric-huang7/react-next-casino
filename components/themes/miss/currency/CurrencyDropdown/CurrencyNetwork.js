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
                          ? <ChevronUpIcon w={7} h={7} color="text.950" />
                          : <ChevronDownIcon w={7} h={7} color="text.950" />
                      }
                      bg="primary.300"
                      color="text.950"
                      borderRadius={12}
                      fontWeight={400}
                      textAlign="left"
                      _hover={{bg: "primary.300", color: "text.950"}}
                      _active={{bg: "primary.300", color: "text.950"}}
                      {...props}
                  >
                    <Text fontSize={17} fontFamily="Montserrat">Network</Text>
                  </MenuButton>

                  <MenuList bg="primary.300" borderRadius={12} border="none" p="10px" >
                  </MenuList>
              </>
          )}
      </Menu>
  )
}

export default CurrencyNetwork;