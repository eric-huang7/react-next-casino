import {useState} from "react";
import {Box, HStack, Text} from "@chakra-ui/layout";
import {Input} from "@chakra-ui/input";
import CustomSwitch from "../../../form/CustomSwitch";
import BonusesDropdown from "./BonusesDropdown";

export const BonusesBlockMainContainer = (props) => {
  let {
    t,
    isChecked,
    checkedInputHandler,
    isActiveBonusInput,
    userCurrency,
    chooseBonusClickHandler,
    setDepositButtonText,
    userDepositValue,
    userSelectedBonus,
    bonusesArr
  } = props

  return (
    <Box>
      <HStack justifyContent="space-between" pb={{base: "20px"}} spacing={0} alignItems="center">
        <Text fontSize={17} fontWeight={300} color="white" fontFamily="Montserrat" textTransform="capitalize">
          {t('depositPage.bonusBlockHeading').toLowerCase()}
        </Text>
        <CustomSwitch isChecked={isChecked} onChange={checkedInputHandler}/>
      </HStack>

      <BonusesDropdown
          showAllBonuses={showAllBonuses}
          userCurrency={userCurrency}
          t={t}
          isUseBonus={isChecked}
          chooseBonusClickHandler={chooseBonusClickHandler}
          setDepositButtonText={setDepositButtonText}
          userDepositValue={userDepositValue}
          userSelectedBonus={userSelectedBonus}
          allBonuses={[...bonusesArr, ...bonusesArr, ...bonusesArr]}
      />

      {isActiveBonusInput && <Box mt={2} w="100%">
        <Input
          w="100%"
          h="40px"
          bg="#f2f6f9"
          color="primary"
          border="0.75px solid"
          borderColor="primary.500"
          borderRadius={0}
          focusBorderColor="primary.500"
          outline="none"
          p="0 15px"
          id={'depositsBonusIn'}
          type="text"
          placeholder={t('depositPage.bonusBlockInput')}/>
      </Box>}
    </Box>
  )
}
