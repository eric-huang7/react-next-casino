import {Header} from "./Header/Header";

import styles from '../../styles/MainLayout.module.scss'
import {Footer} from "./Footer/Footer";
import {RegisterSignup} from "./RegisterSignup/RegisterSignup";
import {LogIn} from "./LogIn/LogIn";

const MainLayout = ({children, t}) => {
  let registerShow = false;
  let logInShow = true;
  return (
          <div  className={styles.mainLayoutWrapper}>
            <Header t={t}/>
            <RegisterSignup isShow={registerShow} t={t}/>
            <LogIn isShow={logInShow} t={t}/>
            {children}
            <Footer t={t}/>

          </div>
  )
}

export default MainLayout;