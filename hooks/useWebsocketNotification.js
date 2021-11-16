import {useEffect, useState} from "react";


export default function useWebsocketNotification(userInfo, locale) {
  const [socketData, setSocketData] = useState({
    messages: undefined,
    socketInstance: undefined,
  })

  useEffect(() => {

    let socket = new WebSocket(`ws://t-gpb.slotsidol.com:7700?token=${userInfo.token}&locale=${locale}`);


    socket.onopen = function (e) {
      console.log('open!')
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
      console.log('message ===>>>', e);
      let data = JSON.parse(e.data);
      let message = data.msg;

      if (typeof message === "string") {
        setSocketData({
          socketInstance: socket,
          messages: socketData.messages.concat([JSON.parse(message)]),
        })
      } else {
        if (Object.keys(message).length > 0) {
          setSocketData({
            socketInstance: socket,
            messages: [...message],
          })
        }
      }
    };

    socket.onerror = function (error) {
      console.log('some error ===> ', error)
    };

    return () => {
      socket.close(1000);
      console.log('socket close unmount')
    }
  }, [])


  console.log('message start', socketData);
  return socketData;
}