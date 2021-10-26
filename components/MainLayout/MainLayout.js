import {Header} from "./Header/Header";

import styles from '../../styles/MainLayout.module.scss'
import {Footer} from "./Footer/Footer";
import {RegisterSignup} from "./RegisterSignup/RegisterSignup";
import {LogIn} from "./LogIn/LogIn";
import {useDispatch, useSelector} from "react-redux";
import {MobileSideMenu} from "../MobileSideMenu/MobileSideMenu";
import {SelectCurrency} from "../HomePageComponents/SelectCurrency/SelectCurrency";
import {useRouter} from "next/router";
import LangSwitcher from "../LangSwitcher/LangSwitcher";
import {DepositPage} from "./DepositPage/DepositPage";


const MainLayout = ({children, t}) => {
  const router = useRouter();
  const locale = router.locale;


  const userInfo = useSelector((userInfo) => userInfo.authInfo);
  // console.log('AUTH INFORM', userInfo);



  let registerShow = useSelector((isShowRegister) => isShowRegister.showRegister.isShow);
  let logInShow = useSelector((isShowLogin) => isShowLogin.showLogin.isShow);
  return (
          <div  className={styles.mainLayoutWrapper}>
            <Header t={t}/>
            <MobileSideMenu t={t} userInform={userInfo}/>
            <RegisterSignup isShow={registerShow} t={t}/>
            <LogIn isShow={logInShow} t={t}/>
            <SelectCurrency t={t}/>
            <DepositPage t={t}/>
            {children}
            <Footer t={t}/>
            {/*<LangSwitcher href={router.route} locale={locale}/>*/}
          </div>
  )
}

export default MainLayout;