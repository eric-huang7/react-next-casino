import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {useDisclosure} from "@chakra-ui/hooks";
import Link from "next/link";
import {useTranslation} from "next-i18next";
import {Box, HStack} from "@chakra-ui/layout";
import {Checkbox} from "@chakra-ui/checkbox";
import {yupResolver} from "@hookform/resolvers/yup";
import {hideRegister, showRegister} from "../../redux/ui/action";
import {showLogin} from "../../redux/ui/action";
import {schemaRegister} from "../../schemasForms/registerForm";
import {signUp} from "../../redux/user/action";
import {auth_type_id, siteID} from "../../envs/envsForFetching";
import {backButtonShouldDo} from "../../redux/popups/action";
import {setUserRegisterBonusCode} from "../../redux/userBonus/action";
import {SelectCurrencyModal} from "../currency/SelectCurrencyModal";
import {setUserCurrencySwitcher} from "../../redux/userFinance/action";
import SelectModal from "../modal/SelectModal";
import SubmitButton from "../buttons/SubmitButton";
import ModalTopHeader from "../modal/ModalTopHeader";
import InputField from "../form/InputField";
import {chakra, Text, VStack} from "@chakra-ui/react";
import LinkButton from "../buttons/LinkButton";
import FloatingLabelField from "../form/FloatingLabelField";
import CurrencyIcon from "../currency/CurrencyIcon";
import InputButton from "../buttons/InputButton";
import FieldLabel from "../form/FieldLabel";

