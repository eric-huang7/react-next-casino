
import styles from '../../../../styles/Header/UserBlock.module.scss'

import {HeaderButtonsDeposit} from "../HeaderButtons/HeaderButtonsDeposit";
import {BurgerButton} from "../BurgerButton/BurgerButton";
import {HeaderButtonsRegistration} from "../HeaderButtons/HeaderButtonsRegistration";
import {useDispatch} from "react-redux";
import {userBalance} from "../../../../redux/actions/login";
import {useEffect, useState} from "react";

export const UserBlockNavigation = ({t, userInfo}) => {
  const dispatch = useDispatch();

  let userLogined = userInfo.isAuthenticated;

  const [userName, setUserName] = useState('')
  const [userBalanceInfo, setUserBalanceInfo] = useState(userInfo.balance);


  // console.log(userBalanceInfo, 'USER BALANCE');
  // add after auth !!!!!!!!!

  useEffect(() => {
    if (userLogined) {
      setUserName(userInfo.user.user.username);
      dispatch(userBalance());
      console.log(userBalanceInfo, 'USER BALANCE');
    }
  }, [userLogined]);



  return (
    <div className={styles.userMainBlockWrapper}>
      <div className={`${styles.userMainBlock} ${userLogined ? "" : styles.hide}`}>
        <div className={styles.userMainBlockBellIcon}>
          <span className={styles.userMainBlockBellIconNotification}>3</span>
        </div>
        <div className={styles.userMainBlockUserInfoBlock}>
          <span>{userName}</span>
          <span>{userBalanceInfo} BTC</span>
        </div>
      </div>
      <HeaderButtonsDeposit isUserLogined={userLogined} t={t}/>
      <HeaderButtonsRegistration isUserLogined={userLogined} t={t}/>
      <BurgerButton />
    </div>

  )
}