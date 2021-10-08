
import styles from '../../../styles/Header/Header.module.scss'
import {Navigation} from "./Navigation/Navigation";
import {UserBlockNavigation} from "./UserBlock/UserBlock";
import {useDispatch} from "react-redux";
import {showLogin} from "../../../redux/actions/loginShow";
import {showRegister} from "../../../redux/actions/registerShow";


export const Header = ({t}) => {
  const dispatch = useDispatch();
  function closePopups(e) {
    console.log(e);
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
      <UserBlockNavigation t={t}/>
    </header>
  )
}