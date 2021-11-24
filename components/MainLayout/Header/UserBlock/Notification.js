import styles from "../../../../styles/Header/UserBlock.module.scss";
import {NotificationPopup} from "./NotificationPopup/NotificationPopup";
import {useDispatch, useSelector} from "react-redux";
import {useCallback, useContext, useEffect, useState} from "react";
import {BellNotification} from "./BellNotification";
import {useRouter} from "next/router";
import useWebsocketNotification from "../../../../hooks/useWebsocketNotification";
import {setNotifyTypeTwo} from "../../../../redux/actions/setNotify";
import {NotifyContext} from "../../../NotifyContext/NotifyContext";
import {notificator} from "../../../../helpers/notificator";



export const NotificationContainer = ({messagesData, t}) => {
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
  let showMessages = allMessages.slice(0, 4);

  const checkReadMessages = () => {

    let arrNotRead = [];
    let newListMessages = allMessages.map((el) => {
      let check = showMessages.find((showEl) => {
        if ((showEl.id === el.id) && (el.read === "0" || el.read === undefined)) {
          arrNotRead.push(showEl.id);
          return true;
        } else {
          return false;
        }
      })
      if (check) {
        return Object.defineProperty(el, 'read', {value: '1'});
      } else {
        return el;
      }
    })
    if (arrNotRead.length > 0) {

      dispatch(setNotifyTypeTwo({type: 2, msg: newListMessages}));
      let sendObj = {type: 1, ids: arrNotRead}
      notifySocket.socket.current.send(JSON.stringify(sendObj));
    }
  }


  const [isShowNotifications, setisShowNotifications] = useState(false)

  const showBellHandler = () => {
    setisShowNotifications(true);
  }
  const hideBellHandler = () => {
    setisShowNotifications(false);
  }

  return (
    <>
      <BellNotification
        showBellHandler={showBellHandler}
        messageCount={unreadMessages.length}
        t={t}
        hideBellHandler={hideBellHandler}
        checkReadMessages={checkReadMessages}
        isShowNotifications={isShowNotifications}
        showMessages={showMessages}
        subscriptInfo={subscriptInfo}
      />
    </>

  )
}