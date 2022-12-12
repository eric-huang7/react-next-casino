import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {showRegister} from "/redux/ui/action";
import {showLogin} from "/redux/ui/action";
import {userData} from "/redux/user/action";
import {schemaLogin} from '/schemasForms/loginForm'
import {dateFormatter} from "/helpers/dateTranslator";
import {useRouter} from "next/router";
import {auth_type_id, is_admin, siteID} from "/envs/envsForFetching";
import {showForgotPasswordPopup} from "/redux/popups/action";
import {useTranslation} from "next-i18next";
import {VStack, chakra} from "@chakra-ui/react";
import {Box, HStack, Text} from "@chakra-ui/layout";
import SelectModal from "../modal/SelectModal";
import SubmitButton from "../buttons/SubmitButton";
import ModalTopHeader from "../modal/ModalTopHeader";
import InputField from "../form/InputField";
import LinkButton from "/components/buttons/LinkButton";

export const LogIn = ({isShow}) => {
  const {t} = useTranslation('common');
  const router = useRouter();
  const dispatch = useDispatch();
  const {register, handleSubmit, formState: {errors}, reset} = useForm({resolver: yupResolver(schemaLogin)});

  const forgotPasswordClickHandler = () => {
    dispatch(showForgotPasswordPopup(true));
    dispatch(showLogin(false));
  }

  function onClose() {
    dispatch(showLogin(!isShow))
  }

  function openRegister() {
    dispatch(showRegister(true));
    dispatch(showLogin(false));
  }

  const userInfo = useSelector(store => store.authInfo);
  const [loginData, setLoginData] = useState('');
  const [passwordData, setPasswordData] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    if (userInfo?.error) {
      errorHelper(userInfo, router, setPasswordData, setErrorMessage, t);
    }
    if (userInfo?.isAuthenticated) {
      dispatch(showLogin(false));
    }
  }, [userInfo?.isAuthenticated, userInfo?.error])

  useEffect(() => {
    setLoginData('');
    setPasswordData('');
    setErrorMessage('');
  }, [isShow])

  const loginUser = () => {
    const payload = {
      site_id: siteID,
      auth_type_id: auth_type_id,
      username: loginData,
      auth_info: passwordData,
      is_admin: is_admin,
    }

    dispatch(userData(payload));
  }

  const onSubmitHandler = (data) => {
    loginUser();
  }

  const onChangeUsername = (e) => {
    setLoginData(e.target.value);
    setErrorMessage('');
  }

  const onChangePassword = (e) => {
    setPasswordData(e.target.value);
    setErrorMessage('');
  }

  return (
    <SelectModal
      isOpen={true}
      width={430}
      headerHeight={70}
      onClose={onClose}
      title={t('loginForm.innerHeading')}
      footer={<SubmitButton title={t('loginForm.signUpButton')} form="login_form"/>}
      before={<ModalTopHeader title={t('loginForm.mainHeading')} fontSize={33} top={{base: "-100px", lg: "-60px"}}/>}
    >
      <VStack p="20px 34px 10px">
        <chakra.form
          id={'login_form'}
          onSubmit={handleSubmit(onSubmitHandler)}
          fontFamily="Verdana"
          w="100%"
        >
          <InputField
            label={t('loginForm.usernameInput')}
            error={t(errors?.username?.message)}
            onInput={onChangeUsername}
            validation={{...register("username")}}
            value={loginData}
            id={'usernameLogIn'}
          />

          <InputField
            label={t('loginForm.passwordInput')}
            error={t(errors?.password?.message)}
            onInput={onChangePassword}
            validation={{...register("password")}}
            value={passwordData}
            id={'passwordLogIn'}
            type="password"
          />

          <Box fontSize={12} color="red.500">
            {errorMessage ? errorMessage : ''}
          </Box>
        </chakra.form>

        <HStack justifyContent="center">
          <LinkButton onClick={forgotPasswordClickHandler}>{t('loginForm.forgotPassword')}</LinkButton>
        </HStack>

        <HStack>
          <Text color="grey.600" fontFamily="Verdana" fontSize={15}>{t('loginForm.alreadyRegistered')}</Text>
          <LinkButton onClick={openRegister}>{t('loginForm.registerLink')}</LinkButton>
        </HStack>
      </VStack>
    </SelectModal>
  )
}

const errorHelper = (userInfo, router, setPasswordData, setErrorMessage, t) => {
  if (userInfo?.error?.data?.error_code === "ACCOUNT_SELF_EXCLUDED") {

    let timeAll = userInfo?.error?.data?.extra_error_info?.message?.split(":")[1]?.trim();
    let timeExclude = dateFormatter(timeAll, router.locale);

    setPasswordData('');
    setErrorMessage(`${t('errors.selfExcluded')} ${timeExclude}`)
  } else if (userInfo?.error?.data?.error_code === "ACCOUNT_LOCKED") {
    setPasswordData('');
    setErrorMessage(t('errors.accountLocked'));
  } else {
    setPasswordData('');
    setErrorMessage(t('errors.wrongPasswordOrEmail'));
  }
}
