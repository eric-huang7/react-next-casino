import { HStack, Box, Text } from "@chakra-ui/react";
import { HeaderButtonsRegistration } from '../MainLayout/Header/HeaderButtons/HeaderButtonsRegistration'
import ErrorEmpty from '../ErrorBoundaryComponents/ErrorEmpty'
import {numberTransformer} from "../../helpers/numberTransformer";
import {currencyFinder} from "../../helpers/currencyFinder";
import {HeaderButtonsDeposit} from "../MainLayout/Header/HeaderButtons/HeaderButtonsDeposit";
import {VStack} from "@chakra-ui/layout";

export const UserInfoBlock = ({ t, userInform, currency }) => {
  let userName, balance, userCurrency

  const isAuth = userInform.isAuthenticated && !currency.loading;

  if (currency.currency && userInform.balance) {
    userName = userInform.user.user.username

    let balanceData = userInform?.balance?.balances.filter((el) => !!Number(el.is_default))

    if (balanceData.length === 0) {
      if (userInform?.balance?.balances?.length > 0) {
        balanceData = userInform?.balance?.balances
      }
    }

    let amount = ''

    try {
      amount = numberTransformer(balanceData[0].current_balance)
    } catch (e) {
      amount = ''
    }

    balance = balanceData.length === 0 ? '0.00' : amount
    userCurrency = currencyFinder(balanceData, userInform, currency);
  }

  return (
    <ErrorEmpty>
      {isAuth && <VStack alignItems="flex-start" px={4} pb={4}>
        <Text color="text.150" fontSize="14px">{userName || ''}</Text>
        <Text color="text.150" fontSize="16px" textTransform="uppercase">
            {balance ? `${balance} ${userCurrency}` : ''}
        </Text>
      </VStack>}
      <Box w="100%" h="3px" bg="#535353" />
      {isAuth && <HStack justifyContent="space-between" px={4} pt={4} color="text.150" fontSize="12px">
        <VStack alignItems="flex-start">
          <Text fontWeight={700}>{balance ? `${balance} ${userCurrency}` : ''}</Text>
          <Text fontSize="14px">Real money</Text>
        </VStack>
        <VStack alignItems="flex-end">
          <Text fontWeight={700}>0 BTC</Text>
          <Text fontSize="14px">Locked by bonus</Text>
        </VStack>
      </HStack>}
      <HStack justifyContent="center" py="16px">
        {isAuth
          ? <HeaderButtonsDeposit t={t} isUserLogined={userInform}/>
          : <HeaderButtonsRegistration isUserLogined={userInform.isAuthenticated} t={t}/>}
      </HStack>
    </ErrorEmpty>
  )
}
