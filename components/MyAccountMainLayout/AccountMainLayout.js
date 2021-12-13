/* eslint-disable react-hooks/exhaustive-deps */
import styles from '../../styles/MyAccount/MainLayout/MainLayout.module.scss';
import {Header} from "../MainLayout/Header/Header";
import {SideMenu} from "./AccountLayoutConponents/SideMenu";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getUserBets, getUserBonuses, getUserPayments, userBalance} from "../../redux/actions/userData";
import {getCurrency} from "../../redux/actions/currency";
import {DepositPage} from "../MainLayout/DepositPage/DepositPage";
import {MobileSideMenu} from "../MobileSideMenu/MobileSideMenu";
import {SelectCurrency} from "../HomePageComponents/SelectCurrency/SelectCurrency";
import {useRouter} from "next/router";


export const AccountMainLayout = ({t, children}) => {
  const dispatch = useDispatch()
  const isShowModal = useSelector((store) => store.showPopupsReducer);
  const userInfo = useSelector((userInfo) => userInfo.authInfo);
  const currency = useSelector((store) => store.getCurrency);
  const router = useRouter();

  useEffect(() => {

    if (userInfo.isAuthenticated) {
      if (!userInfo.userPayments) {
        // 14 for test more data
        dispatch(getUserPayments({user_id: Number(userInfo?.user?.user?.id)}));
      }
      if (!userInfo.bonusesHistory) {
        dispatch(getUserBonuses({status: "1,2,3,4,6"}));
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
    else if (!userInfo.userAuthLoading && !userInfo.isAuthenticated) {
      router.replace('/').then((data) => {
        console.log(data, 'redirect')
      });
    }

    console.log('effect fetcher', userInfo)
  }, [userInfo.isAuthenticated]);


  return (
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
  )
}