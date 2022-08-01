import styles from '../../../../styles/DepositPage/DepositPage.module.scss'
import { BonusesBlockContainer } from './BonusesBlockContainer'
import {useState} from "react";
import { Switch } from '@chakra-ui/react';
import {Box, HStack, Text} from "@chakra-ui/layout";
import {Input} from "@chakra-ui/input";

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
    <div className={styles.depositsBonusesBlock}>
      <HStack justifyContent="space-between" pb={{base: 0, lg: 2}}>
        <Text fontSize="14px" color="text.250" fontFamily="Verdana" textTransform="uppercase">
          {t('depositPage.bonusBlockHeading')}
        </Text>
        <Switch size='lg' id='isChecked' isChecked={isChecked} onChange={checkedInputHandler} colorScheme="primary" />
      </HStack>

      <div onClick={(e) => showAllBonusesHandler(e)}
           className={`${styles.bonusesInformationBlock} ${showAllBonuses ? styles.showAllBonuses : styles.hideBonuses}`}>
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
      </div>

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
    </div>
  )
}
