import styles from '../../../../../styles/MyAccount/UserInfoPage/PhoneVerification.module.scss';
import {VerifyCodeInputs} from "./VerifyCodeInputs";


export const VerifyCodeInputContainer = ({t, userInfo}) => {
  console.log(userInfo)

  let phoneNumber = userInfo.phone_number.replaceAll('-', '').split('').map((el, ind) => {
    if (ind === 5 || ind === 6 || ind === 7) {
      return "*";
    } else {
      return el;
    }
  });

  console.log(phoneNumber)

  let status = userInfo.is_verified === 0 ? 'Not verified' : 'Verified';

  return (
    <div className={styles.verifyCodeContainer}>
      <h3 className={styles.verifyHeading}>Verified Phone</h3>
      <table className={styles.verifyPhoneTable}>
        <tr>
          <td>Phone Number</td><td>{phoneNumber}</td>
        </tr>
        <tr>
          <td>Status</td><td>{status}</td>
        </tr>
      </table>
      <button className={styles.verifyButton}>Verify</button>

      <VerifyCodeInputs  t={t}/>
    </div>
  )
}