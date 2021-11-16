import styles from "../../../../styles/Header/UserBlock.module.scss";
import {NotificationPopup} from "./NotificationPopup/NotificationPopup";
import {useDispatch, useSelector} from "react-redux";
import {useCallback, useEffect, useState} from "react";
import {BellNotification} from "./BellNotification";
import {useRouter} from "next/router";



export const Notification = () => {
  const router = useRouter();
  const isBrowser = typeof window !== "undefined";
  const dispatch = useDispatch()

  const userInfo = useSelector((store) => store.authInfo.user)

  const [socketMessages, setSocketMessages] = useState([]);
  const [socketInstance, setSocketInstance] = useState(null);


  useEffect(() => {
    if (isBrowser) {

      let socket = new WebSocket(`ws://t-gpb.slotsidol.com:7700?token=${userInfo.token}&locale=${router.locale}`);
      // setSocketInstance(socket);

      socket.onopen = function (e) {
        console.log('open!')
      };

      socket.onclose = function (e) {
        if (e.wasClean) {
          console.log('close clear', e.code, "@", e.reason);
        } else {
          console.log('close dirt', e);
        }
      };

      socket.onmessage = function (e) {
        console.log('=>', e.data);

        // let data = JSON.parse(e.data);
        // let message = JSON.parse(data.msg);
        // console.log('message ===>>>', message);
        // if (Object.keys(message).length > 0) {
        //   setSocketMessages([...socketMessages, message])
        // }
      };
      socket.onerror = function (error) {
        console.log('some error ===> ', error)
      };
    }

    return () => {
        if (socketInstance?.readyState !== 3) {
          socketInstance.close(1000);
        }
    }
  }, [socketMessages])

  console.log(socketMessages, 'asdsa');
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