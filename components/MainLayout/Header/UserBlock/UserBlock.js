
import styles from '../../../../styles/Header/UserBlock.module.scss'

import {HeaderButtonsDeposit} from "../HeaderButtons/HeaderButtonsDeposit";
import {BurgerButton} from "../BurgerButton/BurgerButton";
import {HeaderButtonsRegistration} from "../HeaderButtons/HeaderButtonsRegistration";
import {useDispatch} from "react-redux";
import {userBalance} from "../../../../redux/actions/login";

export const UserBlockNavigation = ({t, userInfo}) => {
  const dispatch = useDispatch();

  let userLogined = userInfo.isAuthenticated;
  let userName = '';
  let userBalanceInfo = userInfo.balance;
  // add after auth !!!!!!!!!

  if (userLogined) {
    userName = userInfo.user.user.username;
    // dispatch(userBalance());
  }

  return (
    <div className={styles.userMainBlockWrapper}>
      <div className={`${styles.userMainBlock} ${userLogined ? "" : styles.hide}`}>
        <div className={styles.userMainBlockBellIcon}>
          <span className={styles.userMainBlockBellIconNotification}>3</span>
        </div>
        <div className={styles.userMainBlockUserInfoBlock}>
          <span>{userName}</span>
          <span>2.021 BTC</span>
        </div>
      </div>
      <HeaderButtonsDeposit isUserLogined={userLogined} t={t}/>
      <HeaderButtonsRegistration isUserLogined={userLogined} t={t}/>
      <BurgerButton />
    </div>

  )
}