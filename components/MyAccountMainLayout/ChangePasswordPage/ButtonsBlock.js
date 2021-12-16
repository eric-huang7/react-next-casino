import styles from "../../../styles/MyAccount/UserInfoPage/ChangePasswordPage.module.scss";
import Link from "next/link";


export const ButtonsBlock = ({t}) => {

  return (
    <div className={styles.buttonsContainer}>
      <button
        type={"submit"}
        form={'changePasswordForm'}
        className={styles.submitButton}>
        {'Update'}
      </button>
      <Link href={'/accounts/profile-info'}><a>Cancel</a></Link>
    </div>
  )
}