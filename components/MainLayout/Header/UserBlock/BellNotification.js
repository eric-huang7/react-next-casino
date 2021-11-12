import styles from "../../../../styles/Header/UserBlock.module.scss";
import {NotificationPopup} from "./NotificationPopup/NotificationPopup";
import {useDispatch, useSelector} from "react-redux";
import {showNotifications} from "../../../../redux/actions/showPopups";


export const BellNotification = () => {
  const dispatch = useDispatch()
  const isShowNotifications = useSelector((store) => store.showPopupsReducer.isShowNotifications);
  const clickBellHandler = () => {
    if (isShowNotifications) {
      dispatch(showNotifications(false));
    } else {
      dispatch(showNotifications(true));
    }
  }

  return (
    <>
      <div onClick={() => clickBellHandler()} className={styles.userMainBlockBellIcon}>
        <span className={styles.userMainBlockBellIconNotification}>{'0'}</span>
      </div>
      <NotificationPopup isShowNotifications={isShowNotifications}/>
    </>

  )
}