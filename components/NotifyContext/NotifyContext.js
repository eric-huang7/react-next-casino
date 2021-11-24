import {createContext, useState} from "react";
import {useRouter} from "next/router";
import useWebsocketNotification from "../../hooks/useWebsocketNotification";
import {useSelector} from "react-redux";


let NotifyContext = createContext({socket: null});

const NotifyProvider = (props) => {
  const router = useRouter()
  let locale = router.locale;
  const userInfo = useSelector((store) => store.authInfo);
  let browserNotify = useSelector((state) => state.userSubscriptionsData.notifySubscribe);

  // console.log(browserNotify);
  const socket = useWebsocketNotification(userInfo, locale, browserNotify);

  return (
    <NotifyContext.Provider value={{socket: socket}}>
      {
        props.children
      }
    </NotifyContext.Provider>
  )
}

// const Consumer = NotifyContext.Consumer;
export {
  NotifyProvider,
  // Consumer,
  NotifyContext
}


