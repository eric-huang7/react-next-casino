import {appWithTranslation} from 'next-i18next'
import {Provider} from "react-redux";
import {store} from "../redux/store";

import "../styles/globals.scss"
import {useCookies} from "react-cookie";
import {useRouter} from "next/router";
import {useEffect} from "react";
import useWebsocketNotification from "../hooks/useWebsocketNotification";
import {NotifyProvider} from "./NotifyContext";


const MyApp = ({Component, pageProps}) => {
  const [cookies, setCookie, removeCookie] = useCookies(['language']);
  const router = useRouter();
  let locale = router.locale;

  useEffect(() => {
    if (cookies.language) {
      if (cookies.language === 'en') {
        router.push(
          {
            pathname: router.route,
            query: {...router.query}
          },
          router.route,
          {locale: cookies.language})
      } else {
        router.push(
          {
          pathname: router.route,
          query: {...router.query}
        },
          `/${cookies.language}${router.route}`,
          {locale: cookies.language})
      }
    }
  }, [])
  // TODO: need to change
  //cookies.language, router.route


  return (
    <Provider store={store}>
      <NotifyProvider store={store}>
        <Component {...pageProps} />
      </NotifyProvider>
    </Provider>
  )
}


export default appWithTranslation(MyApp)
