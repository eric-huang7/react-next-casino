import { BonusesBlockContainer } from './BonusesBlockContainer'
import {useState} from "react";
import { Switch } from '@chakra-ui/react';
import {Box, HStack, VStack, Text} from "@chakra-ui/layout";
import {Input} from "@chakra-ui/input";
import {ChevronDownIcon, ChevronUpIcon} from "@chakra-ui/icons"

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

  const [showAllBonuses, setShowAllBonuses] = useState(false)

  const showAllBonusesHandler = (e) => {
    e.stopPropagation()
    e.preventDefault()
    if (showAllBonuses) {
      setShowAllBonuses(false)
    } else {
      setShowAllBonuses(true)
    }
  }

  return (
    <Box px={{base: "16px", lg: "24px"}}>
      <HStack justifyContent="space-between" pb={{base: 2}} spacing={0}>
        <Text fontSize="14px" color="text.250" fontFamily="Verdana" textTransform="uppercase">
          {t('depositPage.bonusBlockHeading')}
        </Text>
        <Switch size='lg' id='isChecked' isChecked={isChecked} onChange={checkedInputHandler} colorScheme="primary" />
      </HStack>

      <HStack
        h={showAllBonuses ? "auto" : "62px"}
        w="100%"
        bg="grey.100"
        border="0.75px solid"
        borderColor="text.190"
        alignItems="flex-start"
        justifyContent="space-between"
        overflow="hidden"
        spacing={0}
      >
        <BonusesBlockContainer
          showAllBonuses={showAllBonuses}
          userCurrency={userCurrency}
          t={t}
          isUseBonus={isChecked}
          chooseBonusClickHandler={chooseBonusClickHandler}
          setDepositButtonText={setDepositButtonText}
          userDepositValue={userDepositValue}
          userSelectedBonus={userSelectedBonus}
          bonusesArr={bonusesArr}
        />
        {bonusesArr.length > 1 && <VStack h="60px" justifyContent="center">
          {showAllBonuses
            ? <ChevronUpIcon w={8} h={8} onClick={showAllBonusesHandler} color="primary.500" sx={{cursor: "pointer"}}/>
            : <ChevronDownIcon w={8} h={8} onClick={showAllBonusesHandler} color="primary.500" sx={{cursor: "pointer"}}/>
          }
        </VStack>}
      </HStack>

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
