import styles from '../../../../../styles/MyAccount/UserInfoPage/PhoneVerification.module.scss'
import { VerifyCodeInputs } from './VerifyCodeInputs'
import { useDispatch } from 'react-redux'
import { VerifyPhoneUserInfoTable } from './VerifyPhoneUserInfoTable'
import ErrorText from '../../../../ErrorBoundaryComponents/ErrorText'

export const VerifyCodeInputContainer = ({
  t,
  userInfo,
  phoneError,
  sendAgainVerifyCode,
  removePhoneNumberHandler,
  status,
  verifyCodeInputHandler,
  verifyCode,
  sendVerifyCodeHandler
}) => {
  const dispatch = useDispatch()
  let phoneNumber = userInfo.unconfirmed_phone.replaceAll('-', '').split('').map((el, ind) => {
    if (ind === 5 || ind === 6 || ind === 7) {
      return '*'
    } else {
      return el
    }
  })

  return (
    <div className={styles.verifyCodeContainer}>
      <ErrorText>
        <VerifyPhoneUserInfoTable
          phoneNumber={phoneNumber}
          t={t}
          status={status}
        />
      </ErrorText>
      <div className={styles.buttonsContainer}>
        <button onClick={() => removePhoneNumberHandler()}
                className={styles.removeNumberButton}>{t('myAccount.profilePage.phoneVerification.buttons.remove')}</button>
        <button onClick={() => sendAgainVerifyCode()}
                className={styles.verifyButton}>{t('myAccount.profilePage.phoneVerification.buttons.sendAgain')}</button>
      </div>
      <ErrorText>
        <VerifyCodeInputs
          verifyCodeInputHandler={verifyCodeInputHandler}
          t={t}
          verifyCode={verifyCode}
          sendVerifyCodeHandler={sendVerifyCodeHandler}
        />
      </ErrorText>
      <span className={styles.errorMessage}>{phoneError}</span>
    </div>
  )
}