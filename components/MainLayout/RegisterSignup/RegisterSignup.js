import styles from '../../../styles/RegisterSignup.module.scss'

import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {hideRegister, showRegister} from "../../../redux/ui/action";
import {showLogin} from "../../../redux/ui/action";
import {schemaRegister} from "../../../schemasForms/registerForm";
import {signUp} from "../../../redux/user/action";
import {auth_type_id, siteID} from "../../../envs/envsForFetching";
import {backButtonShouldDo, showCurrencySwitcher} from "../../../redux/popups/action";
import {setUserRegisterBonusCode} from "../../../redux/userBonus/action";
import {TopHeading} from "./SignupContainerComponents/TopHeading";
import {LowHeading} from "./SignupContainerComponents/LowHeading";
import {EmailInput} from "./SignupContainerComponents/EmailInput";
import {UserNameInput} from "./SignupContainerComponents/UserNameInput";
import {PasswordContainer} from "./SignupContainerComponents/PasswordContainer";
import {CurrencyInput} from "./SignupContainerComponents/CurrencyInput";
import {BonusCodeInput} from "./SignupContainerComponents/BonusCodeInput";
import {TermsCheckContainer} from "./SignupContainerComponents/TermsCheckContainer";
import {LoginButton} from "./SignupContainerComponents/LoginButton";
import {SubmitButton} from "./SignupContainerComponents/SubmitButton";


export const RegisterSignup = ({t, isShow}) => {
  const {register, handleSubmit, formState: {errors}, reset} = useForm({
    resolver: yupResolver(schemaRegister),
  });

  const dispatch = useDispatch();
  const ui = useSelector((state) => state.ui)
  const userData = useSelector((userData) => userData.authInfo);
  const userCurrency = useSelector((store) => store.userFinance.userCurrencyData);
  const userRegisterBonusCode = useSelector((store) => store.userBonus.bonus_code);


  const [activeBonus, setActiveBonus] = useState(false);
  const [isPassShow, setIsPassShow] = useState(false);
  const [passwordInputType, setPasswordInputType] = useState('password');
  const [usernameData, setUsernameData] = useState('');
  const [passwordData, setPasswordData] = useState('');
  const [userEmailData, setUserEmailData] = useState('');
  const [bonusCodeData, setBonusCodedata] = useState('');
  const [youAgree, setYouAgree] = useState(false);
  const [youAgreeError, setYouAgreeError] = useState('');
  const [registerError, setRegisterError] = useState('');


  if (userData.isAuthenticated) {
    dispatch(showRegister(false));

    setBonusCodedata('');
    dispatch(setUserRegisterBonusCode(null));
  }

  function registerCloseButtonHandler() {
    if (ui.isShowRegister) {
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



  const hideCurrencyShowRegisterModal = () => {
    dispatch(showCurrencySwitcher(false));
    dispatch(hideRegister(false));
  }

  function showCurrencyBlock() {
    dispatch(showCurrencySwitcher(true));
    dispatch(hideRegister(true));
    dispatch(backButtonShouldDo(hideCurrencyShowRegisterModal));

  }

  function showPass() {
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

  function registerUser(userNameInfo, userPasswordInfo, userEmailInfo) {
    let body = {
      base_currency_id: userCurrency.id,
      site_id: siteID,
      auth_type_id: auth_type_id,
      username: userNameInfo,
      email: userEmailInfo,
      password: userPasswordInfo,
      current_bonus_code: bonusCodeData,
    }

    dispatch(signUp(body));
  }

  const onSubmitHandler = (data) => {

    if (youAgree) {
      registerUser(data.username, data.password, data.email);
      // reset();
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
    if (ui.isShowRegister) {
      setBonusCodedata(userRegisterBonusCode ? userRegisterBonusCode : '');
    } else {
      setBonusCodedata('');
      dispatch(setUserRegisterBonusCode(null));
    }
  }, [ui.isShowRegister]);

  useEffect(() => {
    if (userInfo.registerError) {
      setErrorHelper(userInfo, setRegisterError, reset, t, bonusCodeData);
    }
  }, [userInfo.registerError])

  useEffect(() => {
    setBonusCodedata(userRegisterBonusCode ? userRegisterBonusCode : '');
  }, [userRegisterBonusCode])

  return (
    <div
      className={`${styles.registerSignupWrapper} ${isShow ? '' : styles.hideRegister} ${ui.hideForCurrency ? styles.hideRegisterForCurrency : ""}`}>
      <div className={styles.registerMainBlock}>
        <TopHeading />
        <div className={styles.registerInnerBlock}>
          <LowHeading registerCloseButtonHandler={registerCloseButtonHandler}/>
          <div className={styles.registerInnerBlockForms}>
            <form
              id={'register_form'}
              onSubmit={handleSubmit(onSubmitHandler)}
            >
              <EmailInput
                  errors={errors}
                  register={register}
                  setUserEmailData={setUsernameData}
              />

              <UserNameInput
                  register={register}
                  errors={errors}
                  setUsernameData={setUsernameData}
              />

              <PasswordContainer
                  errors={errors}
                  register={register}
                  showPass={showPass}
                  passwordInputType={passwordInputType}
                  setPasswordData={setPasswordData}
              />

              <CurrencyInput
                  showCurrencyBlock={showCurrencyBlock}
                  userCurrency={userCurrency} />

              <BonusCodeInput
                  activeBonus={activeBonus}
                  bonusCodeData={bonusCodeData}
                  setBonusCodedata={setBonusCodedata}
                  showBonusInput={showBonusInput}
              />

              <TermsCheckContainer
                  registerCloseButtonHandler={registerCloseButtonHandler}
                  youAgreeHandler={youAgreeHandler}
              />
              <span className={styles.errorMessageYouAgree}>{youAgreeError}</span>
              <span className={styles.errorMessageRegister}>{registerError}</span>
            </form>
            <LoginButton openLogin={openLogin} />
          </div>
        </div>
        <SubmitButton />
      </div>
    </div>
  )
}

const setErrorHelper = (userInfo, setRegisterError, reset, t, bonusCodeData) => {

  if (userInfo.registerError.data.error_code === "DUPLICATE_USER_NAME") {
    reset();
    setRegisterError(t("registrationForm.errors.duplicateUsername"));
  } else if (userInfo.registerError.data.error_code === "BONUS_INVALID_OFFER_CODE") {
    setRegisterError(t("registrationForm.errors.invalidPromo") + " " + bonusCodeData);
  } else if (userInfo.registerError.data.error_code === "BONUS_REDEMPTION_CURRENCY_SPECIFICATION_NOT_FOUND") {
    setRegisterError(t("registrationForm.errors.invalidPromoCurrency"));
  } else if (userInfo.registerError.data.error_code === "DUPLICATE_EMAIL_ADDRESS") {
    reset();
    setRegisterError(t("registrationForm.errors.duplicateEmail"));
  } else {
    setRegisterError(userInfo.registerError.data.extra_error_info.message);
  }

}
