import styles from "../../../../../styles/MyAccount/UserInfoPage/PhoneVerification.module.scss";


export const VerifyCodeInputs = ({t}) => {


  return (
    <div className={styles.codeInputWrapper}>
      <input type="text" className={styles.verifyCodeInput}/>
      <button className={styles.verifyCodeButton}>Send Code</button>
    </div>
  )
}