export const RegisterSignup = ({isShow}) => {
  const {t} = useTranslation('common');
  const [activeBonus, setActiveBonus] = useState(false);
  const [usernameData, setUsernameData] = useState('');
  const [passwordData, setPasswordData] = useState('');
  const [userEmailData, setUserEmailData] = useState('');
  const [bonusCodeData, setBonusCodedata] = useState('');
  const [youAgree, setYouAgree] = useState(false);
  const [youAgreeError, setYouAgreeError] = useState('');
  const [registerError, setRegisterError] = useState('');

  const {register, handleSubmit, formState: {errors}, reset} = useForm({
    resolver: yupResolver(schemaRegister),
  });

  const dispatch = useDispatch();
  const {isOpen, onOpen, onClose} = useDisclosure()
  const userData = useSelector((userData) => userData.authInfo);
  const userCurrency = useSelector((store) => store.userFinance.userCurrencyData);
  const userRegisterBonusCode = useSelector((store) => store.userBonus.bonus_code);
  const userInfo = useSelector((userInfo) => userInfo.authInfo);

  if (userData.isAuthenticated) {
    dispatch(showRegister(false));

    setBonusCodedata('');
    dispatch(setUserRegisterBonusCode(null));
  }

  function registerCloseButtonHandler() {
    if (isShow) {
      dispatch(showRegister(false));
    } else {
      dispatch(showRegister(true))
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
    onClose()
    dispatch(hideRegister(false));
  }

  function showCurrencyBlock() {
    onOpen();
    dispatch(hideRegister(true));
    dispatch(backButtonShouldDo(hideCurrencyShowRegisterModal));
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

  useEffect(() => {
    reset();
    setYouAgreeError('');
    setRegisterError('');
    setActiveBonus(false);
    if (isShow) {
      setBonusCodedata(userRegisterBonusCode ? userRegisterBonusCode : '');
    } else {
      setBonusCodedata('');
      dispatch(setUserRegisterBonusCode(null));
    }
  }, [isShow]);

  useEffect(() => {
    if (userInfo.registerError) {
      setErrorHelper(userInfo, setRegisterError, reset, t, bonusCodeData);
    }
  }, [userInfo.registerError])

  useEffect(() => {
    setBonusCodedata(userRegisterBonusCode ? userRegisterBonusCode : '');
  }, [userRegisterBonusCode])

  const onSelectCurrency = (currencyData) => {
    dispatch(setUserCurrencySwitcher(currencyData))

    hideCurrencyShowRegisterModal()
  }

  const onChangeEmail = (e) => {
    setUserEmailData(e.target.value);
    setRegisterError('');
  }

  const onChangeUsername = (e) => {
    setUsernameData(e.target.value);
    setRegisterError('');
  }

  const onChangePassword = (e) => {
    setPasswordData(e.target.value);
    setRegisterError('');
  }

  const onChangeBonus = (e) => {
    setBonusCodedata(e.target.value);
    setRegisterError('');
  }

  return (
    <>
      <SelectModal
        isOpen={isShow}
        width={430}
        headerHeight={70}
        onClose={registerCloseButtonHandler}
        title={t('registrationForm.innerHeading')}
        footer={<SubmitButton title={t('registrationForm.signUpButton')} form="register_form"/>}
        before={<ModalTopHeader title={t('loginForm.mainHeading')} fontSize="33px"
                                top={{base: "-100px", lg: "-60px"}}/>}
        mt="200px"
        scrollBehavior="outside"
      >
        <VStack p="20px 34px 10px">
          <chakra.form
            id={'register_form'}
            onSubmit={handleSubmit(onSubmitHandler)}
            fontFamily="Verdana"
            w="100%"
          >
            <InputField
              label={t('registrationForm.emailInput')}
              error={t(errors?.email?.message)}
              onInput={onChangeEmail}
              validation={{...register("email")}}
              value={userEmailData}
              id={'emailIn'}
            />

            <InputField
              label={t('registrationForm.usernameInput')}
              error={t(errors?.username?.message)}
              onInput={onChangeUsername}
              validation={{...register("username")}}
              value={usernameData}
              id={'usernameIn'}
            />

            <InputField
              label={t('registrationForm.passwordInput')}
              error={t(errors?.password?.message)}
              onInput={onChangePassword}
              validation={{...register("password")}}
              value={passwordData}
              id={'passwordLogIn'}
              type="password"
            />

            <FieldLabel>{t('registrationForm.currencyInput')}</FieldLabel>
            <InputButton onClick={showCurrencyBlock} mb={1}>
              <HStack>
                <CurrencyIcon id={userCurrency?.abbreviation} size={8}/>
                <Text>{userCurrency?.abbreviation}</Text>
              </HStack>
            </InputButton>

            {!activeBonus && <HStack justifyContent="center">
              <LinkButton onClick={() => showBonusInput()}>{t('registrationForm.iHaveBonusHeading')}</LinkButton>
            </HStack>}
            {activeBonus && <FloatingLabelField
              label={t('registrationForm.bonusCodeInput')}
              placeholder=" "
              onInput={onChangeBonus}
              value={bonusCodeData}
              id={'bonusIn'}
              mt={7}
              color="primary.500"
            />}

            <HStack fontSize={10} mt={4}>
              <Checkbox
                size="lg"
                colorScheme='primary'
                onChange={youAgreeHandler}
              >
                <Text fontSize="10px">{t('registrationForm.iReadAndAgree')}</Text>
              </Checkbox>
              <Link href={'/termsAndConditions'}>
                <chakra.a textDecoration="underline" onClick={registerCloseButtonHandler}>
                  {t('registrationForm.termsOfUseLink')}
                </chakra.a>
              </Link>
            </HStack>

            {youAgreeError && <Box fontSize={12} my={1} color="red.500">{youAgreeError}</Box>}
            {registerError && <Box fontSize={12} my={1} color="red.500">{registerError}</Box>}
          </chakra.form>

          <HStack>
            <Text color="grey.600" fontFamily="Verdana" fontSize={15}>{t('registrationForm.alreadyRegistered')}</Text>
            <LinkButton onClick={openLogin}>{t('registrationForm.logInLink')}</LinkButton>
          </HStack>
        </VStack>
      </SelectModal>

      <SelectCurrencyModal
        isOpen={isOpen}
        onClose={hideCurrencyShowRegisterModal}
        onSelect={onSelectCurrency}
      />
    </>
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
