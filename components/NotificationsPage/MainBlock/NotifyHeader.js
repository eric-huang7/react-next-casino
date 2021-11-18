import styles from '../../../styles/NotificationsPage/NotificationsPage.module.scss';
import {useContext} from "react";
import {NotifyContext} from "../../../pages/NotifyContext";
import {setNotifyTypeTwo} from "../../../redux/actions/setNotify";
import {useDispatch} from "react-redux";


export const NotifyHeader = ({t, notifyData}) => {
  const dispatch = useDispatch();
  const notifySocket = useContext(NotifyContext);

  const markReadClickHandler = () => {
    let arrNotRead = [];
    notifyData.messagesData.map((el) => {
      if (el.read === "0" || el.read === undefined) {
        arrNotRead.push(el.id);
      }
    })
    let newNotifyData = notifyData.messagesData.slice().map((el) => {
        return Object.defineProperty(el, 'read', {value: '1'});
    });
    dispatch(setNotifyTypeTwo({type: 2, msg: newNotifyData}));
    let sendObj = {type: 1, ids: arrNotRead}
    notifySocket.socket.socketInstance.send(JSON.stringify(sendObj));
  }

  return (
    <div className={styles.notifyHeader}>
      <h3>{t("notificationsPage.header.heading")}</h3>
      <span onClick={() => markReadClickHandler()}>{t("notificationsPage.header.markAsRead")}</span>
      <img src={`/assets/icons/notifications/sound_on.svg`} alt="notification sound icon"/>
    </div>
  )
}