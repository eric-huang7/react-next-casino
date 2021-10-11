import styles from '../../../styles/RegisterSignup.module.scss'

import {useEffect, useRef, useState} from "react";
import Link from "next/link";
import {loadGetInitialProps} from "next/dist/shared/lib/utils";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {Header} from "../Header/Header";
import {showRegister} from "../../../redux/actions/registerShow";
import {showLogin} from "../../../redux/actions/loginShow";
import {schemaRegister} from "../../../schemasForms/registerForm";

export const RegisterSignup = ({t, isShow}) => {
  const {register, handleSubmit, formState: {errors}, reset} = useForm({
    resolver: yupResolver(schemaRegister),
  });

  const dispatch = useDispatch();
  const isShowRegister = useSelector((isShowRegister) => isShowRegister.showRegister.isShow)

  function registerCloseButtonHandler() {
    if (isShowRegister) {
      dispatch(showRegister(false))
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

  let currensyVariants = [
    {id: 1, currensy: "BRL", active: false},
    {id: 2, currensy: "RUB", active: false},
    {id: 3, currensy: "USD", active: true},
    {id: 4, currensy: "BTC", active: false},
    {id: 5, currensy: "ETH", active: false},
    {id: 6, currensy: "LTC", active: false},
    {id: 7, currensy: "BCH", active: false}
  ]
  const [activeBonus, setActiveBonus] = useState(false);
  const [isPassShow, setIsPassShow] = useState(false);
  const [passwordInputType, setPasswordInputType] = useState('password');

  const [isShowCurrency, setIsShowCurrency] = useState(false);
  const [activeCurrency, setActiveCurrency] = useState('USD');

  let currencyRef = useRef('')

  const setCurrency = (e) => {
    setActiveCurrency(e.target.innerText);
    setIsShowCurrency(false);
  }

  function showCurrencyBlock() {
    if (isShowCurrency) {
      setIsShowCurrency(false);
    } else {
      setIsShowCurrency(true);
    }
  }

  useEffect(() => {
    console.log(currencyRef.current.value);
  }, [activeCurrency])

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
      setActiveBonus(false)
    } else {
      setActiveBonus(true);
    }
  }
  const onSubmitHandler = (data) => {
   // registerUser()
    console.log(data, 'dataRegister');
    reset();
  }

  return (
    <div className={`${styles.registerSignupWrapper} ${isShow ? '' : styles.hideRegister}`}>
      <Header t={t}/>
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
                  {...register("email")}
                  id={'emailIn'}
                  type="text"
                />
              <span className={styles.errorMessage}>{t(errors.email?.message)}</span>

              <label htmlFor={'usernameIn'}>
                {t('registrationForm.usernameInput')}
              </label>
                <input
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
                  ref={currencyRef}
                  className={styles.currencyInput}
                  onChange={(e) => console.log(e.target.value)}
                  onClick={() => showCurrencyBlock()}
                  value={activeCurrency || "USD"} id={'currencyIn'}
                  type="text"/>
                <div className={`${styles.currencyVariants} ${isShowCurrency ? styles.activeCurrency : ''}`}>
                  {
                    currensyVariants.map((el) => {
                      return (
                        <div
                          key={el.id}
                          onClick={(e) => setCurrency(e)}
                          className={styles.currencyItem}
                        >
                          <p>{el.currensy}</p>
                        </div>
                      )
                    })
                  }
                </div>

                <div className={`${styles.iHaveBonus} ${activeBonus ? styles.showBonusInput : ''}`}>
                  <p onClick={() => showBonusInput()}>{t('registrationForm.iHaveBonusHeading')}</p>
                  <input className={styles.bonusInput} id={'bonusIn'} type="text" placeholder={t('registrationForm.bonusCodeInput')}/>
                </div>

                <div className={styles.agreeTermsWrapper}>
                  <input className={styles.agreeTermsCheckbox} id={"agreeTerms"} type="checkbox"/>
                  <label htmlFor={"agreeTerms"} className={styles.iReadAndAgreeLabel}>
                    {t('registrationForm.iReadAndAgree')}
                  </label>
                  <Link href={'/termsAndConditions'}><a onClick={() => registerCloseButtonHandler()}>{t('registrationForm.termsOfUseLink')}</a></Link>
                </div>
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