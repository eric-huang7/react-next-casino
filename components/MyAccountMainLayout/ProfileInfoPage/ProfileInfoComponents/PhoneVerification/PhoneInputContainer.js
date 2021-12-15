import styles from '../../../../../styles/MyAccount/UserInfoPage/PhoneVerification.module.scss';



export const PhoneInputContainer = ({t}) => {
  const phoneInputValue = (value) => {

  }



  return (
    <div  className={styles.phoneInputContainer}>
      <div>
        <p className={styles.textFirst}>Add Verified Phone</p>
        <p className={styles.textSecond}>Verification code will be send to your phone.</p>
      </div>
      <div className={styles.phoneInputWrapper}>
        <input type="tel" className={styles.phoneVerifyInput}/>
        <button className={styles.phoneVerifyButton}>Add</button>
      </div>
    </div>
  )
}