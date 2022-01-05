import styles from "../../../../styles/Header/UserBlock.module.scss";
import {DesktopMenuContainer} from "../../../DesktopMenuComponents/DesktopMenuContainer";
import {useState} from "react";
import {BalanceMenuContainer} from "../../../BalanceMenuContainer/BalanceMenuContainer";


export const UserInformationBlock = ({t, userInfo, userCurrency}) => {
  const [isShowLinksMenu, setIsShowLinksMenu] = useState(false);
  const [isShowBalanceList, setIsShowBalanceList] = useState(false);

  if (userCurrency.currency && userInfo.balance) {
    let balanceData = userInfo?.balance?.balances.filter((el) => !!Number(el.is_default));

    let balance = balanceData.length === 0 ? "0.0" : Number(balanceData[0].current_balance) === 0 ? "0.0" : Number(balanceData[0].current_balance);
    let currency = balanceData.length === 0
      ?
      userCurrency?.currency?.results.find((el) => userInfo.user.user.base_currency_id
        ?
        Number(el.id) === Number(userInfo.user.user.base_currency_id)
        :
        Number(el.id) === 1).abbreviation
      :
      userCurrency?.currency?.results.find((el) => Number(el.id) === Number(balanceData[0].currency_id)).abbreviation;


    const showLinksMenuHandler = () => {
      setIsShowLinksMenu(true);
    }
    const hideLinksMenuHandler = () => {
      setIsShowLinksMenu(false);
    }
    const showBalanceListHandler = () => {
      setIsShowBalanceList(true);
    }
    const hideBalanceListHandler = () => {
      setIsShowBalanceList(false);
    }


    return (
      <div className={styles.userMainBlockUserInfoBlock}>
        <div
          onMouseEnter={() => showLinksMenuHandler()}
          onMouseLeave={() => hideLinksMenuHandler()}
        >
          <span className={styles.userName}>
            {userInfo.user.user.username}
          </span>
          {
            isShowLinksMenu ? <DesktopMenuContainer t={t}/> : <></>
          }
        </div>
        <div
          onMouseEnter={() => showBalanceListHandler()}
          onMouseLeave={() => hideBalanceListHandler()}
        >
          <span>
            {`${balance} ${currency}`}
          </span>
          {
            isShowBalanceList ? <BalanceMenuContainer t={t} balanceData={userInfo} activeBalance={balanceData} currencyData={userCurrency} /> : <></>
          }
        </div>
      </div>
    )

  } else {
    return (
      <div className={styles.userMainBlockUserInfoBlock}>
        <span>{'     '}</span>
        <span>{'     '}</span>
      </div>
    )

  }
}