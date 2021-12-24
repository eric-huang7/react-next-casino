import styles from '../../../../styles/MyAccount/UserInfoPage/TwoFactorAuthPage.module.scss';


export const SavedKeysBlock = ({t, savedKeys}) => {


  return (
    <div className={styles.savedKeysHeading}>
      <h3 className={styles.keysHeading}>{t("myAccount.twoFactorAuthPage.savedKeysContainer.heading")}</h3>
      <p className={styles.information}>{t("myAccount.twoFactorAuthPage.savedKeysContainer.textBlock")}</p>
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