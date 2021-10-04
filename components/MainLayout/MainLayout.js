import {Header} from "./Header/Header";

import styles from '../../styles/MainLayout.module.scss'
import {Footer} from "./Footer/Footer";

const MainLayout = ({children, t}) => {

  return (
          <div  className={styles.mainLayoutWrapper}>
            <Header t={t}/>
            {children}
            <Footer t={t}/>
          </div>
  )
}

export default MainLayout;