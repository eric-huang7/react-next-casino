/* eslint-disable react-hooks/exhaustive-deps */
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

  // const [userName, setUserName] = useState('')
  // const [userBalanceInfo, setUserBalanceInfo] = useState('');
  // const [userCurrency, setUserCurrency] = useState('');

  // useEffect(() => {
  //   console.log('header change', userInfo.balance)
  //   if (userInfo.isAuthenticated) {
  //     setUserName(userInfo.user.user.username);
  //
  //     if (userInfo.balance) {
  //
  //       if (userInfo.balance.balances.length > 0) {
  //
  //         setUserBalanceInfo(`${Number(userInfo.balance.balances[0].current_balance).toFixed(2)}`)
  //       } else {
  //         // console.log(userInfo.balance, 'USER info BALANCE');
  //         setUserBalanceInfo('0.00')
  //       }
  //     } else {
  //       setUserBalanceInfo('00.00')
  //     }
  //     // console.log(userBalanceInfo, 'USER BALANCE');
  //   }
  // }, [userInfo.isAuthenticated, userInfo.balance]);

// useEffect(() => {
//   if (!currency.loading && userInfo.isAuthenticated) {
//     setUserCurrency(currency.currency?.results.find((el) => {
//       if (userInfo.user.user?.currency) {
//         return Number(el.id) === Number(userInfo.user.user.currency_id);
//       } else if (!userInfo.user.user.base_currency_id) {
//         return Number(el.id) === 1;
//       } else {
//         return Number(el.id) === Number(userInfo.user.user.base_currency_id);
//       }
//     }).abbreviation);
//   } else {
//     setUserCurrency('')
//   }
// },[currency.loading, userInfo.isAuthenticated])


  return (
    <div className={styles.userMainBlockWrapper}>
      <div className={`${styles.userMainBlock} ${userInfo.isAuthenticated ? "" : styles.hide}`}>
        { userInfo.isAuthenticated ? <NotificationContainer messagesData={messagesData} t={t}/> : "" }
        { userInfo.isAuthenticated ? <UserInformationBlock userInfo={userInfo} userCurrency={currency}/> : "" }
      </div>
      {
        userInfo.isAuthenticated ? <HeaderButtonsDeposit isUserLogined={userInfo.isAuthenticated} t={t}/> : <HeaderButtonsRegistration isUserLogined={userInfo.isAuthenticated} t={t}/>
      }
      <BurgerButton userLogined={userInfo.isAuthenticated}/>
    </div>

  )
}