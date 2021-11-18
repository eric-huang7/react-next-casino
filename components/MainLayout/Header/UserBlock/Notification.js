import styles from "../../../../styles/Header/UserBlock.module.scss";
import {NotificationPopup} from "./NotificationPopup/NotificationPopup";
import {useDispatch, useSelector} from "react-redux";
import {useCallback, useContext, useEffect, useState} from "react";
import {BellNotification} from "./BellNotification";
import {useRouter} from "next/router";
import useWebsocketNotification from "../../../../hooks/useWebsocketNotification";
import {setNotifyTypeTwo} from "../../../../redux/actions/setNotify";
import {NotifyContext} from "../../../../pages/NotifyContext";



export const Notification = ({messagesData, t}) => {
  const dispatch = useDispatch();
  const notifySocket = useContext(NotifyContext);
  const subscriptInfo = useSelector((store) => store.userSubscriptionsData.notifySubscribe);

  let allMessages = messagesData.messagesData.slice();
  let unreadMessages = messagesData.messagesData.slice().filter((el) => {
    if (el.read === '0' || el.read === undefined) {
      return true;
    } else {
      return false;
    }
  });
  let showUnreadMessages = unreadMessages.slice(0, 4);

  const checkReadMessages = () => {
    let newListMessages = allMessages.map((el) => {
      if (showUnreadMessages.find((unreadEl) => unreadEl.id === el.id)) {
        return Object.defineProperty(el, 'read', {value: '1'});
      } else {
        return el;
      }
    })
    let arrNotRead = [];
    showUnreadMessages.map((el) => {
        arrNotRead.push(el.id);
    })
    if (arrNotRead.length > 0) {
      dispatch(setNotifyTypeTwo({type: 2, msg: newListMessages}));
      let sendObj = {type: 1, ids: arrNotRead}
      notifySocket.socket.socketInstance.send(JSON.stringify(sendObj));
    }
  }



  const [isShowNotifications, setisShowNotifications] = useState(false)

  const clickBellHandler = () => {
    if (isShowNotifications) {
      // dispatch(showNotifications(false));
      setisShowNotifications(false)
    } else {
      // dispatch(showNotifications(true));
      setisShowNotifications(true)
    }
  }

  return (
    <>
      <BellNotification clickBellHandler={clickBellHandler} messageCount={unreadMessages.length}/>
      {isShowNotifications ? <NotificationPopup subscriptInfo={subscriptInfo} checkReadMessages={checkReadMessages} notifyData={showUnreadMessages} isShowNotifications={isShowNotifications}/> : <></>}
    </>

  )
}