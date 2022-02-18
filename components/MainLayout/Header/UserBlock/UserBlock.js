/* eslint-disable react-hooks/exhaustive-deps */
import styles from '../../../../styles/Header/UserBlock.module.scss'

import {HeaderButtonsDeposit} from "../HeaderButtons/HeaderButtonsDeposit";
import {BurgerButton} from "../BurgerButton/BurgerButton";
import {HeaderButtonsRegistration} from "../HeaderButtons/HeaderButtonsRegistration";
import {useSelector} from "react-redux";

import {NotificationContainer} from "./Notification";
import {UserInformationBlock} from "./UserInformationBlock";
import ErrorEmpty from "../../../ErrorBoundaryComponents/ErrorEmpty";

export const UserBlockNavigation = ({t, userInfo}) => {


  const currency = useSelector((state) => state.getCurrency);
  const messagesData = useSelector((store) => store.notifications);


  return (
    <div className={styles.userMainBlockWrapper}>
      <div className={`${styles.userMainBlock} ${userInfo.isAuthenticated ? "" : styles.hide}`}>
        {
          userInfo.isAuthenticated
            ?
            <ErrorEmpty>
              <NotificationContainer messagesData={messagesData} t={t}/>
            </ErrorEmpty>
            :
            ""
        }
        { userInfo.isAuthenticated && !currency.loading
          ?
          <ErrorEmpty>
            <UserInformationBlock t={t} userInfo={userInfo} userCurrency={currency}/>
          </ErrorEmpty>
          :
          ""
        }
      </div>
      {
        userInfo.isAuthenticated ? <HeaderButtonsDeposit isUserLogined={userInfo.isAuthenticated} t={t}/> : <HeaderButtonsRegistration isUserLogined={userInfo.isAuthenticated} t={t}/>
      }
      <ErrorEmpty>
        <BurgerButton userLogined={userInfo.isAuthenticated}/>
      </ErrorEmpty>
    </div>

  )
}