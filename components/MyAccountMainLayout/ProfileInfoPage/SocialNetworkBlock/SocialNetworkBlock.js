import styles from '../../../../styles/MyAccount/UserInfoPage/SocialNetworkBlock.module.scss';


export const SocialNetworkBlock = ({t, userInfo}) => {


  return (
    <div className={styles.socialNetworkBlock}>
      <h3 className={styles.socialNetworkHeading}>{t("myAccount.profilePage.socialNetworkBlock.heading")}</h3>

      <p>{t("myAccount.profilePage.socialNetworkBlock.textOne")}</p>
      <p>{t("myAccount.profilePage.socialNetworkBlock.textTwo")}</p>
    </div>
  )
}