import {createContext, useState} from "react";
import {useRouter} from "next/router";
import useWebsocketNotification from "../../hooks/useWebsocketNotification";
import {useSelector} from "react-redux";

let NotifyContext = createContext({socket: null});

const NotifyProvider = (props) => {
  const router = useRouter()
  let locale = router.locale;
  const userInfo = useSelector((store) => store.authInfo);
  let browserNotify = useSelector((state) => state.userSubscriptions.notifySubscribe);

  return (
    <NotifyContext.Provider value={{socket: useWebsocketNotification(userInfo, locale, browserNotify)}}>
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


