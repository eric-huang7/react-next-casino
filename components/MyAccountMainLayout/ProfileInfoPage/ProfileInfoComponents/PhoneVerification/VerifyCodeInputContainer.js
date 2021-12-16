import styles from '../../../../../styles/MyAccount/UserInfoPage/PhoneVerification.module.scss';
import {VerifyCodeInputs} from "./VerifyCodeInputs";
import {patchUserData} from "../../../../../redux/actions/userData";
import {useDispatch} from "react-redux";
import {VerifyPhoneUserInfoTable} from "./VerifyPhoneUserInfoTable";


export const VerifyCodeInputContainer = ({t, userInfo, phoneError, sendAgainVerifyCode, removePhoneNumberHandler, status, verifyCodeInputHandler, verifyCode, sendVerifyCodeHandler}) => {
  const dispatch = useDispatch()
  let phoneNumber = userInfo.unconfirmed_phone.replaceAll('-', '').split('').map((el, ind) => {
    if (ind === 5 || ind === 6 || ind === 7) {
      return "*";
    } else {
      return el;
    }
  });


  return (
    <div className={styles.verifyCodeContainer}>
      <VerifyPhoneUserInfoTable
        phoneNumber={phoneNumber}
        t={t}
        status={status}
      />
      <div className={styles.buttonsContainer}>
        <button onClick={() => removePhoneNumberHandler()} className={styles.removeNumberButton}>Remove</button>
        <button onClick={() => sendAgainVerifyCode()} className={styles.verifyButton}>Send Again</button>
      </div>
      <VerifyCodeInputs
        verifyCodeInputHandler={verifyCodeInputHandler}
        t={t}
        verifyCode={verifyCode}
        sendVerifyCodeHandler={sendVerifyCodeHandler}
      />
      <span className={styles.errorMessage}>{phoneError}</span>
    </div>
  )
}