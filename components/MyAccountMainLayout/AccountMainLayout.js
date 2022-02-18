/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable */
import styles from '../../styles/MyAccount/MainLayout/MainLayout.module.scss';
import {Header} from "../MainLayout/Header/Header";
import {SideMenu} from "./AccountLayoutConponents/SideMenu";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {
  auth, getActiveUserSessions, getClosedUserSessions, getDocuments,
  getUserActivePendingBonuses,
  getUserBets,
  getUserBonuses,
  getUserPayments,
} from "../../redux/actions/userData";
import {getCurrency, getCurrencyJurisdiction} from "../../redux/actions/currency";
import {DepositPage} from "../MainLayout/DepositPage/DepositPage";
import {MobileSideMenu} from "../MobileSideMenu/MobileSideMenu";
import {useRouter} from "next/router";
import {showLogin} from "../../redux/actions/loginShow";
import Head from "next/head";
import {ErrorMessageContainer} from "./ErrorMessage/ErrorMessageContainer";
import {SelectCurrencyWidget} from "../MainLayout/SelectCurrencyWidget/SelectCurrencyWidget";
import {backButtonShouldDo, closeAll} from "../../redux/actions/showPopups";
import {PaymentsCardWrapper} from "../MainLayout/PaymentsModals/PaymentsCardWrapper";
import {PaymentsCryptoWrapper} from "../MainLayout/PaymentsModals/PaymentsCryptoWrapper";
import ErrorEmpty from "../ErrorBoundaryComponents/ErrorEmpty";
import ErrorHeaderPage from "../ErrorBoundaryComponents/ErrorBoundaryHeader";


export const AccountMainLayout = ({t, children}) => {
  const dispatch = useDispatch()
  const isShowModal = useSelector((store) => store.showPopupsReducer);
  const userInfo = useSelector((userInfo) => userInfo.authInfo);
  const currency = useSelector((store) => store.getCurrency);
  const paymentsData = useSelector((store) => store.depositData);
  const router = useRouter();


  useEffect(() => {
    dispatch(closeAll(false));
    dispatch(backButtonShouldDo(false));
  }, [router])

  useEffect(() => {

    if (!userInfo.userAuthLoading && !userInfo.isAuthenticated) {

      router.replace('/').then((data) => {
        dispatch(showLogin(true));
      });


    }
  }, [userInfo.userAuthLoading, userInfo.isAuthenticated]);

  useEffect(() => {

    for (let showModalKey in isShowModal) {
      if (
        showModalKey === 'isShowDepositModal'
        ||
        showModalKey === 'isShowMobileCryptoPayments'
        ||
        showModalKey === 'isShowCreditCardModal'
        ||
        showModalKey === 'isShowCryptoModal'
        ||
        showModalKey === 'isShowMobilePaymentsStepper'
        ||
        showModalKey === 'isShowPaymentCurrencySwitcher'
        ||
        showModalKey === 'isShowCurrencySwitcher'
      ) {
        if (isShowModal[showModalKey] === true) {
          document.body.style.overflowY = "hidden"
          break;
        } else {
          document.body.style.overflowY = "auto"
        }
      }
    }
  }, [isShowModal])


  useEffect(() => {

    if (userInfo.isAuthenticated) {
      if (!userInfo.userPayments) {
        // 14 for test more data
        dispatch(getUserPayments({user_id: Number(userInfo?.user?.user?.id)}));
      }
      if (!userInfo.bonusesHistory) {
        dispatch(getUserBonuses({status: "1,2,3,4,6"}));
      }
      if (!userInfo.activePendingBonuses) {
        dispatch(getUserActivePendingBonuses({status: "1,5"}))
      }
      if (!userInfo.userActiveSessions) {
        dispatch(getActiveUserSessions());
      }
      if (!userInfo.userClosedSessions) {
        dispatch(getClosedUserSessions());
      }

      if (!currency.currency_jurisdiction) {
        dispatch(getCurrencyJurisdiction());
      }
      if (!userInfo.userBetsData) {
        dispatch(getUserBets());
      }
      if (!currency.currency) {
        dispatch(getCurrency());
      }
      if (!userInfo.userDocuments) {
        dispatch(getDocuments());
      }

    }

  }, [userInfo.isAuthenticated]);


  useEffect(() => {
    if (router.pathname === "/accounts/two_factor") {
      dispatch(auth());
    }
  }, [router.pathname])


  if (userInfo.isAuthenticated) {
    return (
      <>
        {/*<iframe style={{display: "none"}} id={'currencyIframe'} src={"/assets/sprite.svg"}/>*/}
        <Head>
          <title>Slots Idol</title>
          <script type="text/javascript" src={"/chatWidget/chatWidget.js"}/>
        </Head>
        <div className={styles.accountMainLayoutWrapper}>
          <ErrorHeaderPage>
            <Header t={t}/>
          </ErrorHeaderPage>
          {
            isShowModal.showErrorPopup
              ?
            <ErrorEmpty>
              <ErrorMessageContainer
                errorData={isShowModal}
                t={t}
              />
            </ErrorEmpty>
              : <></>
          }
          <ErrorEmpty>
            <DepositPage t={t}/>
          </ErrorEmpty>
          {
            isShowModal.isShowCreditCardModal
              ?
            <ErrorEmpty>
              <PaymentsCardWrapper
                isShow={isShowModal.isShowCreditCardModal}
                paymentsData={paymentsData}
                userInfo={userInfo}
                t={t}
              />
            </ErrorEmpty>
              :
              <></>
          }
          {
            isShowModal.isShowCryptoModal
              ?
            <ErrorEmpty>
              <PaymentsCryptoWrapper
                isShow={isShowModal.isShowCryptoModal}
                paymentsData={paymentsData}
                t={t}
              />
            </ErrorEmpty>
              :
              <></>
          }
          <MobileSideMenu t={t} userInform={userInfo}/>
          {/*<SelectCurrency t={t}/>*/}
          {isShowModal.isShowCurrencySwitcher || isShowModal.isShowPaymentCurrencySwitcher
            ?
            <ErrorEmpty>
              <SelectCurrencyWidget
                t={t}
                isShowCurrencySwitcher={isShowModal.isShowCurrencySwitcher}
                isShowPaymentCurrencySwitcher={isShowModal.isShowPaymentCurrencySwitcher}
                isShowMobileCryptoPayments={isShowModal.isShowMobileCryptoPayments}
              />
            </ErrorEmpty>
            :
            <></>}
          <div className={styles.myAccountContainer}>
            <div className={styles.accountInnerContainer}>
              <SideMenu userInform={userInfo} t={t}/>
              <section className={styles.accountMainContainer}>
                {children}
              </section>
            </div>
          </div>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className={styles.accountMainLayoutWrapper}>
          <ErrorHeaderPage>
            <Header t={t}/>
          </ErrorHeaderPage>
        </div>
      </>
    )
  }
}