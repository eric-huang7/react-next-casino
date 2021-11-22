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
import {ManageSubscriptions} from "./ManageSubscriptions/ManageSubscriptions";
import {SearchModalWindowWrapper} from "../SearchGamesModalWindow/SearchModalWindowWrapper";
import {useEffect} from "react";


const MainLayout = ({children, t}) => {
  const router = useRouter();
  const locale = router.locale;

  const userInfo = useSelector((userInfo) => userInfo.authInfo);
  const isShowSearchModal = useSelector((store) => store.showPopupsReducer.isShowSearchModal);

  let registerShow = useSelector((isShowRegister) => isShowRegister.showRegister.isShow);
  let logInShow = useSelector((isShowLogin) => isShowLogin.showLogin.isShow);
  // console.log(userInfo.isAuthenticated, 'layout  add term to show manage subscriptions');


  return (
          <div  className={styles.mainLayoutWrapper}>
            <Header t={t}/>
            {isShowSearchModal ? <SearchModalWindowWrapper isShowSearchModal={isShowSearchModal} t={t}/> : <></>}
            <MobileSideMenu t={t} userInform={userInfo}/>
            {userInfo.isAuthenticated ? "" : <RegisterSignup isShow={registerShow} t={t}/>}
            <LogIn isShow={logInShow} t={t}/>
            <SelectCurrency t={t}/>
            {userInfo.isAuthenticated ? <DepositPage t={t}/> : ""}
            {userInfo.isAuthenticated ? <ManageSubscriptions t={t}/> : ""}
            {children}
            <Footer t={t}/>
            {/*<LangSwitcher href={router.route} locale={locale}/>*/}
          </div>
  )
}

export default MainLayout;