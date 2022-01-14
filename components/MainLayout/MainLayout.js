/* eslint-disable */
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
import {useEffect, useRef} from "react";
import {PlaySafeMainWrapper} from "../PlaySafeComponents/PlaySafeMainWrapper";
import {FooterAreaContainer} from "../FooterArea/FooterAreaContainer";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import {TournamentMainContainer} from "./TournamentSidebar/TournamentMainContainer";
import {TournamentIcon} from "./TournamentIcon/TournamentIcon";
import {TournamentModalDetails} from "./TournamentSidebar/TournamentModalDetails/TournamentModalDetails";
import {getTournaments} from "../../redux/actions/getTournaments";
import {closeAll} from "../../redux/actions/showPopups";
import {DepositWidgetMainContainer} from "./DepositWidget/DepositWidgetMainContainer";
import {PaymentsCardWrapper} from "./PaymentsModals/PaymentsCardWrapper";
import {PaymentsCryptoWrapper} from "./PaymentsModals/PaymentsCryptoWrapper";
import {MobilePaymentsStepper} from "./PaymentsModals/MobilePaymentsStepper";
import Head from "next/head";
import {ExitIntentPopup} from "../ExitIntentComponent/ExitIntentPopup";
import {SelectCurrencyWidget} from "./SelectCurrencyWidget/SelectCurrencyWidget";


const MainLayout = ({children, t}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const locale = router.locale;
  const {width, height} = useWindowDimensions();


  useEffect(() => {
    dispatch(closeAll(false));
  }, [router])


  const userInfo = useSelector((userInfo) => userInfo.authInfo);
  const isShowModal = useSelector((store) => store.showPopupsReducer);
  const paymentsData = useSelector((store) => store.depositData);

  let registerShow = useSelector((isShowRegister) => isShowRegister.showRegister.isShow);
  let logInShow = useSelector((isShowLogin) => isShowLogin.showLogin.isShow);
  // console.log(userInfo.isAuthenticated, 'layout  add term to show manage subscriptions');
  let toursref = useRef()

  return (
    <>
      <Head>
        <title>Slots Idol</title>
        <script type="text/javascript" src={"/chatWidget/chatWidget.js"}/>
      </Head>
      <div className={styles.mainLayoutWrapper}>
        <Header t={t}/>
        <ExitIntentPopup isShowExitIntent={isShowModal.isShowExitIntentPopup} t={t} userInfo={userInfo} />
        <DepositWidgetMainContainer userAuth={userInfo} t={t}/>
        {isShowModal.isShowMobilePaymentsStepper ? <MobilePaymentsStepper paymentsData={paymentsData} userAuth={userInfo} t={t}/> : <></>}
        {isShowModal.isShowCreditCardModal ? <PaymentsCardWrapper paymentsData={paymentsData} userInfo={userInfo} t={t}/> : <></>}
        {isShowModal.isShowCryptoModal ? <PaymentsCryptoWrapper paymentsData={paymentsData} t={t}/> : <></>}
        {isShowModal.isShowSearchModal ? <SearchModalWindowWrapper isShowSearchModal={isShowModal.isShowSearchModal} t={t}/> : <></>}
        <MobileSideMenu t={t} userInform={userInfo}/>
        {isShowModal.isShowPlaySafe ? <PlaySafeMainWrapper t={t}/> : <></>}
        {userInfo.isAuthenticated ? "" : <RegisterSignup isShow={registerShow} t={t}/>}
        <LogIn isShow={logInShow} t={t}/>


        {/*<SelectCurrency t={t}/>*/}
        {isShowModal.isShowCurrencySwitcher ? <SelectCurrencyWidget t={t} isShowCurrencySwitcher={isShowModal.isShowCurrencySwitcher} /> : <></>}

        {userInfo.isAuthenticated ? <DepositPage t={t}/> : ""}
        {userInfo.isAuthenticated ? <ManageSubscriptions t={t}/> : ""}
        <TournamentIcon toursref={toursref}/>
        <TournamentMainContainer toursref={toursref} router={router} isShowModal={isShowModal} userInfo={userInfo} t={t} />
        {isShowModal.isShowTournamentsDetails ? <TournamentModalDetails t={t}/> : <></>}
        {children}
        {userInfo.isAuthenticated && width > 1239 ? <FooterAreaContainer userData={userInfo} t={t}/> : ""}
        <Footer t={t} userAuth={userInfo.isAuthenticated} screenWidth={width}/>
        {/*<LangSwitcher href={router.route} locale={locale}/>*/}
      </div>
    </>
  )
}

export default MainLayout;