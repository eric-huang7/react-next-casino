import styles from '../../../../styles/MyAccount/UserInfoPage/ChangePasswordContainer.module.scss';
import Link from "next/link";


export const ChangePasswordBlock = ({t, userInfo}) => {

  return (
    <div className={styles.changePasswordContainer}>
      <h3 className={styles.changePasswordHeading}>{t("myAccount.profilePage.changePasswordBlock.heading")}</h3>
      <p className={styles.emailInfo}><span>{t("myAccount.profilePage.changePasswordBlock.email")}</span><span>{userInfo.user.user.email}</span></p>
      <Link href={'/accounts/edit-password'} ><a className={styles.changePasswordLink}>{t("myAccount.profilePage.changePasswordBlock.heading")}</a></Link>
    </div>
  )
}