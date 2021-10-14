
import styles from '../../../styles/Header/Header.module.scss'
import {Navigation} from "./Navigation/Navigation";
import {UserBlockNavigation} from "./UserBlock/UserBlock";
import {useDispatch, useSelector} from "react-redux";
import {showLogin} from "../../../redux/actions/loginShow";
import {showRegister} from "../../../redux/actions/registerShow";
import {auth, userBalance} from "../../../redux/actions/login";
import {useEffect} from "react";


export const Header = ({t}) => {
  const dispatch = useDispatch();

  const userLogin = useSelector((userInfo) => userInfo.authInfo);
  let userLogined = userLogin.isAuthenticated;
  let userInfo = userLogin;




  useEffect(() => {
    if (userLogined) {
      dispatch(userBalance());
      console.log(userLogin, 'From userlogined effect')
    } else {
      dispatch(auth());
    }
  }, [userLogined])

  useEffect(() => {
    if (!userLogin.balance) {
      console.log(userLogin, 'From userBalance effect')
      dispatch(userBalance());
      // const newUserLogin = useSelector((userInfo) => userInfo.authInfo);
      // userInfo = userLogin;
    }
    console.log(userLogin.balance, 'From userBalance effect if true')
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
      <UserBlockNavigation t={t} userInfo={userInfo}/>
    </header>
  )
}