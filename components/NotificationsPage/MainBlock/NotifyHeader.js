import styles from '../../../styles/NotificationsPage/NotificationsPage.module.scss';
import {useContext} from "react";
import {NotifyContext} from "../../../pages/NotifyContext";


export const NotifyHeader = ({t, notifyData}) => {

  const notifySocket = useContext(NotifyContext);

  console.log(notifySocket, '<==== header');

  const markReadClickHandler = () => {
    let arrNotRead = [];
    notifyData.messagesData.map((el) => {
      if (el.read === "0" || el.read === undefined) {
        arrNotRead.push(el.id);
      }
    })
    let sendObj = {type: 1, ids: arrNotRead}
    notifySocket.socket.socketInstance.send(JSON.stringify(sendObj));
    console.log(notifySocket, '<==== header click');

  }

  return (
    <div className={styles.notifyHeader}>
      <h3>Notifications</h3>
      <span onClick={() => markReadClickHandler()}>Mark all as read</span>
      <img src={`/assets/icons/notifications/sound_on.svg`} alt="notification sound icon"/>
    </div>
  )
}