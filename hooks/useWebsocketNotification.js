import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {setNotifyTypeFour, setNotifyTypeThree, setNotifyTypeTwo} from "../redux/actions/setNotify";
import {notificator} from "./notificator";


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
          notificator(data);

        } else if (data.type === 4) {
          dispatch(setNotifyTypeFour(data))
          notificator(data);
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