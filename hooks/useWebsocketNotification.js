import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {setNotifyTypeFour, setNotifyTypeThree, setNotifyTypeTwo} from "../redux/actions/setNotify";


export default function useWebsocketNotification(userInfo, locale) {
  const dispatch = useDispatch();
  const [socketData, setSocketData] = useState({
    messages: [],
    socketInstance: undefined,
  })

  useEffect(() => {
    if (userInfo.isAuthenticated) {

      let socket = new WebSocket(`ws://t-gpb.slotsidol.com:7700?token=${userInfo.user.token}&locale=${locale}`);


      socket.onopen = function (e) {
        console.log('socket open!')
        setSocketData({
          ...socketData,
          socketInstance: socket,
        })


      };

      socket.onclose = function (e) {
        if (e.wasClean) {
          console.log('close clear', e.code, "@", e.reason);
        } else {
          console.log('close dirt', e);
        }
      };

      socket.onmessage = function (e) {
        // console.log('message ===>>>', e);
        let data = JSON.parse(e.data);
        console.log('===>> data', data);
        if (data.type === 2) {
          dispatch(setNotifyTypeTwo(data));
        } else if (data.type === 3) {
          dispatch(setNotifyTypeThree(data));
          if (Notification.permission === "granted") {
            let pushData = JSON.parse(data.msg);
            let img = '/assets/icons/notifications/sound.svg';
            if (pushData.type === 'bonus') {
              img = '/assets/icons/notifications/diam.svg';
            } else if (pushData.type === 'redeem' || pushData.type === 'deposit' || pushData.type === 'withdraw') {
              img = '/assets/icons/notifications/wallet.svg';
            } else if (pushData.type === 'freespins') {
              img = '/assets/icons/notifications/arr.svg';
            } else if (pushData.type === 'tournaments') {
              img = '/assets/icons/notifications/cup.svg';
            } else {
              img = '/assets/icons/notifications/sound.svg';
            }
            let text = pushData.i18n.ru;
            let notify = new Notification('New notify', {body: text, icon: img});
            console.log(JSON.parse(data.msg), 'notify!!!!')

          }

        } else if (data.type === 4) {
          dispatch(setNotifyTypeFour(data))
        } else {
          console.log('SOME WRONG DATA TYPE MESSAGE');
        }
        setSocketData({
          ...socketData,
          messages: [data],
          socketInstance: socket,
        })

      };

      socket.onerror = function (error) {
        console.log('some error ===> ', error)
      };

      return () => {
        socket.close(1000);
        console.log('socket close unmount')
      }
    }
  }, [userInfo.isAuthenticated]);

  return socketData;
}