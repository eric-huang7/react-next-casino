import styles from '../../../../styles/MyAccount/UserInfoPage/EditProfilePage.module.scss';
import Link from "next/link";

export const ButtonsBlock = ({t, saveButtonClickHandler}) => {


  return (
    <div className={styles.buttonsBlock}>
      <button onClick={() => saveButtonClickHandler()} className={styles.saveButton}>{t("myAccount.editProfilePage.saveButton")}</button>
      <Link href={'/accounts/profile-info'}><a className={styles.cancelButton}>{t("myAccount.editProfilePage.cancelButton")}</a></Link>
    </div>
  )
}