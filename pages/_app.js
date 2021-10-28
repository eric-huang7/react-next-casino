
import { appWithTranslation } from 'next-i18next'
import {Provider} from "react-redux";
import {store} from "../redux/store";

import "../styles/globals.scss"
import {useCookies} from "react-cookie";
import {useRouter} from "next/router";
import {useEffect} from "react";



const MyApp = ({ Component, pageProps }) => {
  const [cookies, setCookie, removeCookie] = useCookies(['language']);
  const router = useRouter();
  useEffect(() => {
    if (cookies.language) {
      router.push(router.route, router.route, {locale: cookies.language})
    }
  }, [])


  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}


export default appWithTranslation(MyApp)
