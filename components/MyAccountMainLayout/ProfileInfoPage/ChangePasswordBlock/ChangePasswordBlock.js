import styles from '../../../../styles/MyAccount/UserInfoPage/ChangePasswordContainer.module.scss';
import Link from "next/link";


export const ChangePasswordBlock = ({t, userInfo}) => {

  return (
    <div className={styles.changePasswordContainer}>
      <h3 className={styles.changePasswordHeading}>Change password</h3>
      <p className={styles.emailInfo}><span>Email</span><span>{userInfo.user.user.email}</span></p>
      <Link href={'/accounts/edit-password'} ><a className={styles.changePasswordLink}>Change Password</a></Link>
    </div>
  )
}