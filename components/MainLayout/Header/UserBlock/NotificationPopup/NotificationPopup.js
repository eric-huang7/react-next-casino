import styles from '../../../../../styles/NotificationPopup/NotificationPopup.module.scss';
import {MessagesContainer} from "./MessagesContainer";
import {MoreButton} from "./MoreButton";
import {useSelector} from "react-redux";
import {useEffect} from "react";


export const NotificationPopup = ({isShowNotifications, notifyData, checkReadMessages}) => {
  useEffect(() => {
    // console.log('popap mount!!!!!!!!')
    return () => {
      checkReadMessages();
      // console.log('popap unmount!!!!!!')
    }
  },[])

    return (
      <div className={`${styles.notificationPopupWrapper}`}>
        <div className={styles.notificationHeading}>
          <span>Notification</span>
          <img src={`/assets/icons/notifications/sound_on.svg`} alt="notification sound icon"/>
        </div>
        <div className={styles.messagesBlock}>
          <MessagesContainer notifyData={notifyData}/>
        </div>
        <MoreButton />
      </div>
    )
}