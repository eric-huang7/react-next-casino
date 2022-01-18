import styles from '../../../styles/RegisterSignup.module.scss'

import {useEffect, useState} from "react";
import Link from "next/link";

import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";


import {hideRegister, showRegister} from "../../../redux/actions/registerShow";
import {showLogin} from "../../../redux/actions/loginShow";
import {schemaRegister} from "../../../schemasForms/registerForm";
import {signUp} from "../../../redux/actions/userData";
import {auth_type_id, siteID} from "../../../envs/envsForFetching";
import {backButtonShouldDo, showCurrencySwitcher} from "../../../redux/actions/showPopups";
import {setUserRegisterBonusCode} from "../../../redux/actions/setUserBonus";


export const RegisterSignup = ({t, isShow}) => {
  const {register, handleSubmit, formState: {errors}, reset} = useForm({
    resolver: yupResolver(schemaRegister),
  });

  const dispatch = useDispatch();
  const isShowRegister = useSelector((isShowRegister) => isShowRegister.showRegister)
  const userData = useSelector((userData) => userData.authInfo);
  const userCurrency = useSelector((store) => store.userSelectedCurrency.userCurrencyData);
  const userRegisterBonusCode = useSelector((store) => store.userBonus.bonus_code);



  const [activeBonus, setActiveBonus] = useState(false);
  const [isPassShow, setIsPassShow] = useState(false);
  const [passwordInputType, setPasswordInputType] = useState('password');

  // const [isShowCurrency, setIsShowCurrency] = useState(false);

  // const [activeCurrency, setActiveCurrency] = useState(userCurrency.abbreviation); // default need change

  const [usernameData, setUsernameData] = useState('');
  const [passwordData, setPasswordData] = useState('');
  const [userEmailData, setUserEmailData] = useState('');
  const [bonusCodeData, setBonusCodedata] = useState('');
  // const [currencyChoose, setCurrencyChoose] = useState(userCurrency.id); // default need change
  const [youAgree, setYouAgree] = useState(false);
  const [youAgreeError, setYouAgreeError] = useState('');
  const [registerError, setRegisterError] =useState('');


  if (userData.isAuthenticated) {
    dispatch(showRegister(false));

    setBonusCodedata('');
    dispatch(setUserRegisterBonusCode(null));
  }

  function registerCloseButtonHandler() {
    if (isShowRegister.isShow) {
      dispatch(showRegister(false));
    } else {
      dispatch(showRegister(true))
    }
  }

  function closePopupHandler(e) {
    if (e.target.className.split('_')[1] === 'registerMainBlock') {
      dispatch(showRegister(false));
    } else {
      return
    }
  }

  function openLogin() {
    dispatch(showLogin(true));
    dispatch(showRegister(false));
  }

  const youAgreeHandler = (e) => {
    setYouAgree(e.target.checked);
  }

  // let currencyRef = useRef('')

  // const setCurrency = (e) => {
  //   // console.log(e.target.dataset.currency, '!!!!!!');
  //   setCurrencyChoose(Number(e.target.dataset.currency));
  //   setActiveCurrency(e.target.innerText);
  //   setIsShowCurrency(false);
  // }

  const hideCurrencyShowRegisterModal = () => {
    dispatch(showCurrencySwitcher(false));
    dispatch(hideRegister(false));
  }

  function showCurrencyBlock() {
    dispatch(showCurrencySwitcher(true));
    dispatch(hideRegister(true));
    dispatch(backButtonShouldDo(hideCurrencyShowRegisterModal));

    // if (isShowCurrency) {
    //   setIsShowCurrency(false);
    // } else {
    //   setIsShowCurrency(true);
    // }
  }

  // useEffect(() => {
  //   // console.log(currencyRef.current.value);
  // }, [activeCurrency])

  function showPass(){
    if (isPassShow) {
      setIsPassShow(false);
      setPasswordInputType("password");
    } else {
      setIsPassShow(true);
      setPasswordInputType('text');
    }
  }

  function showBonusInput() {
    if (activeBonus) {
      setActiveBonus(false);
    } else {
      setActiveBonus(true);
    }
  }

  // let site_id = 1;
  // let auth_type_id = 1;
  // let isAdmin = false;
  // let userId = 100000;
//currency, user_id, site_id, auth_type_id, username, email, password
  function registerUser(userNameInfo, userPasswordInfo, userEmailInfo) {
    let body = {
      base_currency_id: userCurrency.id,
      site_id : siteID,
      auth_type_id: auth_type_id,
      username: userNameInfo,
      email: userEmailInfo,
      password: userPasswordInfo,
      current_bonus_code: bonusCodeData,
    }

    dispatch(signUp(body)).then((data) => {
      setBonusCodedata('');
      dispatch(setUserRegisterBonusCode(null));
    });
  }

  const onSubmitHandler = (data) => {
    // console.log(data, 'formDATA');
    if (youAgree) {
      registerUser(data.username, data.password, data.email);
      reset();
    } else {
      setYouAgreeError('Read terms!');
    }
  }

  const userInfo = useSelector((userInfo) => userInfo.authInfo);

  useEffect(() => {
    reset();
    setYouAgreeError('');
    setRegisterError('');
    setActiveBonus(false);
    if (isShowRegister.isShow) {
      setBonusCodedata(userRegisterBonusCode ? userRegisterBonusCode : '');
    } else {
      setBonusCodedata('');
      dispatch(setUserRegisterBonusCode(null));
    }
  },[isShowRegister.isShow]);

  useEffect(() => {
    if (userInfo.registerError) {
      setRegisterError(userInfo.registerError.data.extra_error_info.message);
    }
  },[userInfo.registerError])

  useEffect(() => {
    setBonusCodedata(userRegisterBonusCode ? userRegisterBonusCode : '');
  }, [userRegisterBonusCode])


  return (
    <div className={`${styles.registerSignupWrapper} ${isShow ? '' : styles.hideRegister} ${isShowRegister.hideForCurrency ? styles.hideRegisterForCurrency : ""}`}>
      {/*<Header t={t}/>*/}
      <div onClick={() => registerCloseButtonHandler()} className={styles.forClosePopup}></div>
      <div onClick={(e) => closePopupHandler(e)} className={styles.registerMainBlock}>
        <div className={styles.registerHeading}>
          <h2>{t('registrationForm.mainHeading')}</h2>
        </div>
        <div className={styles.registerInnerBlock}>
          <div className={styles.registerInnerBlockHead}>
            <h3>{t('registrationForm.innerHeading')}</h3>
            <div onClick={() => registerCloseButtonHandler()} className={styles.registerInnerCloseButton}>
              <span className={styles.closeOne}></span>
              <span className={styles.closeTwo}></span>
            </div>
          </div>
          <div className={styles.registerInnerBlockForms}>
            <form
              id={'register_form'}
              onSubmit={handleSubmit(onSubmitHandler)}
            >
              <label htmlFor={'emailIn'}>{t('registrationForm.emailInput')}</label>
                <input
                  onChange={(e) => setUserEmailData(e.target.value)}
                  {...register("email")}
                  id={'emailIn'}
                  type="text"
                />
              <span className={styles.errorMessage}>{t(errors.email?.message)}</span>

              <label htmlFor={'usernameIn'}>
                {t('registrationForm.usernameInput')}
              </label>
                <input
                  onChange={(e) => setUsernameData(e.target.value)}
                  {...register("username")}
                  id={'usernameIn'}
                  type="text"
                />
              <span className={styles.errorMessage}>{t(errors.username?.message)}</span>

              <label htmlFor={'passwordIn'}>
                {t('registrationForm.passwordInput')}
              </label>
              <label className={styles.passwordEye}   htmlFor={'passwordIn'}>
                <img onClick={() => showPass()} src={'/assets/img/registerSignup/eye.svg'} alt="show pass icon"/>
                <input
                  onChange={(e) => setPasswordData(e.target.value)}
                  id={'passwordIn'}
                  type={passwordInputType}
                  {...register("password")}
                />
              </label>
              <span className={styles.errorMessage}>{t(errors.password?.message)}</span>


              <label htmlFor={'currencyIn'}>
                {t('registrationForm.currencyInput')}
              </label>
                <input
                  readOnly={true}
                  // ref={currencyRef}
                  className={styles.currencyInput}
                  onClick={() => showCurrencyBlock()}
                  value={userCurrency.abbreviation}
                  id={'currencyIn'}
                  type="text"/>

                <div className={`${styles.iHaveBonus} ${activeBonus || !!bonusCodeData ? styles.showBonusInput : ''}`}>
                  <p onClick={() => showBonusInput()}>{t('registrationForm.iHaveBonusHeading')}</p>
                  {bonusCodeData ? <label className={styles.labelForBonusInput} htmlFor="bonusIn">{t('registrationForm.bonusCodeInput')}</label> : <></>}
                  <input
                    onChange={(e) => setBonusCodedata(e.target.value)}
                    value={bonusCodeData}
                    className={styles.bonusInput}
                    id={'bonusIn'}
                    type="text"
                    placeholder={t('registrationForm.bonusCodeInput')}/>
                </div>

                <div className={styles.agreeTermsWrapper}>
                  <input onChange={(e) => youAgreeHandler(e)} className={styles.agreeTermsCheckbox} id={"agreeTerms"} type="checkbox"/>
                  <label htmlFor={"agreeTerms"} className={styles.iReadAndAgreeLabel}>
                    {t('registrationForm.iReadAndAgree')}
                  </label>
                  <Link href={'/termsAndConditions'}><a onClick={() => registerCloseButtonHandler()}>{t('registrationForm.termsOfUseLink')}</a></Link>
                </div>
              <span className={styles.errorMessageYouAgree}>{youAgreeError}</span>
              <span className={styles.errorMessageRegister}>{registerError}</span>
            </form>
            <div className={styles.alredyRegistered}>
              <p className={styles.alredyText}>{t('registrationForm.alreadyRegistered')}</p>
              <p onClick={() => openLogin()} className={styles.LogInText}>{t('registrationForm.logInLink')}</p>
            </div>
          </div>
        </div>
        <div className={styles.submitButtonWrapper}>
          <button
            type={"submit"}
            form={'register_form'}
            className={styles.submitButton}>
            {t('registrationForm.signUpButton')}
          </button>
        </div>
      </div>
    </div>
  )
}