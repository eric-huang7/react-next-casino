
import { appWithTranslation } from 'next-i18next'
import {Provider} from "react-redux";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider >
      <Component {...pageProps} />
    </Provider>

  )
}


export default appWithTranslation(MyApp)
