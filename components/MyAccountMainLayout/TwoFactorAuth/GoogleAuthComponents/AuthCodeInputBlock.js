import styles from '../../../../styles/MyAccount/UserInfoPage/TwoFactorAuthPage.module.scss';



export const AuthCodeInputBlock = ({t}) => {


  return (
    <div className={styles.authKeyInputBlock}>
      <p className={styles.keyInputHeading}>Enable Google Authenticator</p>
      <p className={styles.enterKeyText}>Enter current authentication code to complete configuration.</p>

      <div className={styles.inputsBlock}>
        <input type="text" className={styles.inputCode}/>
        <button className={styles.confirmButton}>Confirm</button>
      </div>
    </div>
  )
}