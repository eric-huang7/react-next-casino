import styles from '../../../../../styles/MyAccount/UserInfoPage/PhoneVerification.module.scss';
import {VerifyPhoneUserInfoTable} from "./VerifyPhoneUserInfoTable";


export const PhoneAlreadyVerified = ({t, userInfo, status, removePhoneNumberHandler}) => {
  let phoneNumber = userInfo.phone_number ? userInfo.phone_number.replaceAll('-', '').split('').map((el, ind) => {
    if (ind === 5 || ind === 6 || ind === 7) {
      return "*";
    } else {
      return el;
    }
  }) : "";

  return (
    <div className={styles.verifyCodeContainer}>
      <VerifyPhoneUserInfoTable phoneNumber={phoneNumber} t={t} status={status}/>
      <div className={styles.buttonsContainer}>
        <button onClick={() => removePhoneNumberHandler()} className={styles.removeNumberButton}>Remove</button>
      </div>
    </div>
  )

}