import styles from '../../../../styles/MyAccount/UserInfoPage/TwoFactorAuthPage.module.scss';


export const TwoFactorCompleteInputsBlock = ({t, deactivateButtonClickHandler, deactivateCodeValue, deactivateInputHandler, deactivateError}) => {


  return (
    <div className={styles.deactivateAuthInputsBlock}>
      <p className={styles.deactivateHeading}>Deactivate Google Authenticator</p>
      <p className={styles.deactivateInfo}>Enter current authentication code to complete configuration.</p>
      <p className={styles.errorMessage}>{deactivateError}</p>
      <div  className={styles.inputsBlock}>
        <input onChange={(e) => deactivateInputHandler(e.target.value)} type="text" className={styles.deactivateInput} value={deactivateCodeValue}/>
        <button onClick={() => deactivateButtonClickHandler()} className={styles.deactivateButton}>Confirm</button>
      </div>
    </div>
  )
}