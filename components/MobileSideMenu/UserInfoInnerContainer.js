import styles from "../../styles/MobileSideMenu/MobileSideMenu.module.scss";
import {HeaderButtonsDeposit} from "../MainLayout/Header/HeaderButtons/HeaderButtonsDeposit";


export const UserInfoInnerContainer = ({t, userInform, userCurrency}) => {

  if (userCurrency.currency && userInform.balance) {
    let userName = userInform.user.user.username;

    let balanceData = userInform?.balance?.balances.filter((el) => !!Number(el.is_default))
    let balance = balanceData.length === 0
      ?
      "0.0"
      :
      Number(balanceData[0].current_balance) === 0
        ?
        "0.0"
        :
        Number(balanceData[0].current_balance);
    let currency = balanceData.length === 0
      ?
      userCurrency?.currency?.results.find((el) => Number(el.id) === Number(userInform.user.user.base_currency_id)).abbreviation
      :
      userCurrency?.currency?.results.find((el) => Number(el.id) === Number(balanceData[0].currency_id)).abbreviation;

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
        <p className={styles.username}>{""}</p>
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