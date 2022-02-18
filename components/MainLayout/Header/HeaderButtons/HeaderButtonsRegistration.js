import styles from '../../../../styles/Header/HeaderButtons.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {showRegister} from "../../../../redux/actions/registerShow";
import {showLogin} from "../../../../redux/actions/loginShow";


export const HeaderButtonsRegistration = ({t, isUserLogined}) => {


  const dispatch = useDispatch();
  const isShowRegister = useSelector((isShowRegister) => isShowRegister.showRegister.isShow);
  const isShowLogin = useSelector((isShowLogin) => isShowLogin.showLogin.isShow);

  function registerButtonHandler() {
    if (isShowRegister) {
      dispatch(showRegister(false))
    } else {
      dispatch(showRegister(true));
      dispatch(showLogin(false));
    }
  }
  function loginButtonHandler() {
    if (isShowLogin) {
      dispatch(showLogin(false));

    } else {
      dispatch(showLogin(true));
      dispatch(showRegister(false));
    }
  }

  return (
    <div className={`${styles.userMainBlockButtons} ${styles.registrationButtons} ${isUserLogined ? styles.hide : ''}`}>
      <button onClick={() => loginButtonHandler()}>{t('header.navbarButtons.login')}</button>
      <button onClick={() => registerButtonHandler()}>{t('header.navbarButtons.signIn')}</button>
    </div>
  )
}