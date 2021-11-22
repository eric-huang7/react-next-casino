import styles from "../../../../styles/Header/UserBlock.module.scss";
import {NotificationCounter} from "./NotificationCounter";
import {NotificationPopup} from "./NotificationPopup/NotificationPopup";


export const BellNotification = ({t, messageCount, hideBellHandler, showBellHandler, isShowNotifications, subscriptInfo, checkReadMessages, showMessages}) => {

  return (
    <div
      onMouseEnter={() => showBellHandler()}
      onMouseLeave={() => hideBellHandler()}
      className={styles.userMainBlockBellIcon}
    >
      <NotificationCounter messageCount={messageCount}/>
      {isShowNotifications ? <NotificationPopup hideBellHandler={hideBellHandler} t={t} subscriptInfo={subscriptInfo} checkReadMessages={checkReadMessages} notifyData={showMessages} isShowNotifications={isShowNotifications}/> : <></>}
    </div>
  )
}