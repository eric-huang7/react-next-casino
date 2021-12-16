import styles from '../../../styles/MyAccount/UserInfoPage/ChangePasswordPage.module.scss';

import Link from "next/link";
import {ChangePasswordForm} from "./ChangePasswordForm";

export const ChangePasswordContainer = ({t, userInfo}) => {


  return (
    <ChangePasswordForm userInfo={userInfo} t={t}/>
  )
}