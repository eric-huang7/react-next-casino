
import styles from '../../../../styles/Header/UserBlock.module.scss'

import {HeaderButtons} from "../HeaderButtons/HeaderButtons";
import {BurgerButton} from "../BurgerButton/BurgerButton";

export const UserBlockNavigation = ({t}) => {
  return (
    <div className={styles.userMainBlockWrapper}>
      <div className={styles.userMainBlock}>
        <div className={styles.userMainBlockBellIcon} style={{
          backgroundImage: `url(/static/icons/bell_icon.svg)`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}>
          <span className={styles.userMainBlockBellIconNotification}>3</span>
        </div>
        <div className={styles.userMainBlockUserInfoBlock}>
          <span>Steve Miler</span>
          <span>2.021 BTC</span>
        </div>
      </div>
      <HeaderButtons  t={t}/>
      <BurgerButton />
    </div>

  )
}