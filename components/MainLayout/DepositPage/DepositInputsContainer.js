import CurrencyIcon from "../../currency/CurrencyIcon";
import { HStack } from "@chakra-ui/react";
import InputField from "../../form/InputField";
import {Text} from "@chakra-ui/layout";
import {ChevronDownIcon} from "@chakra-ui/icons";

export const DepositInputsContainer = ({
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
    <HStack pt="15px" pb={0} px={{base: "16px", lg: "24px"}} spacing={4}>
        <InputField
          label={t("depositPage.depositInputLabel")}
          error={userDepositValueError}
          onChange={handleChange}
          value={userDepositValue}
          id={'depositInputCount'}
          maxLength={12}
          fontSize={32}
          px={2}
        />

        <HStack
          onClick={currencySwitcherShowHandler}
          h="33px"
          borderRadius="5px"
          bg="grey.100"
          border="0.88px solid"
          borderColor="grey.300"
          p="0px 5px"
          mt="20px"
          flexWrap="nowrap"
          cursor="pointer"
          spacing={0}
        >
          <CurrencyIcon id={userCurrency?.userCurrencyData?.abbreviation} size={6} mr={1}/>
          <Text>{userCurrency?.userCurrencyData?.abbreviation}</Text>
          <ChevronDownIcon w={6} h={6} color="grey.300"/>
        </HStack>
    </HStack>
  )
}
