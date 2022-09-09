import styles from "../../../styles/TwoFaAuth/TwoFaAuth.module.scss";


export const BackupCodeInput = ({error, value, inputCodeHandler, backupCodeFormHandler}) => (
  <div className={styles.backupCodeInputContainer}>
    <form onSubmit={(e) => backupCodeFormHandler(e)}>
      <input
        type="text"
        className={`${styles.backupCodeInput} ${error ? styles.errorField : ''}`}
        value={value}
        onChange={(e) => inputCodeHandler(e.target.value)}
      />
    </form>
  </div>
)
