import styles from '../../../styles/MyAccount/UserInfoPage/UserInfoBlock.module.scss';

import {UserInfoBlock} from "./ProfileInfoComponents/UserInfoBlock";
import {PhoneVerification} from "./ProfileInfoComponents/PhoneVerification/PhoneVerification";


export const UserInfoContainer = ({t, userInfo}) => {
  console.log(userInfo, 'user page')

  return (
    <div className={styles.mainContaainer}>
      <UserInfoBlock userInfo={userInfo} t={t}/>
      <PhoneVerification t={t} userInfo={userInfo}/>
    </div>
  )
}