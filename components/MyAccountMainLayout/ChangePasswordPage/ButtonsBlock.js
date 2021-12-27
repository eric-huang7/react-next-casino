import styles from "../../../styles/MyAccount/UserInfoPage/ChangePasswordPage.module.scss";
import Link from "next/link";


export const ButtonsBlock = ({t}) => {

  return (
    <div className={styles.buttonsContainer}>
      <button
        type={"submit"}
        form={'changePasswordForm'}
        className={styles.submitButton}
      >
        {t("myAccount.changePasswordPage.updateButton")}
      </button>
      <Link href={'/accounts/profile-info'}><a>{t("myAccount.changePasswordPage.cancelButton")}</a></Link>
    </div>
  )
}