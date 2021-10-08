import styles from '../../../styles/LogIn.module.scss';
import {Header} from "../Header/Header";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {showRegister} from "../../../redux/actions/registerShow";
import {showLogin} from "../../../redux/actions/loginShow";


export const LogIn = ({t, isShow}) => {
  const dispatch = useDispatch();
  const isShowLogin = useSelector((isShowLogin) => isShowLogin.showLogin.isShow);

  function loginCloseButtonHandler() {
    if (isShowLogin) {
      dispatch(showLogin(false))
    } else {
      dispatch(showLogin(true));
    }
  }
  function openRegister() {
    dispatch(showRegister(true));
    dispatch(showLogin(false));
  }

  const [isPassShow, setIsPassShow] = useState(false);
  const [passwordInputType, setPasswordInputType] = useState('password');

  function showPass(){
    if (isPassShow) {
      setIsPassShow(false);
      setPasswordInputType("password");
    } else {
      setIsPassShow(true);
      setPasswordInputType('text');
    }
  }


  return (
    <div className={`${styles.loginWrapper} ${isShow ? "" : styles.hideLogIn}`}>
      <Header t={t}/>
      <div onClick={() => loginCloseButtonHandler()} className={styles.forClosePopup}></div>
      <div className={styles.logInMainBlock}>
        <div className={styles.logInHeading}>
          <h2>Deposit $ 100 and get $ 200</h2>
        </div>
        <div className={styles.logInInnerBlock}>
          <div className={styles.logInInnerBlockHead}>
            <h3>Welcome To SlotsIdol</h3>
            <div onClick={() => loginCloseButtonHandler()} className={styles.logInInnerCloseButton}>
              <span className={styles.closeOne}></span>
              <span className={styles.closeTwo}></span>
            </div>
          </div>
          <div className={styles.logInInnerBlockForms}>
            <form >
              <label htmlFor={'usernameLogIn'}>
                {'Username'}
              </label>
              <input id={'usernameLogIn'} type="text"/>

              <label htmlFor={'passwordLogIn'}>
                {'Password'}
              </label>
              <label className={styles.passwordEye}   htmlFor={'passwordLogIn'}>
                <img onClick={() => showPass()} src={'/assets/img/registerSignup/eye.svg'} alt="show pass icon"/>
                <input id={'passwordLogIn'} type={passwordInputType}/>
              </label>

            </form>
            <div className={styles.notAlreadyRegistered}>
              <p className={styles.alredyText}>Not registered yet?</p>
              <p onClick={() => openRegister()} className={styles.logInText}>Register</p>
            </div>
          </div>
        </div>
        <div className={styles.submitButtonWrapper}>
          <button className={styles.submitButton}>
            {'LOG IN'}
          </button>
        </div>

      </div>
    </div>
  )
}

