import { DesktopMenuContainer } from '../DesktopMenuComponents/DesktopMenuContainer'
import {useEffect, useState} from 'react'
import { Box, Text } from "@chakra-ui/react";
import {numberTransformer} from "../../../../helpers/numberTransformer";
import {currencyFinder} from "../../../../helpers/currencyFinder";
import {showDepositModal} from "../../../../redux/popups/action";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {milliCurrencies, milliLimit} from "../../../../envs/currency";
import LinkButton from "../../../buttons/LinkButton";
import {HStack, VStack} from "@chakra-ui/layout";
import CurrencyItemShort from "../../../currency/CurrencyItemShort";

export const UserInformationBlock = ({ userInfo, userCurrency }) => {
  const { t } = useTranslation('common')
  const dispatch = useDispatch()
  const [balance, setBalance] = useState(false)
  const [balanceData, setBalanceData] = useState(false)
  const [isShowLinksMenu, setIsShowLinksMenu] = useState(false)
  const [activeCurrency, setActiveCurrency] = useState(false)
  const [currency, setCurrency] = useState(false)
  const [isMilli, setIsMilli] = useState(false)
  const [isRealGame, setIsRealGame] = useState(false)

  const showPlayWindow = useSelector((store) => store.ui);
  const playGames = useSelector((state) => state.playGame);

  useEffect(() => {
    if (showPlayWindow.isShowPlayWindow && !playGames.freeGame) {
      setIsRealGame(true)
    } else {
      setIsRealGame(false)
    }
  }, [showPlayWindow.isShowPlayWindow, playGames.freeGame])

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
        parseFloat(balanceData[0]?.current_balance) < milliLimit
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

  const showLinksMenuHandler = () => {
    setIsShowLinksMenu(true)
  }
  const hideLinksMenuHandler = () => {
    setIsShowLinksMenu(false)
  }
  const closeDepositModalHandler = () => {
    dispatch(showDepositModal(true))
  }

  return userCurrency.currency && userInfo.balance && (
    <HStack>
      <HStack spacing={0} position="relative" alignItems="center" h="60px">
        {isRealGame ? (<HStack flexWrap="nowrap">
          <Text fontSize="14px" color="currency.500" fontFamily="Verdana">{t('header.realGame')}</Text>
          <CurrencyItemShort currencyData={activeCurrency} />
        </HStack>
        ) : (<VStack spacing={1} alignItems="flex-start">
          <HStack flexWrap="nowrap">
            <Text fontSize="14px" color="currency.500" fontFamily="Verdana">{balance}</Text>
            <CurrencyItemShort currencyData={activeCurrency} />
          </HStack>
          <LinkButton onClick={closeDepositModalHandler}>
            {t('tournaments.buttons.deposit')}
          </LinkButton>
        </VStack>)}
      </HStack>
      <Box
        pl={3}
        onMouseEnter={() => showLinksMenuHandler()}
        onMouseLeave={() => hideLinksMenuHandler()}
      >
        <img src="/assets/img/avatars/Blue.webp" width={50} alt="" />
        {isShowLinksMenu &&
          <DesktopMenuContainer onClose={hideLinksMenuHandler} userInfo={userInfo} userCurrency={userCurrency}/>
        }
      </Box>
    </HStack>
  )
}
