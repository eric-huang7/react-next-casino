import styles from '../../../../styles/MyAccount/UserInfoPage/TwoFactorAuthPage.module.scss';



export const AuthCodeInputBlock = ({t, confirmButtonClickHandler, googleKEyInputHandler, googleKeyValue, googleAuthError}) => {


  return (
    <div className={styles.authKeyInputBlock}>
      <p className={styles.keyInputHeading}>Enable Google Authenticator</p>
      <p className={styles.enterKeyText}>Enter current authentication code to complete configuration.</p>
      <p className={styles.errorMessage}>{googleAuthError}</p>
      <div className={styles.inputsBlock}>
        <input onChange={(e) => googleKEyInputHandler(e.target.value)} value={googleKeyValue} type="text" className={styles.inputCode}/>
        <button onClick={() => confirmButtonClickHandler()} className={styles.confirmButton}>Confirm</button>
      </div>
    </div>
  )
}