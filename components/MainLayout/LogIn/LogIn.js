import styles from '../../../styles/LogIn.module.scss';

import {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {Header} from "../Header/Header";
import {showRegister} from "../../../redux/actions/registerShow";
import {showLogin} from "../../../redux/actions/loginShow";
import {userData} from "../../../redux/actions/userData";
import {schemaLogin} from '../../../schemasForms/loginForm'
import {dateFormatter} from "../../../helpers/dateTranslator";
import {useRouter} from "next/router";
import {auth_type_id, is_admin, siteID} from "../../../envs/envsForFetching";
import {showForgotPasswordPopup} from "../../../redux/actions/showPopups";



export const LogIn = ({t, isShow}) => {
  const {register, handleSubmit, formState: {errors}, reset} = useForm({
    resolver: yupResolver(schemaLogin),
  });
  const router = useRouter();


  const dispatch = useDispatch();
  const isShowLogin = useSelector((isShowLogin) => isShowLogin.showLogin.isShow);

  const forgotPasswordClickHandler = () => {
    dispatch(showForgotPasswordPopup(true));
    dispatch(showLogin(false));
  }

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
  const [wrongPassOrLog, setWrongPassOrLog] = useState(false);
  const [selfExcludedError, setSelfExcludedError] = useState(false);
  const [selfExcludedTime, setSelfExcludedTime] = useState("")

  useEffect(() => {
    if (userInfo.error) {

      if (userInfo.error.data.error_code === "ACCOUNT_SELF_EXCLUDED") {
        let timeAll = userInfo.error.data.extra_error_info.message.split(":")[1].trim();
        let timeExclude = dateFormatter(timeAll, router.locale);
        setSelfExcludedTime(timeExclude);

        setPasswordData('');
        setSelfExcludedError(true);
      } else {
        setPasswordData('');
        setWrongPassOrLog(true);
      }
    }
    if (userInfo.isAuthenticated) {
      dispatch(showLogin(false));
    }
  }, [userInfo.isAuthenticated, userInfo.error])

  useEffect(() => {
    setLoginData('');
    setPasswordData('');
    // reset();
    setSelfExcludedTime("");
    setSelfExcludedError(false);
    setWrongPassOrLog(false);

    if (isShowLogin) {
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "auto"
    }

  },[isShowLogin])


  // let site_id = siteID;
  // let auth_type_id = auth_type_id;
  // let isAdmin = false;


  function loginUser() {

    let sendData = {
      site_id : siteID,
      auth_type_id: auth_type_id,
      username: loginData,
      auth_info: passwordData,
      is_admin : is_admin,
    }

    dispatch(userData(sendData));

  }

  const onSubmitHandler = (data) => {
    loginUser();
    // reset();
  }

  return (
    <div className={`${styles.loginWrapper} ${isShow ? "" : styles.hideLogIn}`}>
      {/*<Header t={t}/>*/}
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
                onInput={(e) => setLoginData(e.target.value)}
                value={loginData}
                id={'usernameLogIn'}
                type="text"/>
              <span className={styles.errorMessage}>{t(errors.username?.message)}</span>
              <label htmlFor={'passwordLogIn'}>
                {t('loginForm.passwordInput')}
              </label>
              <label className={styles.passwordEye}   htmlFor={'passwordLogIn'}>
                <img onClick={() => showPass()} src={'/assets/img/registerSignup/eye.svg'} alt="show pass icon"/>
                <input {...register("password")}
                       onInput={(e) => setPasswordData(e.target.value)}
                       value={passwordData}
                       id={'passwordLogIn'}
                       type={passwordInputType}
                />
              </label>
              <span className={styles.errorMessage}>{t(errors.password?.message)}</span>
              <span className={styles.errorMessage}>{
                wrongPassOrLog ? t('errors.wrongPasswordOrEmail') : selfExcludedError ? `${t('errors.selfExcluded')} ${selfExcludedTime}` : ''
              }</span>


            </form>
            <div className={styles.forgotPassword}>
              <button onClick={() => forgotPasswordClickHandler()}>{t('loginForm.forgotPassword')}</button>
            </div>
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

