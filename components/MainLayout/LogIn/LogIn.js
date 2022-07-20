import styles from '../../../styles/LogIn.module.scss';

import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {showRegister} from "../../../redux/ui/action";
import {showLogin} from "../../../redux/ui/action";
import {userData} from "../../../redux/user/action";
import {schemaLogin} from '../../../schemasForms/loginForm'
import {dateFormatter} from "../../../helpers/dateTranslator";
import {useRouter} from "next/router";
import {auth_type_id, is_admin, siteID} from "../../../envs/envsForFetching";
import {showForgotPasswordPopup} from "../../../redux/popups/action";
import {useTranslation} from "next-i18next";
import {LoginInput} from "./LoginComponents/LoginInput";
import {PasswordInput} from "./LoginComponents/PasswordInput";
import {ForgotPasswordButton} from "./LoginComponents/ForgotPasswordButton";
import {RegisterButton} from "./LoginComponents/RegisterButton";
import {SubmitButton} from "../../buttons/SubmitButton";
import {ErrorMessage} from "./LoginComponents/ErrorMessage";
import {Box, Text} from "@chakra-ui/layout";
import SelectModal from "../../modal/SelectModal";

export const LogIn = ({isShow}) => {
  const {t} = useTranslation('common');

  const {register, handleSubmit, formState: {errors}, reset} = useForm({
    resolver: yupResolver(schemaLogin),
  });
  const router = useRouter();


  const dispatch = useDispatch();
  const isShowLogin = useSelector((isShowLogin) => isShowLogin.ui.isShowLogin);

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

  const getHeader = () => <Box
    position="absolute"
    top={{base: "-120px", lg: "-80px"}}
    left="calc((430px - 100vw) / 2)"
    width="100vw"
  >
    <Text
      fontFamily="Lithograph"
      // Gobold
      color="primary.500"
      fontSize="33px"
      fontWeight={700}
      letterSpacing="1px"
      textTransform="uppercase"
      textAlign="center"
      className={`${router.locale === 'ru' ? styles.ru : ''}`}
    >
      {t('loginForm.mainHeading')}
    </Text>
  </Box>

  return (
    <SelectModal
      isOpen={isShow}
      width={430}
      headerHeight={70}
      onClose={loginCloseButtonHandler}
      title={t('loginForm.innerHeading')}
      footer={<SubmitButton title={t('loginForm.signUpButton')} form="login_form" />}
      before={getHeader()}
    >
      <Box pb={4}>
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
      </Box>
    </SelectModal>
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
