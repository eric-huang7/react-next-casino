import styles from "../../../styles/MyAccount/UserInfoPage/ChangePasswordPage.module.scss";
import Link from "next/link";
import {EmailBlock} from "./EmailBlock";
import {PasswordBlock} from "./PasswordBlock";
import {ConfirmPasswordBlock} from "./ConfirmPasswordBlock";
import {CurrentPasswordBlock} from "./CurrentPasswordBlock";
import {ButtonsBlock} from "./ButtonsBlock";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {schemaChangePassword} from "../../../schemasForms/changePasswordForm";
import {patchUserData} from "../../../redux/actions/userData";


export const ChangePasswordForm = ({t, userInfo}) => {
  const {register, handleSubmit, formState: {errors}, reset} = useForm({
    resolver: yupResolver(schemaChangePassword),
  });
  const dispatch = useDispatch();

  console.log(userInfo)

  useEffect(() => {
    setPasswordValue("");
    setPasswordConfirmValue("");
  },[errors])

  const [passwordValue, setPasswordValue] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordConfirmValue, setPasswordConfirmValue] = useState('');
  const [passwordConfirmError, setPasswordConfirmError] = useState('');
  const [currenPasswordValue, setCurrenPasswordValue] = useState('');
  const [currenPasswordError, setCurrenPasswordError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const passwordInputHandler = (value) => {
    setPasswordValue(value);
  }
  const confirmPasswordInputHandler = (value) => {
    setPasswordConfirmValue(value);
  }
  const currentPasswordInputHandler = (value) => {
    setCurrenPasswordValue(value);
  }

  const onSubmitHandler = (data) => {
    submitHelper(data);

  }
  const submitHelper = (data) => {
    if (data.password === passwordConfirmValue) {
      let userData = {
        id: userInfo.user.user.id,
        password: data.password,
        current_password: currenPasswordValue,
      }
      dispatch(patchUserData(userData));
      console.log('submit', data);
      setPasswordConfirmError("");
      // Пароль успешно изменен!
      setSuccessMessage('Password changed successfully!');
      setPasswordConfirmValue("");
      setPasswordValue("");
    } else {
      //Пароль не совпадает!
      setSuccessMessage('');
      setPasswordValue("");
      setPasswordConfirmValue("");
      setPasswordConfirmError("Password does not match!");
    }
  }
  return (
    <div className={styles.changePasswordMainWrapper}>
      <form
        id={'changePasswordForm'}
        className={styles.changePasswordForm}
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <EmailBlock
          userInfo={userInfo.user.user}
          t={t}
        />
        <PasswordBlock
          errors={errors}
          register={register}
          passwordError={passwordError}
          passwordInputHandler={passwordInputHandler}
          passwordValue={passwordValue}
          t={t}
        />
        <ConfirmPasswordBlock
          passwordConfirmError={passwordConfirmError}
          confirmPasswordInputHandler={confirmPasswordInputHandler}
          passwordConfirmValue={passwordConfirmValue}
          t={t}
        />
        <CurrentPasswordBlock
          currenPasswordError={currenPasswordError}
          currentPasswordInputHandler={currentPasswordInputHandler}
          currenPasswordValue={currenPasswordValue}
          t={t}
        />
      </form>
      <p className={styles.successMessage}>{successMessage}</p>
      <ButtonsBlock t={t}/>
    </div>
  )
}