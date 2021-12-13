import styles from '../../../styles/Header/Header.module.scss'
import {Navigation} from "./Navigation/Navigation";
import {UserBlockNavigation} from "./UserBlock/UserBlock";
import {useDispatch, useSelector} from "react-redux";
import {showLogin} from "../../../redux/actions/loginShow";
import {showRegister} from "../../../redux/actions/registerShow";
import {auth, userBalance} from "../../../redux/actions/userData";
import {useEffect} from "react";
import LangSwitcher from "../../LangSwitcher/LangSwitcher";
import {useRouter} from "next/router";
import {getActiveBonuses} from "../../../redux/actions/getBonuses";
import {changeLocalUserSubscriptions} from "../../../redux/actions/userSubscriptionData";


export const Header = ({t}) => {

  const dispatch = useDispatch();
  const router = useRouter();
  const locale = router.locale;


  const userLogin = useSelector((userInfo) => userInfo.authInfo);

  let userLogined = userLogin.isAuthenticated;
  // let userInfo = userLogin;


  useEffect(() => {
    if (userLogined) {
      if (!userLogin.balance) {
        dispatch(userBalance());
      }
      dispatch(getActiveBonuses());

      let userData = {
        id: userLogin.user.user.id,
        transactional_email_opt_in: userLogin.user.user.transactional_email_opt_in,
        transactional_sms_opt_in: userLogin.user.user.transactional_sms_opt_in,
        browser_opt_in: userLogin.user.user.browser_opt_in
      }
      dispatch(changeLocalUserSubscriptions(userData));

    } else {
      dispatch(auth());
    }
  }, [userLogin.isAuthenticated])

  useEffect(() => {
    if (!userLogin.balance) {
      // console.log(userLogin, 'From userBalance effect')
      dispatch(userBalance());
    }
    // console.log(userLogin.balance, 'From userBalance effect if true')
  }, [userLogin.balance])


  function closePopups(e) {
    if(e.target.nodeName.toUpperCase() !== 'button'.toUpperCase()) {
      dispatch(showLogin(false));
      dispatch(showRegister(false));
    } else {
      return
    }
  }


  return (
    <header onClick={(e) => closePopups(e)} className={styles.mainHeader}>
      <img className={styles.logo} src={'/assets/img/mainLayoutImg/logo.png'} alt="logo"/>
      <Navigation t={t}/>
      <LangSwitcher href={router.route} locale={locale}/>
      <UserBlockNavigation t={t} userInfo={userLogin}/>
    </header>
  )
}