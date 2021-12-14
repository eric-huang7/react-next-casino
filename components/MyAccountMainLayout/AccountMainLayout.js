/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable */
import styles from '../../styles/MyAccount/MainLayout/MainLayout.module.scss';
import {Header} from "../MainLayout/Header/Header";
import {SideMenu} from "./AccountLayoutConponents/SideMenu";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {
  auth,
  getUserActivePendingBonuses,
  getUserBets,
  getUserBonuses,
  getUserPayments,
  userBalance
} from "../../redux/actions/userData";
import {getCurrency} from "../../redux/actions/currency";
import {DepositPage} from "../MainLayout/DepositPage/DepositPage";
import {MobileSideMenu} from "../MobileSideMenu/MobileSideMenu";
import {SelectCurrency} from "../HomePageComponents/SelectCurrency/SelectCurrency";
import {useRouter} from "next/router";
import MainLayout from "../MainLayout/MainLayout";
import {showRegister} from "../../redux/actions/registerShow";
import {showLogin} from "../../redux/actions/loginShow";
import Head from "next/head";



export const AccountMainLayout = ({t, children}) => {
  const dispatch = useDispatch()
  const isShowModal = useSelector((store) => store.showPopupsReducer);
  const userInfo = useSelector((userInfo) => userInfo.authInfo);
  const currency = useSelector((store) => store.getCurrency);
  const router = useRouter();


  useEffect(() => {

    if (!userInfo.userAuthLoading && !userInfo.isAuthenticated) {

      router.replace('/').then((data) => {
      });

      dispatch(showLogin(true));
    }
  }, [userInfo.userAuthLoading, userInfo.isAuthenticated]);



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
      // if (!userInfo.balance) {
      //   console.log('balance fetch', userInfo.balance)
      //   dispatch(userBalance());
      // }
      if (!userInfo.userBetsData) {
        dispatch(getUserBets());
      }
      if (!currency.currency) {
        dispatch(getCurrency());
      }
    }

    // console.log('effect fetcher', userInfo)
  }, [userInfo.isAuthenticated]);




if (userInfo.isAuthenticated) {
  return (
    <>
      <Head>
        <title>Slots Idol</title>
        <script type="text/javascript" src={"/chatWidget/chatWidget.js"}/>
      </Head>
      <div  className={styles.accountMainLayoutWrapper}>
        <Header t={t}/>
        {userInfo.isAuthenticated ? <DepositPage t={t}/> : ""}
        <MobileSideMenu t={t} userInform={userInfo}/>
        <SelectCurrency t={t}/>
        <div className={styles.myAccountContainer}>
          <div className={styles.accountInnerContainer}>
            <SideMenu t={t}/>
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
  <div  className={styles.accountMainLayoutWrapper}>
    <Header t={t}/>
  </div>
  )


}

}