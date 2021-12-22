import styles from '../../../../styles/MyAccount/UserInfoPage/TwoFactorAuthPage.module.scss';


export const TwoFactorCompleteInputsBlock = ({t, deactivateButtonClickHandler, deactivateCodeValue, deactivateInputHandler, deactivateError}) => {


  return (
    <div className={styles.deactivateAuthInputsBlock}>
      <p className={styles.deactivateHeading}>Deactivate Google Authenticator</p>
      <p className={styles.deactivateInfo}>Enter current authentication code to complete configuration.</p>
      <p className={styles.errorMessage}>{deactivateError}</p>
      <form onSubmit={(e) => deactivateButtonClickHandler(e)}>
        <div  className={styles.inputsBlock}>
          <input onChange={(e) => deactivateInputHandler(e.target.value)} type="text" className={styles.deactivateInput} value={deactivateCodeValue}/>
          <button type={"submit"} onClick={(e) => deactivateButtonClickHandler(e)} className={styles.deactivateButton}>Confirm</button>
        </div>
      </form>
    </div>
  )
}