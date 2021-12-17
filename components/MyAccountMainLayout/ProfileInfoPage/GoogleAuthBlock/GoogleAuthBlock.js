import styles from '../../../../styles/MyAccount/UserInfoPage/GoogleAuth.module.scss';
import Link from "next/link";

export const GoogleAuthBlock = ({t}) => {


  return (
    <div  className={styles.googleAuthMainBlock}>
      <h3 className={styles.googleAuthHeading}>Google Authenticator</h3>

      <Link href={'/accounts/two_factor'}><a className={styles.googleAuthLink}>Configure Google Authenticator</a></Link>
    </div>
  )
}