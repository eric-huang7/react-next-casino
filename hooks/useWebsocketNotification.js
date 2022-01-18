import {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setNotifyTypeFour, setNotifyTypeOne, setNotifyTypeThree, setNotifyTypeTwo} from "../redux/actions/setNotify";
import {notificator} from "../helpers/notificator";
import {changeLocalUserSubscriptions} from "../redux/actions/userSubscriptionData";


export default function useWebsocketNotification(userInfo, locale, browserNotify) {
  const dispatch = useDispatch();

  console.log(userInfo.isAuthenticated, userInfo?.user?.token, 'user socket hook')

  let socketRef = useRef(null);
  let socket;
  function runSocket(maySound) {
    if (socketRef.current) {
      socketRef.current.close();
    }
    if (userInfo.isAuthenticated) {
      if (userInfo.user.token) {
        socket = new WebSocket(`ws://t-gpb.slotsidol.com:7700?token=${userInfo.user.token}&locale=${locale}`);
      }

      socket.onopen = function (e) {
        console.log('socket open!')
        if (socket.readyState !== 3) {
          socketRef.current = socket;
        } else {
          socket.close()
        }

      };

      socket.onclose = function (e) {
        if (e.wasClean) {
          console.log('close clear', e.code, "@", e.reason);
        } else {
          console.log('close dirt', e);
        }
        runSocket(maySound);
      };

      socket.onmessage = function (e) {
        // console.log('message ===>>>', e);
        let data = JSON.parse(e.data);
        console.log('===>> data', data);
        if (data.type === 2) {
          dispatch(setNotifyTypeTwo(data));
        } else if (data.type === 3) {
          dispatch(setNotifyTypeThree(data));
          // if (maySound && Notification.permission === 'granted') {
          //   let audio = new Audio('/sounds/message.mp3')
          //   audio.play().then(e => console.log('message play ===>', e));
          //   notificator(data);
          // }
        } else if (data.type === 4) {
          dispatch(setNotifyTypeFour(data))
          // if (maySound && Notification.permission === 'granted') {
          //   let audio = new Audio('/sounds/message.mp3')
          //   audio.play().then(e => console.log('message play ===>', e));
          //   notificator(data);
          // }
        } else if (data.type === 1){
          dispatch(setNotifyTypeOne(data));
          console.log('SOME READ NOTIFY type_1  ');
        }

      };

      socket.onerror = function (error) {
        console.log('some socket error ===> ', error)
        socket.close();
      };
    } else {
      if (socketRef.current !== null) {
        socketRef.current.close(1000);
        console.log('socket close unmount  ', )
      }
      if (socket.readyState === 3) {
        socket.close()
      }
    }
  }



  useEffect(() => {
    if (userInfo.isAuthenticated) {
      let maySound = browserNotify
      if (userInfo.user.token) {
        if(socketRef.current === null) {
          runSocket(maySound);
        } else {
          socketRef.current.close()
          socketRef.current = null;
        }
      }
    }
    return () => {
      if (socketRef.current !== null) {
        socketRef.current.close(1000);
        console.log('socket close unmount  ')
      }
    }
  }, [userInfo.isAuthenticated, userInfo?.user?.token]);


  return socketRef;
}