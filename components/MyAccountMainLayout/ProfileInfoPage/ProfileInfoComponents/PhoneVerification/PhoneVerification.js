import styles from '../../../../../styles/MyAccount/UserInfoPage/PhoneVerification.module.scss';
import {PhoneInputContainer} from "./PhoneInputContainer";
import {VerifyCodeInputContainer} from "./VerifyCodeInputContainer";


export const PhoneVerification = ({t, userInfo}) => {



  if (userInfo.user.user.is_verified === 0 && userInfo.user.user.phone_number) {
    return (
      <div className={styles.phoneVerificationContainer}>
        <VerifyCodeInputContainer t={t} userInfo={userInfo.user.user}/>
      </div>
    )
  } else if (userInfo.user.user.is_verified === 0 && !userInfo.user.user.phone_number) {
    return (
      <div className={styles.phoneVerificationContainer}>
        <PhoneInputContainer t={t} />
      </div>
    )
  } else {
    return (
      <div className={styles.phoneVerificationContainer}>
        {userInfo.user.user.phone_number }
        empty!!!
      </div>
    )
  }

}