import styles from '../../../../styles/Header/UserBlock.module.scss'
import { DesktopMenuContainer } from '../../../DesktopMenuComponents/DesktopMenuContainer'
import {useEffect, useState} from 'react'
import {numberTransformer} from "../../../../helpers/numberTransformer";
import {currencyFinder} from "../../../../helpers/currencyFinder";
import {showDepositModal} from "../../../../redux/popups/action";
import {useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";
import {HeaderBalance} from "./HeaderBalance";

export const UserInformationBlock = ({ userInfo, userCurrency }) => {
  const { t } = useTranslation('common')
  const dispatch = useDispatch()
  const [balance, setBalance] = useState(false)
  const [balanceData, setBalanceData] = useState(false)
  const [isShowLinksMenu, setIsShowLinksMenu] = useState(false)
  const [activeCurrency, setActiveCurrency] = useState(false)
  const [currency, setCurrency] = useState(false)

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

  return userCurrency.currency && userInfo.balance ? (
    <div className={styles.userMainBlockUserInfoBlock}>
      <div className={`${styles.userTextContainer}`}>
        <span className={styles.userName}>
          <div>
            <div className={styles.balance}>{balance} <HeaderBalance currencyData={activeCurrency} /></div>
            <div className={styles.depositButton} onClick={closeDepositModalHandler}>
              {t('tournaments.buttons.deposit')}
            </div>
          </div>

        </span>
      </div>
      <div
        className={`${styles.userTextContainer} ${isShowLinksMenu ? styles.active : ''}`}
        onMouseEnter={() => showLinksMenuHandler()}
        onMouseLeave={() => hideLinksMenuHandler()}
      >

        <span className={styles.userName}>
          <img src="/assets/img/avatars/Blue.webp" width={50} alt="" />
        </span>
        {
          isShowLinksMenu
            ? <DesktopMenuContainer onClose={hideLinksMenuHandler} userInfo={userInfo} userCurrency={userCurrency}/>
            : null
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
