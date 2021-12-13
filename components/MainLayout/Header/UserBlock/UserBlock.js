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


  return (
    <div className={styles.userMainBlockWrapper}>
      <div className={`${styles.userMainBlock} ${userInfo.isAuthenticated ? "" : styles.hide}`}>
        { userInfo.isAuthenticated ? <NotificationContainer messagesData={messagesData} t={t}/> : "" }
        { userInfo.isAuthenticated && !currency.loading ? <UserInformationBlock userInfo={userInfo} userCurrency={currency}/> : "" }
      </div>
      {
        userInfo.isAuthenticated ? <HeaderButtonsDeposit isUserLogined={userInfo.isAuthenticated} t={t}/> : <HeaderButtonsRegistration isUserLogined={userInfo.isAuthenticated} t={t}/>
      }
      <BurgerButton userLogined={userInfo.isAuthenticated}/>
    </div>

  )
}