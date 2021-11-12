import styles from '../../../../../styles/NotificationPopup/NotificationPopup.module.scss';
import {MessagesContainer} from "./MessagesContainer";
import {MoreButton} from "./MoreButton";
import {useSelector} from "react-redux";


export const NotificationPopup = ({isShowNotifications}) => {


  console.log(isShowNotifications)

  return (
    <div className={`${styles.notificationPopupWrapper} ${isShowNotifications ? "" : styles.hide}`}>
      <div className={styles.notificationHeading}>
        <span>Notification</span>
        <img src={`/assets/icons/notifications/sound_on.svg`} alt="notification sound icon"/>
      </div>
      <div className={styles.messagesBlock}>
        <MessagesContainer />
      </div>
      <MoreButton />
    </div>
  )
}