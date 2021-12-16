import styles from "../../../../../styles/MyAccount/UserInfoPage/PhoneVerification.module.scss";


export const VerifyCodeInputs = ({t, verifyCodeInputHandler, verifyCode, sendVerifyCodeHandler}) => {


  return (
    <div className={styles.codeInputWrapper}>
      <input type="text" onChange={(e) => verifyCodeInputHandler(e.target.value)} className={styles.verifyCodeInput} value={verifyCode}/>
      <button onClick={() => sendVerifyCodeHandler()} className={styles.verifyCodeButton}>Confirm</button>
    </div>
  )
}