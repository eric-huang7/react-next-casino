import {appWithTranslation} from 'next-i18next'
import {Provider} from 'react-redux'
import {store} from '../redux/store'

import '../styles/globals.scss'
import {useCookies} from 'react-cookie'
import {useRouter} from 'next/router'
import {useEffect} from 'react'
import {NotifyProvider} from '../components/NotifyContext/NotifyContext'
import nextI18nextConfig from '../next-i18next.config'
import {GameProvider} from '../components/GamePageComponents/GameProvider'
import Head from 'next/head'
import {ChakraProvider} from "@chakra-ui/react";
import theme from "../styles/theme";

const MyApp = ({Component, pageProps}) => {
  const [cookies, setCookie, removeCookie] = useCookies(['language'])
  const router = useRouter()
  let locale = router.locale

  useEffect(() => {
    if (cookies.language) {
      if (cookies.language === 'en') {
        router.push(
          {
            pathname: router.route,
            query: {...router.query}
          },
          router.route,
          {locale: cookies.language, scroll: false})
      } else {
        router.push(
          {
            pathname: router.route,
            query: {...router.query}
          },
          `/${cookies.language}${router.route}`,
          {locale: cookies.language, scroll: false})
      }
    }
  }, [])
  // TODO: need to change
  //cookies.language, router.route

  return (
    <>
      <Head>
        <title>Slots Idol</title>
      </Head>
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <iframe style={{display: 'none'}} id={'currencyIframe'} src={'/assets/sprite.svg'}/>
          <NotifyProvider store={store}>
            <GameProvider>
              <Component {...pageProps} />
            </GameProvider>
          </NotifyProvider>
        </ChakraProvider>
      </Provider>
    </>
  )
}

export default appWithTranslation(MyApp, nextI18nextConfig)
