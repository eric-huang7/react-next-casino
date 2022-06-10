import styles from '../../../../styles/Header/BalanceBlock.module.scss'
import {useEffect, useState} from 'react'
import { BalanceMenuContainer } from '../../../BalanceMenuContainer/BalanceMenuContainer'
import { numberTransformer } from '../../../../helpers/numberTransformer'
import BalanceErrorBoundary from '../../../BalanceMenuContainer/BalanceErrorBoundary/BalanceErrorBoundary'
import { currencyFinder } from '../../../../helpers/currencyFinder'
import {svgSetter} from "../../../../helpers/iconNameFinder";
import {CurrencyItemShort} from "./CurrencyItemShort";
import {useTranslation} from "next-i18next";
import {Withdrawable} from "./Withdrawable";
import {milliCurrencies, milliLimit} from "../../../../envs/currency";

export const BalanceBlock = ({ userInfo, userCurrency }) => {
  const { t } = useTranslation('common')
  const [isShowBalanceList, setIsShowBalanceList] = useState(false)
  const [balanceData, setBalanceData] = useState(false)
  const [currency, setCurrency] = useState(false)
  const [activeCurrency, setActiveCurrency] = useState(false)
  const [balance, setBalance] = useState(false)
  const [isMilli, setIsMilli] = useState(false)

  useEffect(() => {
    if (activeCurrency) {
      const returnAbbr = false
      svgSetter(activeCurrency, returnAbbr)
    }
  }, [activeCurrency])

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

  return userCurrency.currency && userInfo.balance ? (
    <div className={styles.userMainBlockUserInfoBlock}>
      <div className={styles.userName}>
          {userInfo.user.user.username}
      </div>
      <div
        className={`${styles.userTextContainer} ${isShowBalanceList ? styles.active : ''} ${userInfo?.balance?.balances.length === 1 ? styles.indicatorOff : ''}`}
        onMouseEnter={() => showBalanceListHandler()}
        onMouseLeave={() => hideBalanceListHandler()}
      >
        <span>
          {balance}
          <CurrencyItemShort currencyData={activeCurrency} isMilli={isMilli} />
        </span>
        {
          isShowBalanceList && balanceData.length > 0
            ?
            <BalanceErrorBoundary>
              <BalanceMenuContainer
                balanceData={userInfo}
                activeBalance={balanceData}
                currencyData={userCurrency}
              />
            </BalanceErrorBoundary>
            :
            <></>
        }
      </div>
      <div className={styles.userName} style={{marginTop: 15}}>
        {t('header.userDesktopMenu.withdrawable')}
      </div>
      <div
        className={`${styles.userTextContainerPlain}`}
      >
        <span>
          {balance}
          <Withdrawable currencyData={activeCurrency} isMilli={isMilli} />
        </span>
      </div>
    </div>
  ) : null
}
