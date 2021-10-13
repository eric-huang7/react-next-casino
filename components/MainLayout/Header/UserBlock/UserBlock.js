
import styles from '../../../../styles/Header/UserBlock.module.scss'

import {HeaderButtonsDeposit} from "../HeaderButtons/HeaderButtonsDeposit";
import {BurgerButton} from "../BurgerButton/BurgerButton";
import {HeaderButtonsRegistration} from "../HeaderButtons/HeaderButtonsRegistration";
import {useDispatch, useSelector} from "react-redux";
import {userBalance} from "../../../../redux/actions/login";
import {useEffect, useState} from "react";

export const UserBlockNavigation = ({t, userInfo}) => {
  const dispatch = useDispatch();
  // const userInfo = useSelector((userInfo) => userInfo.authInfo);

  let userLogined = userInfo.isAuthenticated;
  let userBalanceState = userInfo.balance;

  const [userName, setUserName] = useState('')
  const [userBalanceInfo, setUserBalanceInfo] = useState('');


  // console.log(userBalanceInfo, 'USER BALANCE');
  // add after auth !!!!!!!!!

  useEffect(() => {
    if (userLogined) {
      setUserName(userInfo.user.user.username);
      // dispatch(userBalance());
      if (userInfo.balance) {
        if (userInfo.balance.balances.length > 0) {
          setUserBalanceInfo(`$ ${Number(userInfo.balance.balances[0].current_balance).toFixed(2)}`)
        } else {
          console.log(userInfo.balance, 'USER info BALANCE');
          setUserBalanceInfo('$ 000.00')
        }
      } else {
        setUserBalanceInfo('$ 00.00')
      }

      // dispatch(userBalance());
      console.log(userBalanceInfo, 'USER BALANCE');
    }
  }, [userLogined, userBalanceState]);



  return (
    <div className={styles.userMainBlockWrapper}>
      <div className={`${styles.userMainBlock} ${userLogined ? "" : styles.hide}`}>
        <div className={styles.userMainBlockBellIcon}>
          <span className={styles.userMainBlockBellIconNotification}>{'0'}</span>
        </div>
        <div className={styles.userMainBlockUserInfoBlock}>
          <span>{userName}</span>
          <span>{userBalanceInfo}</span>
        </div>
      </div>
      {
        userLogined ? <HeaderButtonsDeposit isUserLogined={userLogined} t={t}/> : <HeaderButtonsRegistration isUserLogined={userLogined} t={t}/>
      }
      <BurgerButton />
    </div>

  )
}