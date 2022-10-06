import styles from '../../../../../styles/MyAccount/UserInfoPage/PhoneVerification.module.scss'
import { VerifyPhoneUserInfoTable } from './VerifyPhoneUserInfoTable'
import ErrorText from '../../../../ErrorBoundaryComponents/ErrorText'
import Container from "./Container";

export const PhoneAlreadyVerified = ({ t, userInfo, status, removePhoneNumberHandler }) => {
  let phoneNumber = userInfo.phone_number ? userInfo.phone_number.replaceAll('-', '').split('').map((el, ind) => {
    if (ind === 5 || ind === 6 || ind === 7) {
      return '*'
    } else {
      return el
    }
  }) : ''

  return (
    <Container>
      <ErrorText>
        <VerifyPhoneUserInfoTable phoneNumber={phoneNumber} t={t} status={status}/>
      </ErrorText>
      <div className={styles.buttonsContainer}>
        <button onClick={() => removePhoneNumberHandler()} className={styles.removeNumberButton}>
          {t('myAccount.profilePage.phoneVerification.buttons.remove')}
        </button>
      </div>
    </Container>
  )

}
