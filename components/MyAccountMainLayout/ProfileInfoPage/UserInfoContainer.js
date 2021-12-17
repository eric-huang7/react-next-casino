import styles from '../../../styles/MyAccount/UserInfoPage/UserInfoBlock.module.scss';

import {UserInfoBlock} from "./ProfileInfoComponents/UserInfoBlock";
import {PhoneVerification} from "./ProfileInfoComponents/PhoneVerification/PhoneVerification";
import {ChangePasswordBlock} from "./ChangePasswordBlock/ChangePasswordBlock";
import {SocialNetworkBlock} from "./SocialNetworkBlock/SocialNetworkBlock";


export const UserInfoContainer = ({t, userInfo}) => {

  return (
    <div className={styles.mainContaainer}>
      <UserInfoBlock userInfo={userInfo} t={t}/>
      <PhoneVerification t={t} userInfo={userInfo}/>
      <ChangePasswordBlock t={t} userInfo={userInfo}/>
      <SocialNetworkBlock t={t} userInfo={userInfo}/>
    </div>
  )
}