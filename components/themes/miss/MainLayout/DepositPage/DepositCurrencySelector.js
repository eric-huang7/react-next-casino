import {ChevronDownIcon} from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react'

const DepositCurrencySelector = ({
  t,
  currencySwitcherShowHandler,
  userCurrency,
  userDepositValue,
  depositValueInputHandler,
  userDepositValueError
}) => {
  const handleChange = (e) => {
    const value = e.target.value.replace(/\D\./g, "");
    depositValueInputHandler(value)
  };

  return (
    <Menu minW="260px">
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Actions
      </MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
      </MenuList>
    </Menu>
    // <HStack pt="15px" pb={0} px={{base: "16px", lg: "24px"}} spacing={4}>
    //     <HStack
    //       onClick={currencySwitcherShowHandler}
    //       h="33px"
    //       borderRadius="5px"
    //       bg="grey.100"
    //       border="0.88px solid"
    //       borderColor="grey.300"
    //       p="0px 5px"
    //       mt="20px"
    //       flexWrap="nowrap"
    //       cursor="pointer"
    //       spacing={0}
    //     >
    //       <CurrencyIcon id={userCurrency?.userCurrencyData?.abbreviation} size={6} mr={1}/>
    //       <Text>{userCurrency?.userCurrencyData?.abbreviation}</Text>
    //       <ChevronDownIcon w={6} h={6} color="grey.300"/>
    //     </HStack>
    // </HStack>
  )
}

export default DepositCurrencySelector;