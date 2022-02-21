import styles from '../../../../styles/MyAccount/UserInfoPage/TwoFactorAuthPage.module.scss'

export const TextBlock = ({ t }) => {

  return (
    <div className={styles.textBlock}>
      <p>{t('myAccount.twoFactorAuthPage.twoFaNOTCompleteContainer.textBlock.textOne')}</p>
      <p>{t('myAccount.twoFactorAuthPage.twoFaNOTCompleteContainer.textBlock.textTwo')}</p>
      <p>{t('myAccount.twoFactorAuthPage.twoFaNOTCompleteContainer.textBlock.textThree')}</p>
      <p>{t('myAccount.twoFactorAuthPage.twoFaNOTCompleteContainer.textBlock.textFour')}</p>
    </div>
  )
}