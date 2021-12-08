
import styles from '../../../../styles/Header/UserBlock.module.scss'

import {HeaderButtonsDeposit} from "../HeaderButtons/HeaderButtonsDeposit";
import {BurgerButton} from "../BurgerButton/BurgerButton";
import {HeaderButtonsRegistration} from "../HeaderButtons/HeaderButtonsRegistration";
import {useDispatch, useSelector} from "react-redux";
import {userBalance} from "../../../../redux/actions/userData";
import {useEffect, useState} from "react";
import {getCurrency} from "../../../../redux/actions/currency";
import {NotificationContainer} from "./Notification";
import {UserInformationBlock} from "./UserInformationBlock";

export const UserBlockNavigation = ({t, userInfo}) => {
  const dispatch = useDispatch();

  const currency = useSelector((state) => state.getCurrency);
  const messagesData = useSelector((store) => store.notifications);

  let userLogined = userInfo.isAuthenticated;
  let userBalanceState = userInfo.balance;

  const [userName, setUserName] = useState('')
  const [userBalanceInfo, setUserBalanceInfo] = useState('');
  const [userCurrency, setUserCurrency] = useState('');

  useEffect(() => {
    if (userLogined) {
      setUserName(userInfo.user.user.username);

      if (userInfo.balance) {

        if (userInfo.balance.balances.length > 0) {

          setUserBalanceInfo(`${Number(userInfo.balance.balances[0].current_balance).toFixed(2)}`)
        } else {
          // console.log(userInfo.balance, 'USER info BALANCE');
          setUserBalanceInfo('0.00')
        }
      } else {
        setUserBalanceInfo('00.00')
      }
      // console.log(userBalanceInfo, 'USER BALANCE');
    }
  }, [userLogined, userBalanceState]);

useEffect(() => {
  if (!currency.loading && userInfo.isAuthenticated) {
    setUserCurrency(currency.currency?.results.find((el) => {
      if (userInfo.user.user?.currency) {
        return Number(el.id) === Number(userInfo.user.user.currency_id);
      } else if (!userInfo.user.user.base_currency_id) {
        return Number(el.id) === 1;
      } else {
        return Number(el.id) === Number(userInfo.user.user.base_currency_id);
      }
    }).abbreviation);
  } else {
    setUserCurrency('')
  }
},[currency.loading, userInfo.isAuthenticated])


  return (
    <div className={styles.userMainBlockWrapper}>
      <div className={`${styles.userMainBlock} ${userLogined ? "" : styles.hide}`}>
        { userLogined ? <NotificationContainer messagesData={messagesData} t={t}/> : "" }
        { userLogined ? <UserInformationBlock userName={userName} userCurrency={userCurrency} userBalanceInfo={userBalanceInfo}/> : "" }
      </div>
      {
        userLogined ? <HeaderButtonsDeposit isUserLogined={userLogined} t={t}/> : <HeaderButtonsRegistration isUserLogined={userLogined} t={t}/>
      }
      <BurgerButton userLogined={userLogined}/>
    </div>

  )
}