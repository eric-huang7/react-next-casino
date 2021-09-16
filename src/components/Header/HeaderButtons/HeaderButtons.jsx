import React from "react";
import { Link } from 'react-router-dom';
import {useTranslation} from "react-i18next";

import styles from './HeaderButtons.module.css'


export const HeaderButtons = () => {
  const { t } = useTranslation();
  return (
      <div className={styles.userMainBlockButtons}>
        <button>{t('header.navbarButtons.cashOut')}</button>
        <button>{t('header.navbarButtons.deposit')}</button>
      </div>
  )
}