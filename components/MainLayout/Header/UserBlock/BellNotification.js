import styles from "../../../../styles/Header/UserBlock.module.scss";
import {NotificationCounter} from "./NotificationCounter";


export const BellNotification = ({messageCount, clickBellHandler}) => {

  return (
    <div onClick={() => clickBellHandler()} className={styles.userMainBlockBellIcon}>
      <NotificationCounter messageCount={messageCount}/>
    </div>
  )
}