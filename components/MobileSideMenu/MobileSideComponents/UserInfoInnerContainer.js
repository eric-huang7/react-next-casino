import styles from '../../../styles/MobileSideMenu/MobileSideMenu.module.scss'
import { HeaderButtonsDeposit } from '../../MainLayout/Header/HeaderButtons/HeaderButtonsDeposit'
import { numberTransformer } from '../../../helpers/numberTransformer'
import { currencyFinder } from '../../../helpers/currencyFinder'

export const UserInfoInnerContainer = ({ t, userInform, userCurrency }) => {

  if (userCurrency.currency && userInform.balance) {
    let userName = userInform.user.user.username

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

    let balance = balanceData.length === 0
      ?
      '0.00'
      :
      amount

    let currency = currencyFinder(balanceData, userInform, userCurrency);


    return (
      <div className={styles.userInfoBlock}>
        <p className={styles.username}>{userName}</p>
        <p className={styles.userMoney}>{`${balance} ${currency}`}</p>
        <div className={styles.userInfoDivider}></div>
        <div className={styles.userBonusesInfo}>
          <div className={styles.realMoneyBlock}>
            <span className={styles.realMoneyCount}>{`${balance} ${currency}`}</span>
            <span className={styles.realMoneyText}>Real money</span>
          </div>
          <div className={styles.bonusMoneyBlock}>
            <span className={styles.bonusMoneyCount}>0 BTC</span>
            <span className={styles.bonusMoneyText}>Locked by bonus</span>
          </div>
        </div>
        <div className={styles.sideMenuButtonsBlock}>
          <HeaderButtonsDeposit t={t} isUserLogined={userInform}/>
        </div>
      </div>
    )
  } else {
    return (
      <div className={styles.userInfoBlock}>
        <p className={styles.username}>{''}</p>
        <p className={styles.userMoney}>{``}</p>
        <div className={styles.userInfoDivider}></div>
        <div className={styles.userBonusesInfo}>
          <div className={styles.realMoneyBlock}>
            <span className={styles.realMoneyCount}>{``}</span>
            <span className={styles.realMoneyText}>Real money</span>
          </div>
          <div className={styles.bonusMoneyBlock}>
            <span className={styles.bonusMoneyCount}>0 BTC</span>
            <span className={styles.bonusMoneyText}>Locked by bonus</span>
          </div>
        </div>
        <div className={styles.sideMenuButtonsBlock}>
          <HeaderButtonsDeposit t={t} isUserLogined={userInform}/>
        </div>
      </div>
    )
  }
}

