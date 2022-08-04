import {useEffect, useState} from 'react'
import {HStack, VStack} from "@chakra-ui/react"
import { BalanceMenuContainer } from '../../../BalanceMenuContainer/BalanceMenuContainer'
import { numberTransformer } from '../../../../helpers/numberTransformer'
import BalanceErrorBoundary from '../../../BalanceMenuContainer/BalanceErrorBoundary/BalanceErrorBoundary'
import { currencyFinder } from '../../../../helpers/currencyFinder'
import {CurrencyItemShort} from "./CurrencyItemShort";
import {useTranslation} from "next-i18next";
import {milliCurrencies, milliLimit} from "../../../../envs/currency";
import {Text} from "@chakra-ui/layout";
import {ChevronDownIcon, ChevronUpIcon} from "@chakra-ui/icons"

export const BalanceBlock = ({ userInfo, userCurrency }) => {
  const { t } = useTranslation('common')
  const [isShowBalanceList, setIsShowBalanceList] = useState(false)
  const [balanceData, setBalanceData] = useState(false)
  const [currency, setCurrency] = useState(false)
  const [activeCurrency, setActiveCurrency] = useState(false)
  const [balance, setBalance] = useState(false)
  const [isMilli, setIsMilli] = useState(false)

  useEffect(() => {
    if (userCurrency.currency && userInfo.balance) {
      let balanceData = userInfo?.balance?.balances.filter((el) => !!Number(el.is_default))

      if (balanceData.length === 0) {
        if (userInfo?.balance?.balances?.length > 0) {
          balanceData = userInfo?.balance?.balances
        }
      }
      setBalanceData(balanceData)

      const currency = currencyFinder(balanceData, userInfo, userCurrency)
      setCurrency(currency)

      const activeCurrency = userCurrency.currency.results.find((el) => el.abbreviation === currency)
      setActiveCurrency(activeCurrency)

      let isMilli = false

      if (
        activeCurrency?.abbreviation &&
        milliCurrencies.includes(activeCurrency?.abbreviation) &&
        parseFloat(balanceData[0]?.current_balance) < milliLimit // TODO set to 1
      ) {
        isMilli = true
      }

      setIsMilli(isMilli)

      let amount = ''

      try {
        const milliBalance = isMilli
          ? parseFloat(balanceData[0]?.current_balance) * 1000
          : parseFloat(balanceData[0]?.current_balance)

        amount = numberTransformer(`${milliBalance?.toFixed(Math.min(isMilli ? 4 : 9, activeCurrency?.decimal))}`)
      } catch (e) {
        amount = ''
      }

      let balance = balanceData.length === 0 ? '0.00' : amount
      setBalance(balance)
    }
  }, [userInfo, userCurrency])

  const showBalanceListHandler = () => {
    setIsShowBalanceList(true)
  }
  const hideBalanceListHandler = () => {
    setIsShowBalanceList(false)
  }

  return userCurrency.currency && userInfo.balance && (
    <VStack spacing={0} alignItems="flex-start" pr={5}>
      <Text as="div" fontSize="12px" color="currency.500" fontFamily="Verdana">
          {userInfo.user.user.username}
      </Text>
      <HStack
        minW="200px"
        position="relative"
        spacing={0}
        cursor="pointer"
        onMouseEnter={showBalanceListHandler}
        onMouseLeave={hideBalanceListHandler}
      >
        <Text fontSize="14px" color="currency.500" fontFamily="Verdana">{balance}</Text>
        <CurrencyItemShort currencyData={activeCurrency} isMilli={isMilli} />
        {isShowBalanceList
          ? <ChevronUpIcon w={6} h={6} color="primary.500"/>
          : <ChevronDownIcon w={6} h={6} color="primary.500"/>
        }
        {isShowBalanceList && balanceData.length > 0 && <BalanceErrorBoundary>
          <BalanceMenuContainer
            balanceData={userInfo}
            activeBalance={balanceData}
            currencyData={userCurrency}
          />
        </BalanceErrorBoundary>}
      </HStack>
      <Text as="div" fontSize="12px" color="currency.500" fontFamily="Verdana" pt="15px">
        {t('header.userDesktopMenu.withdrawable')}
      </Text>
      <HStack spacing={0}>
        <Text fontSize="14px" color="currency.500" fontFamily="Verdana">{balance}</Text>
        <CurrencyItemShort currencyData={activeCurrency} isMilli={isMilli} />
      </HStack>
    </VStack>
  )
}
