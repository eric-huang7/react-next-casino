import styles from '../../../styles/MyAccount/UserInfoPage/UserInfoBlock.module.scss';

import {UserInfoBlock} from "./ProfileInfoComponents/UserInfoBlock";
import {PhoneVerification} from "./ProfileInfoComponents/PhoneVerification/PhoneVerification";
import {ChangePasswordBlock} from "./ChangePasswordBlock/ChangePasswordBlock";
import {SocialNetworkBlock} from "./SocialNetworkBlock/SocialNetworkBlock";
import {ActiveSessionsBlock} from "./ActiveSessionsBlock/ActiveSessionsBlock";
import {LastClosedSessionsBlock} from "./LastClosedSessionsBlock/LastClosedSessionsBlock";
import {GoogleAuthBlock} from "./GoogleAuthBlock/GoogleAuthBlock";


export const UserInfoContainer = ({t, userInfo}) => {

  return (
    <div className={styles.mainContaainer}>
      <UserInfoBlock userInfo={userInfo} t={t}/>
      <PhoneVerification t={t} userInfo={userInfo}/>
      <ChangePasswordBlock t={t} userInfo={userInfo}/>
      <SocialNetworkBlock t={t} userInfo={userInfo}/>
      <ActiveSessionsBlock t={t} userInfo={userInfo} />
      <LastClosedSessionsBlock t={t} userInfo={userInfo} />
      <GoogleAuthBlock t={t} />
    </div>
  )
}