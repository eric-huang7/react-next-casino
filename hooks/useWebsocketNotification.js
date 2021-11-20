import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setNotifyTypeFour, setNotifyTypeThree, setNotifyTypeTwo} from "../redux/actions/setNotify";
import {notificator} from "../helpers/notificator";
import {changeLocalUserSubscriptions} from "../redux/actions/userSubscriptionData";


export default function useWebsocketNotification(userInfo, locale) {
  const dispatch = useDispatch();

  let browserNotify = useSelector((state) => state.userSubscriptionsData.notifySubscribe);


  const [socketData, setSocketData] = useState({
    messages: [],
    socketInstance: undefined,
  })
  console.log(browserNotify, 'hook');
  useEffect(() => {
    if (userInfo.isAuthenticated) {
      let maySound = browserNotify
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
        console.log('eeeeeeeeeeee', e);
        console.log('===>> data', data);
        if (data.type === 2) {
          // dispatch(setNotifyTypeTwo(data));
        } else if (data.type === 3) {
          // dispatch(setNotifyTypeThree(data));
          if (maySound) {
            let audio = new Audio('/sounds/message.mp3')
            audio.play().then(e => console.log('message play ===>', e));
            notificator(data);
          }


        } else if (data.type === 4) {
          // dispatch(setNotifyTypeFour(data))
          if (maySound) {
            let audio = new Audio('/sounds/message.mp3')
            audio.play().then(e => console.log('message play ===>', e));
            notificator(data);
          }
        } else {
          console.log('SOME WRONG DATA TYPE MESSAGE');
        }
        setSocketData({
          ...socketData,
          messages: data.msg,
          socketInstance: socket,
        })
         // if (userInfo.)




      };

      socket.onerror = function (error) {
        console.log('some error ===> ', error)
      };

      return () => {
        socket.close(1000);
        console.log('socket close unmount')
      }
    }
  }, [userInfo.isAuthenticated, browserNotify]);

  return socketData;
}