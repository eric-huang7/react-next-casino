import styles from '../../../../styles/MyAccount/UserInfoPage/EditProfilePage.module.scss';
import Link from "next/link";

export const ButtonsBlock = ({t, saveButtonClickHandler}) => {


  return (
    <div className={styles.buttonsBlock}>
      <button onClick={() => saveButtonClickHandler()} className={styles.saveButton}>Save</button>
      <Link href={'/accounts/profile-info'}><a className={styles.cancelButton}>Cancel</a></Link>
    </div>
  )
}