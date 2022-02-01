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
import {
  backButtonShouldDo,
  closeAll,
  setStepDepositModal,
  showChangePasswordPopup
} from "../../redux/actions/showPopups";
import {DepositWidgetMainContainer} from "./DepositWidget/DepositWidgetMainContainer";
import {PaymentsCardWrapper} from "./PaymentsModals/PaymentsCardWrapper";
import {PaymentsCryptoWrapper} from "./PaymentsModals/PaymentsCryptoWrapper";
import {MobilePaymentsStepper} from "./PaymentsModals/MobilePaymentsStepper";
import Head from "next/head";
import {ExitIntentPopup} from "../ExitIntentComponent/ExitIntentPopup";
import {SelectCurrencyWidget} from "./SelectCurrencyWidget/SelectCurrencyWidget";
import {ForgotPasswordComponent} from "../ForgotPasswordComponents/ForgotPasswordComponent";
import {ChangePasswordContainer} from "../ForgotPasswordComponents/ChangePasswordContainer/ChangePasswordContainer";
import {showLogin} from "../../redux/actions/loginShow";
import {showRegister} from "../../redux/actions/registerShow";
import {EmailValidationContainer} from "../ForgotPasswordComponents/EmailValidationContainer/EmailValidationContainer";
import {EmailValidationError} from "../ForgotPasswordComponents/EmailValidationContainer/EmailValidationError";


const MainLayout = ({children, t, token, emailError}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const locale = router.locale;
  const {width, height} = useWindowDimensions();


  useEffect(() => {
    dispatch(closeAll(false));
    dispatch(backButtonShouldDo(false));
    dispatch(showLogin(false));
    dispatch(showRegister(false));
  }, [router])


  const userInfo = useSelector((userInfo) => userInfo.authInfo);
  const isShowModal = useSelector((store) => store.showPopupsReducer);
  const paymentsData = useSelector((store) => store.depositData);

  let registerShow = useSelector((isShowRegister) => isShowRegister.showRegister.isShow);
  let logInShow = useSelector((isShowLogin) => isShowLogin.showLogin.isShow);
  // console.log(userInfo.isAuthenticated, 'layout  add term to show manage subscriptions');
  let toursref = useRef()

  // const userPayment = useSelector((state) => state.userPaymentMethod);


  useEffect(() => {

    for (let showModalKey in isShowModal) {
      if (
        showModalKey === 'actionForBackButton'
        ||
        showModalKey === 'actionForBackButtonPayments'
        ||
        showModalKey === 'depositModalStep'
        ||
        showModalKey === 'errorPopupData'
        ||
        showModalKey === 'isShowTournaments'
        ||
        showModalKey === 'showErrorPopup'
        ||
        showModalKey === 'isShowExitIntentPopup'
      ) {

      } else {
        if (isShowModal[showModalKey] === true) {
          document.body.style.overflowY = "hidden"
          break;
        } else {
          document.body.style.overflowY = "auto"
          if (logInShow || registerShow) {
            document.body.style.overflowY = "hidden"
          } else {
            document.body.style.overflowY = "auto"
          }
        }
      }
    }


  }, [isShowModal, registerShow, logInShow])

  return (
    <>
      <iframe style={{display: "none"}} id={'currencyIframe'} src={"/assets/sprite.svg"}/>
      <Head>
        <title>Slots Idol</title>
        <script type="text/javascript" src={"/chatWidget/chatWidget.js"}/>
      </Head>
      <div className={styles.mainLayoutWrapper}>
        <Header t={t}/>
        <ExitIntentPopup
          isShowExitIntent={isShowModal.isShowExitIntentPopup}
          t={t}
          userInfo={userInfo}
        />
        <DepositWidgetMainContainer
          userAuth={userInfo}
          t={t}
        />
        {
          isShowModal.isShowMobilePaymentsStepper
            ?
            <MobilePaymentsStepper
              isShow={isShowModal.isShowMobilePaymentsStepper}
              paymentsData={paymentsData}
              userAuth={userInfo}
              t={t}
            />
            :
            <></>
        }
        {
          isShowModal.isShowCreditCardModal
            ?
            <PaymentsCardWrapper
              isShow={isShowModal.isShowCreditCardModal}
              paymentsData={paymentsData}
              userInfo={userInfo}
              t={t}
            />
            :
            <></>
        }
        {
          isShowModal.isShowCryptoModal
            ?
            <PaymentsCryptoWrapper
              isShow={isShowModal.isShowCryptoModal}
              paymentsData={paymentsData}
              t={t}
            />
            :
            <></>
        }
        {
          isShowModal.isShowSearchModal
            ?
            <SearchModalWindowWrapper
              isShowSearchModal={isShowModal.isShowSearchModal}
              t={t}
            />
            :
            <></>
        }
        <MobileSideMenu
          t={t}
          userInform={userInfo}
        />
        {
          isShowModal.isShowPlaySafe
            ?
            <PlaySafeMainWrapper
              isShow={isShowModal.isShowPlaySafe}
              t={t}
            />
            :
            <></>
        }
        {
          userInfo.isAuthenticated
            ?
            ""
            :
            <RegisterSignup
              isShow={registerShow}
              t={t}
            />
        }
        <LogIn
          isShow={logInShow}
          t={t}
        />


        {/*<SelectCurrency t={t}/>*/}
        {
          isShowModal.isShowCurrencySwitcher || isShowModal.isShowPaymentCurrencySwitcher
            ?
            <SelectCurrencyWidget
              t={t}
              isShowCurrencySwitcher={isShowModal.isShowCurrencySwitcher}
              isShowPaymentCurrencySwitcher={isShowModal.isShowPaymentCurrencySwitcher}
              isShowMobileCryptoPayments={isShowModal.isShowMobileCryptoPayments}
            />
            :
            <></>
        }

        {userInfo.isAuthenticated
          ?
          <DepositPage
            t={t}
          />
          :
          ""
        }
        {
          userInfo.isAuthenticated
            ?
            <ManageSubscriptions
              t={t}
            />
            :
            ""
        }
        <TournamentIcon
          toursref={toursref}
        />
        <TournamentMainContainer
          toursref={toursref}
          router={router}
          isShowModal={isShowModal}
          userInfo={userInfo}
          t={t}
        />
        {isShowModal.isShowTournamentsDetails
          ?
          <TournamentModalDetails
            t={t}
          />
          :
          <></>
        }
        {children}
        {
          userInfo.isAuthenticated && width > 1239
            ?
            <FooterAreaContainer
              userData={userInfo}
              t={t}
            />
            :
            ""
        }
        <Footer
          t={t}
          userAuth={userInfo.isAuthenticated}
          screenWidth={width}
        />
        {/*<LangSwitcher href={router.route} locale={locale}/>*/}
        {isShowModal.isShowForgotPassword
          ?
          <ForgotPasswordComponent
            t={t}
          />
          :
          <></>
        }
        {
          isShowModal.isShowChangePassword && token
            ?
            <ChangePasswordContainer
              t={t}
              token={token}
            />
            :
            <></>
        }
        {
          isShowModal.isShowEmailValidationSuccess
              ?
              <EmailValidationContainer t={t}/>
              :
              <>
              </>
        }
        {
          isShowModal.isShowEmailValidationError
              ?
              <EmailValidationError
                  t={t}
                  emailError={emailError}
              />
              :
              <>
              </>
        }

      </div>
    </>
  )
}

export default MainLayout;