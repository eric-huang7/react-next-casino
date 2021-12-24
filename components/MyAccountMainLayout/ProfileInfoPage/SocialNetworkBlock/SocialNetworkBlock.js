import styles from '../../../../styles/MyAccount/UserInfoPage/SocialNetworkBlock.module.scss';


export const SocialNetworkBlock = ({t, userInfo}) => {


  return (
    <div className={styles.socialNetworkBlock}>
      <h3 className={styles.socialNetworkHeading}>{t("myAccount.profilePage.changePasswordBlock.heading")}</h3>

      <p>{t("myAccount.profilePage.changePasswordBlock.textOne")}</p>
      <p>{t("myAccount.profilePage.changePasswordBlock.textTwo")}</p>
    </div>
  )
}