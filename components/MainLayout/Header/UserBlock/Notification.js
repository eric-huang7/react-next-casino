import styles from "../../../../styles/Header/UserBlock.module.scss";
import {NotificationPopup} from "./NotificationPopup/NotificationPopup";
import {useDispatch, useSelector} from "react-redux";
import {showNotifications} from "../../../../redux/actions/showPopups";
import {useEffect, useState} from "react";
// import {io} from 'socket.io-client'
import {BellNotification} from "./BellNotification";


export const Notification = () => {
  const dispatch = useDispatch()
  // const isShowNotifications = useSelector((store) => store.showPopupsReducer.isShowNotifications);

  const userInfo = useSelector((store) => store.authInfo.user)
  // useEffect(() => {
  //   let socket = new WebSocket(`ws://t-gpb.slotsidol.com:7700?token=${userInfo.token}`);
  //   socket.onopen = function (e) {
  //     console.log('open')
  //   }
  //   socket.onclose = function (e) {
  //     if (e.wasClean) {
  //       console.log('close clear', e.code, "@", e.reason)
  //       // alert(`[close] Соединение закрыто чисто, код=${e.code} причина=${e.reason}`);
  //     } else {
  //       console.log('close dirt', e)
  //       // например, сервер убил процесс или сеть недоступна
  //       // обычно в этом случае event.code 1006
  //       // alert('[close] Соединение прервано');
  //     }
  //   }
  //   socket.onmessage = function(e) {
  //     console.log('=>', JSON.parse(e.data));
  //     // console.log('===>>>', JSON.parse(e.data.msg));
  //     // alert(`[message] Данные получены с сервера: ${event.data}`);
  //   };
  // }, [])


  const [isShowNotifications, setisShowNotifications] =useState(false)
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
      <BellNotification messageCount={3}/>
      <NotificationPopup isShowNotifications={isShowNotifications}/>
    </>

  )
}