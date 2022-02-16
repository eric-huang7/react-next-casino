import {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setNotifyTypeFour, setNotifyTypeOne, setNotifyTypeThree, setNotifyTypeTwo} from "../redux/actions/setNotify";
import {notificator} from "../helpers/notificator";
import {changeLocalUserSubscriptions} from "../redux/actions/userSubscriptionData";


export default function useWebsocketNotification(userInfo, locale, browserNotify) {
  const dispatch = useDispatch();

  let socketRef = useRef(null);
  // let socket;
  const restart = () => {
    let maySound = browserNotify
    runSocket(maySound, userInfo);
  }
  function runSocket(maySound, userInf) {


    if (socketRef.current) {
      socketRef.current.close(1000);
      socketRef.current = null;
    }
    if (userInf.isAuthenticated) {
      if (userInf.user.token) {
        socketRef.current = new WebSocket(`ws://t-gpb.slotsidol.com:7700?token=${userInf.user.token}&locale=${locale}`);
      }

      socketRef.current.onopen = function (e) {

        if (socketRef.current.readyState !== 3) {
          // socketRef.current = socket;
        } else {
          socketRef.current.close(1000);
          socketRef.current = null;
        }

      };

      socketRef.current.onclose = function (e) {
        if (e.wasClean) {

        } else {

          if (userInf.user.token) {
            // socketRef.current = new WebSocket(`ws://t-gpb.slotsidol.com:7700?token=${userInf.user.token}&locale=${locale}`);
            restart();
          }
        }

        // runSocket(maySound, userInfo);
      };

      socketRef.current.onmessage = function (e) {

        let data = JSON.parse(e.data);

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
        }

      };

      socketRef.current.onerror = function (error) {
        // console.log('some socket error ===> ', error)
        if (socketRef.current !== null) {
          socketRef.current.close(1000);
          socketRef.current = null;
          // restart();
        }

      };
    }
    // else {
    //   if (socketRef.current !== null) {
    //     socketRef.current.close(1000);
    //   }
    //   if (socketRef.current.readyState === 3) {
    //     socketRef.current.close(1000)
    //   }
    // }
  }



  useEffect(() => {
    if (userInfo.isAuthenticated) {
      let maySound = browserNotify
      if (userInfo.user.token) {
        if(socketRef.current === null) {
          runSocket(maySound, userInfo);
        } else {
          socketRef.current.close(1000)
          socketRef.current = null;
        }
      }
    }
    return () => {
      if (socketRef.current !== null) {
        socketRef.current.close(1000);
        socketRef.current = null;
      }
    }
  }, [userInfo.isAuthenticated, userInfo.user]);


  return socketRef;
}