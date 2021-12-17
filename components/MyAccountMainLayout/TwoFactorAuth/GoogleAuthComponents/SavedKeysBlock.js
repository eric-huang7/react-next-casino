import styles from '../../../../styles/MyAccount/UserInfoPage/TwoFactorAuthPage.module.scss';


export const SavedKeysBlock = ({t, savedKeys}) => {


  return (
    <div className={styles.savedKeysHeading}>
      <h3 className={styles.keysHeading}>Backup Codes</h3>
      <p className={styles.information}>Should you ever lose your device use the codes to regain acces to your account. Keep them in a safe place.</p>
      {
        savedKeys.map((el) => {
          return (
            <p key={`${el} save key`} className={styles.saveKey}>{el}</p>
          )
        })
      }

    </div>
  )
}