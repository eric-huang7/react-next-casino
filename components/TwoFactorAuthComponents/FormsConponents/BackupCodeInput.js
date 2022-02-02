import styles from "../../../styles/TwoFaAuth/TwoFaAuth.module.scss";


export const BackupCodeInput = ({error}) => {


  return (
    <div className={styles.backupCodeInputContainer}>
      <form >
        <input
          type="text"
          className={`${styles.backupCodeInput} ${error ? styles.errorField : ''}`}
        />
      </form>
    </div>
  )
}