
import styles from '../../../../styles/Header/UserBlock.module.scss'

import {HeaderButtonsDeposit} from "../HeaderButtons/HeaderButtonsDeposit";
import {BurgerButton} from "../BurgerButton/BurgerButton";
import {HeaderButtonsRegistration} from "../HeaderButtons/HeaderButtonsRegistration";

export const UserBlockNavigation = ({t}) => {
  let userLogined = false;

  return (
    <div className={styles.userMainBlockWrapper}>
      <div className={`${styles.userMainBlock} ${userLogined ? "" : styles.hide}`}>
        <div className={styles.userMainBlockBellIcon}>
          <span className={styles.userMainBlockBellIconNotification}>3</span>
        </div>
        <div className={styles.userMainBlockUserInfoBlock}>
          <span>Steve Miler</span>
          <span>2.021 BTC</span>
        </div>
      </div>
      <HeaderButtonsDeposit isUserLogined={userLogined} t={t}/>
      <HeaderButtonsRegistration isUserLogined={userLogined} t={t}/>
      <BurgerButton />
    </div>

  )
}