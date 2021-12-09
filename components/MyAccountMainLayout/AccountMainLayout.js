/* eslint-disable react-hooks/exhaustive-deps */
import styles from '../../styles/MyAccount/MainLayout/MainLayout.module.scss';
import {Header} from "../MainLayout/Header/Header";
import {SideMenu} from "./AccountLayoutConponents/SideMenu";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getUserPayments, userBalance} from "../../redux/actions/userData";
import {getCurrency} from "../../redux/actions/currency";
import {DepositPage} from "../MainLayout/DepositPage/DepositPage";
import {MobileSideMenu} from "../MobileSideMenu/MobileSideMenu";
import {SelectCurrency} from "../HomePageComponents/SelectCurrency/SelectCurrency";


export const AccountMainLayout = ({t, children}) => {
  const dispatch = useDispatch()
  const isShowModal = useSelector((store) => store.showPopupsReducer);
  const userInfo = useSelector((userInfo) => userInfo.authInfo);

  useEffect(() => {
    dispatch(userBalance());
    dispatch(getCurrency());

    if (userInfo.isAuthenticated) {
      dispatch(getUserPayments({user_id: Number(userInfo?.user?.user?.id)}));
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