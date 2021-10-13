import {Header} from "./Header/Header";

import styles from '../../styles/MainLayout.module.scss'
import {Footer} from "./Footer/Footer";
import {RegisterSignup} from "./RegisterSignup/RegisterSignup";
import {LogIn} from "./LogIn/LogIn";
import {useDispatch, useSelector} from "react-redux";


const MainLayout = ({children, t}) => {



  const userInfo = useSelector((userInfo) => userInfo.authInfo);
  console.log('AUTH INFORM', userInfo);



  let registerShow = useSelector((isShowRegister) => isShowRegister.showRegister.isShow);
  let logInShow = useSelector((isShowLogin) => isShowLogin.showLogin.isShow);
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