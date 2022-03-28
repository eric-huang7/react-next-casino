import styles from '../../../styles/LogIn.module.scss';

import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {showRegister} from "../../../redux/actions/registerShow";
import {showLogin} from "../../../redux/actions/loginShow";
import {userData} from "../../../redux/actions/userData";
import {schemaLogin} from '../../../schemasForms/loginForm'
import {dateFormatter} from "../../../helpers/dateTranslator";
import {useRouter} from "next/router";
import {auth_type_id, is_admin, siteID} from "../../../envs/envsForFetching";
import {showForgotPasswordPopup} from "../../../redux/actions/showPopups";
import {TopHeading} from "./LoginComponents/TopHeading";
import {useTranslation} from "next-i18next";
import {LowHeading} from "./LoginComponents/LowHeading";
import {LoginInput} from "./LoginComponents/LoginInput";
import {PasswordInput} from "./LoginComponents/PasswordInput";
import {ForgotPasswordButton} from "./LoginComponents/ForgotPasswordButton";
import {RegisterButton} from "./LoginComponents/RegisterButton";
import {SubmitButton} from "./LoginComponents/SubmitButton";
import {ErrorMessage} from "./LoginComponents/ErrorMessage";



export const LogIn = ({isShow}) => {
  const {t} = useTranslation('common');

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
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    if (userInfo.error) {
      errorHelper(userInfo, router, setPasswordData, setErrorMessage, t);
    }
    if (userInfo.isAuthenticated) {
      dispatch(showLogin(false));
    }
  }, [userInfo.isAuthenticated, userInfo.error])

  useEffect(() => {
    setLoginData('');
    setPasswordData('');
    setErrorMessage('');

  },[isShowLogin])


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
  }

  return (
    <div className={`${styles.loginWrapper} ${isShow ? "" : styles.hideLogIn}`}>
      <div onClick={() => loginCloseButtonHandler()} className={styles.forClosePopup}></div>
      <div onClick={(e) => closePopupHandler(e)} className={styles.logInMainBlock}>
        <TopHeading />
        <div className={styles.logInInnerBlock}>
          <LowHeading loginCloseButtonHandler={loginCloseButtonHandler} />
          <div className={styles.logInInnerBlockForms}>
            <form
              id={'login_form'}
              onSubmit={handleSubmit(onSubmitHandler)}
            >
              <LoginInput
                  errors={errors}
                  loginData={loginData}
                  setLoginData={setLoginData}
                  register={register}
              />
              <PasswordInput
                  errors={errors}
                  passwordData={passwordData}
                  setPasswordData={setPasswordData}
                  passwordInputType={passwordInputType}
                  showPass={showPass}
                  register={register}
              />
              <ErrorMessage errorMessage={errorMessage} />
            </form>
            <ForgotPasswordButton forgotPasswordClickHandler={forgotPasswordClickHandler} />
            <RegisterButton openRegister={openRegister} />
          </div>
        </div>
        <SubmitButton />
      </div>
    </div>
  )
}


const errorHelper = (userInfo, router, setPasswordData, setErrorMessage, t) => {

  if (userInfo.error.data.error_code === "ACCOUNT_SELF_EXCLUDED") {

    let timeAll = userInfo.error.data.extra_error_info.message.split(":")[1].trim();
    let timeExclude = dateFormatter(timeAll, router.locale);

    setPasswordData('');
    setErrorMessage(`${t('errors.selfExcluded')} ${timeExclude}`)
  } else if (userInfo.error.data.error_code === "ACCOUNT_LOCKED") {

    setPasswordData('');
    setErrorMessage(t('errors.accountLocked'));
  } else {

    setPasswordData('');
    setErrorMessage(t('errors.wrongPasswordOrEmail'));
  }

}
