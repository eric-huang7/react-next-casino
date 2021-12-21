import styles from '../../../../styles/MyAccount/UserInfoPage/EditProfilePage.module.scss';


export const ButtonsBlock = ({t}) => {


  return (
    <div className={styles.buttonsBlock}>
      <button className={styles.saveButton}>Save</button>
      <button className={styles.cancelButton}>Cancel</button>
    </div>
  )
}