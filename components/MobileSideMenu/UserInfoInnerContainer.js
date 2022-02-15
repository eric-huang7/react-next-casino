import styles from "../../styles/MobileSideMenu/MobileSideMenu.module.scss";
import {HeaderButtonsDeposit} from "../MainLayout/Header/HeaderButtons/HeaderButtonsDeposit";
import {numberTransformer} from "../../helpers/numberTransformer";


export const UserInfoInnerContainer = ({t, userInform, userCurrency}) => {

  if (userCurrency.currency && userInform.balance) {
    let userName = userInform.user.user.username;

    let balanceData = userInform?.balance?.balances.filter((el) => !!Number(el.is_default));

    if (balanceData.length === 0) {
      if (userInform?.balance?.balances?.length > 0) {
        balanceData = userInform?.balance?.balances;
      }
    }

    let amount = '';

    try {
      amount = numberTransformer(balanceData[0].current_balance);
    } catch (e) {
      amount = '';
    }

    let balance = balanceData.length === 0
      ?
      "0.00"
      :
      amount;

    let currency = balanceData.length === 0
      ?
      userCurrency?.currency?.results.find((el) => userInform.user.user.base_currency_id
        ?
        Number(el.id) === Number(userInform.user.user.base_currency_id)
        :
        Number(el.id) === 1).abbreviation
      :
      userCurrency?.currency?.results.find((el) => Number(el.id) === Number(balanceData[0].currency_id)).abbreviation;

    // let currency = balanceData.length === 0
    //   ?
    //   userCurrency?.currency?.results.find((el) => Number(el.id) === Number(userInform.user.user.base_currency_id)).abbreviation
    //   :
    //   userCurrency?.currency?.results.find((el) => Number(el.id) === Number(balanceData[0].currency_id)).abbreviation;

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