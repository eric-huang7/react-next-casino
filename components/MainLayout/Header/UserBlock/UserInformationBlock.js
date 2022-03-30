import styles from '../../../../styles/Header/UserBlock.module.scss'
import { DesktopMenuContainer } from '../../../DesktopMenuComponents/DesktopMenuContainer'
import {useEffect, useState} from 'react'
import { BalanceMenuContainer } from '../../../BalanceMenuContainer/BalanceMenuContainer'
import { numberTransformer } from '../../../../helpers/numberTransformer'
import BalanceErrorBoundary from '../../../BalanceMenuContainer/BalanceErrorBoundary/BalanceErrorBoundary'
import { currencyFinder } from '../../../../helpers/currencyFinder'
import {svgSetter} from "../../../../helpers/iconNameFinder";

export const UserInformationBlock = ({ userInfo, userCurrency }) => {

  const [isShowLinksMenu, setIsShowLinksMenu] = useState(false)
  const [isShowBalanceList, setIsShowBalanceList] = useState(false)
  const [balanceData, setBalanceData] = useState(false)
  const [currency, setCurrency] = useState(false)
  const [activeCurrency, setActiveCurrency] = useState(false)
  const [balance, setBalance] = useState(false)

  useEffect(() => {
    if (activeCurrency) {
      const returnAbbr = true
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
      let amount = ''

      try {
        amount = numberTransformer(`${balanceData[0].current_balance}`)
      } catch (e) {
        amount = ''
      }

      let balance = balanceData.length === 0 ? '0.00' : amount
      setBalance(balance)
      const currency = currencyFinder(balanceData, userInfo, userCurrency)
      setCurrency(currency)

      const activeCurrency = userCurrency.currency.results.find((el) => el.abbreviation === currency)
      setActiveCurrency(activeCurrency)
      console.log('activeCurrency', activeCurrency)

    }
  }, [])

  const showLinksMenuHandler = () => {
    setIsShowLinksMenu(true)
  }
  const hideLinksMenuHandler = () => {
    setIsShowLinksMenu(false)
  }
  const showBalanceListHandler = () => {
    setIsShowBalanceList(true)
  }
  const hideBalanceListHandler = () => {
    setIsShowBalanceList(false)
  }

  return userCurrency.currency && userInfo.balance ? (
    <div className={styles.userMainBlockUserInfoBlock}>
      <div
        className={`${styles.userTextContainer} ${isShowLinksMenu ? styles.active : ''}`}
        onMouseEnter={() => showLinksMenuHandler()}
        onMouseLeave={() => hideLinksMenuHandler()}
      >
        <span className={styles.userName}>
          {userInfo.user.user.username}
        </span>
        {
          isShowLinksMenu ? <DesktopMenuContainer/> : <></>
        }
      </div>
      <div
        className={`${styles.userTextContainer} ${isShowBalanceList ? styles.active : ''} ${userInfo?.balance?.balances.length === 1 ? styles.indicatorOff : ''}`}
        onMouseEnter={() => showBalanceListHandler()}
        onMouseLeave={() => hideBalanceListHandler()}
      >
        <span>
          {balance} <div id={`currencyImageContainer${activeCurrency.id}`} className={styles.iconContainer}></div> {currency}
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
    </div>
  ) : (
    <div className={styles.userMainBlockUserInfoBlock}>
      <span>{'     '}</span>
      <span>{'     '}</span>
    </div>
  )
}
