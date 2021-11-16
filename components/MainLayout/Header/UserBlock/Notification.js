import styles from "../../../../styles/Header/UserBlock.module.scss";
import {NotificationPopup} from "./NotificationPopup/NotificationPopup";
import {useDispatch, useSelector} from "react-redux";
import {useCallback, useEffect, useState} from "react";
import {BellNotification} from "./BellNotification";
import {useRouter} from "next/router";
import useWebsocketNotification from "../../../../hooks/useWebsocketNotification";



export const Notification = () => {
  const dispatch = useDispatch()
  const userInfo = useSelector((store) => store.authInfo.user)
  const router = useRouter();
  let locale = router.locale;

  // const {messages, socketInstance} = useWebsocketNotification(userInfo, locale);
  // console.log(messages, socketInstance, 'notify asdsa');

  const [socketMessages, setSocketMessages] = useState([]);


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
      <BellNotification clickBellHandler={clickBellHandler} messageCount={socketMessages.length}/>
      <NotificationPopup notifyData={socketMessages} isShowNotifications={isShowNotifications}/>
    </>

  )
}