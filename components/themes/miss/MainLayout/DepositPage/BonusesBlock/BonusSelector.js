import {useState} from "react";
import {ChevronDownIcon, ChevronUpIcon} from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import {Button} from "@chakra-ui/button";

const bonuses = [
  {id: 1, name: 'First 10'},
  {id: 2, name: 'First 20'},
  {id: 3, name: 'First 30'},
  {id: 4, name: 'First 40'},
  {id: 5, name: 'First 50'},
]

const Item = ({ children, ...props}) => <MenuItem
  px="0"
  color="white"
  w="calc(100% - 10px)"
  _hover={{backgroundColor: 'transparent'}}
  _active={{backgroundColor: 'transparent'}}
  _focus={{backgroundColor: 'transparent'}}
  {...props}
>{children}</MenuItem>

const BonusSelector = ({onChange}) => {
  const [isEmpty, setIsEmpty] = useState(false);

  return <Menu onChange={onChange} closeOnSelect  border="1px solid #B37776">
    {({ isOpen }) => (
      <>
        <MenuButton
          as={Button}
          rightIcon={bonuses?.length > 1 && <ChevronDownIcon w={8} h={8} color="white" />}
          h="54px"
          w="100%"
          bg="#BD6D86"
          color="white"
          border="1px solid"
          borderRadius="12px"
          borderColor="#BD6D86"
          alignItems="center"
          justifyContent="flex-start"
          borderBottomRightRadius={isOpen ? 0 : 12}
          borderBottomLeftRadius={isOpen ? 0 : 12}
          _hover={{bg: '#BD6D86'}}
          _focus={{bg: '#BD6D86'}}
          _active={{bg: '#BD6D86'}}
          overflow="hidden"
          spacing={0}
          px="12px"
        >
          Select your bonus code
        </MenuButton>
        <MenuList
          mt="-9px"
          w={{base: "calc(100vw - 68px)", lg: "460px"}}
          maxW={{base: "calc(100wv - 68px)", lg: "460px"}}
          bg="#BD6D86"
          border="none"
          borderRadius="0"
          borderBottomRightRadius={12}
          borderBottomLeftRadius={12}
          borderColor="#C9899D"
          p="10px"
        >
          {bonuses.map((el) => (<Item key={`${el.id} bonus`} borderTopColor="#C9899D" borderTop="1px solid #C9899D">
            {el.name}
            </Item>)
          )}
        </MenuList>
      </>
    )}
  </Menu>
}

export default BonusSelector;