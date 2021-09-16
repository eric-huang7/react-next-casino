import React from "react";
import { Link } from 'react-router-dom';
import {useTranslation} from "react-i18next";

import bellIcon from '../../../assets/icons/bell_icon.svg'
import styles from './UserBlockNavigation.module.css'
import {HeaderButtons} from "../HeaderButtons/HeaderButtons";


export const UserBlockNavigation = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.userMainBlockWrapper}>
      <div className={styles.userMainBlock}>
        <div className={styles.userMainBlockBellIcon} style={{
          backgroundImage: `url(${bellIcon})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}>
          <span className={styles.userMainBlockBellIconNotification}>3</span>
        </div>
        <div className={styles.userMainBlockUserInfoBlock}>
          <span className={styles.userMainBlockUserName}>Steve Miler</span>
          <span className={styles.userMainBlockUserCashe}>2.021 BTC</span>
        </div>
      </div>
      <HeaderButtons  />
    </div>

  )
}