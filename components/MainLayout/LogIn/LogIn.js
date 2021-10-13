import styles from '../../../styles/LogIn.module.scss';

import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {Header} from "../Header/Header";
import {showRegister} from "../../../redux/actions/registerShow";
import {showLogin} from "../../../redux/actions/loginShow";
import {login} from "../../../redux/actions/login";
import {schemaLogin} from '../../../schemasForms/loginForm'



export const LogIn = ({t, isShow}) => {
  const {register, handleSubmit, formState: {errors}, reset} = useForm({
    resolver: yupResolver(schemaLogin),
  });


  const dispatch = useDispatch();
  const isShowLogin = useSelector((isShowLogin) => isShowLogin.showLogin.isShow);

  function loginCloseButtonHandler() {
    if (isShowLogin) {
      dispatch(showLogin(false))
    } else {
      dispatch(showLogin(true));
    }
  }
  function closePopupHandler(e) {
    if (e.target.className.split('_')[1] === 'logInMainBlock') {
      dispatch(showLogin(false));
    } else {
      return
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

  const userInfo = useSelector((userInfo) => userInfo.authInfo);
  const [loginData, setLoginData] = useState('');
  const [passwordData, setPasswordData] = useState('');

  // console.log(userInfo, 'USer INFO');


  let wrongPassOrLog = false;
  if (userInfo.error) {
    wrongPassOrLog = true;
  }
  useEffect(() => {
    if (userInfo.isAuthenticated) {
      dispatch(showLogin(false));
    }
  }, [userInfo.isAuthenticated, userInfo.error])



  let site_id = 1;
  let auth_type_id = 1;
  let isAdmin = false;


  function loginUser() {
    // console.log('send req')
    dispatch(login(site_id, auth_type_id, loginData, passwordData, isAdmin));

  }
  const onSubmitHandler = (data) => {

    loginUser()
    reset();
  }

  return (
    <div className={`${styles.loginWrapper} ${isShow ? "" : styles.hideLogIn}`}>
      <Header t={t}/>
      <div onClick={() => loginCloseButtonHandler()} className={styles.forClosePopup}></div>
      <div onClick={(e) => closePopupHandler(e)} className={styles.logInMainBlock}>
        <div className={styles.logInHeading}>
          <h2>{t('loginForm.mainHeading')}</h2>
        </div>
        <div className={styles.logInInnerBlock}>
          <div className={styles.logInInnerBlockHead}>
            <h3>{t('loginForm.innerHeading')}</h3>
            <div onClick={() => loginCloseButtonHandler()} className={styles.logInInnerCloseButton}>
              <span className={styles.closeOne}></span>
              <span className={styles.closeTwo}></span>
            </div>
          </div>
          <div className={styles.logInInnerBlockForms}>
            <form
              id={'login_form'}
              onSubmit={handleSubmit(onSubmitHandler)}
            >
              <label htmlFor={'usernameLogIn'}>
                {t('loginForm.usernameInput')}
              </label>
              <input {...register("username")}
                onChange={(e) => setLoginData(e.target.value)}
                id={'usernameLogIn'}
                type="text"/>
              <span className={styles.errorMessage}>{t(errors.username?.message)}</span>
              <label htmlFor={'passwordLogIn'}>
                {t('loginForm.passwordInput')}
              </label>
              <label className={styles.passwordEye}   htmlFor={'passwordLogIn'}>
                <img onClick={() => showPass()} src={'/assets/img/registerSignup/eye.svg'} alt="show pass icon"/>
                <input {...register("password")}
                       onChange={(e) => setPasswordData(e.target.value)}
                       id={'passwordLogIn'}
                       type={passwordInputType}
                />
              </label>
              <span className={styles.errorMessage}>{t(errors.password?.message)}</span>
              <span className={styles.errorMessage}>{
                wrongPassOrLog ? t('errors.wrongPasswordOrEmail') : ''
              }</span>


            </form>
            <div className={styles.notAlreadyRegistered}>
              <p className={styles.alredyText}>{t('loginForm.alreadyRegistered')}</p>
              <p onClick={() => openRegister()} className={styles.logInText}>{t('loginForm.registerLink')}</p>
            </div>
          </div>
        </div>
        <div className={styles.submitButtonWrapper}>
          <button
            // onClick={() => loginUser()}
            type={"submit"}
            form={'login_form'}
            className={styles.submitButton}
          >
            {t('loginForm.signUpButton')}
          </button>
        </div>

      </div>
    </div>
  )
}

