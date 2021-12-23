import styles from '../../../../styles/MyAccount/UserInfoPage/EditProfilePage.module.scss';


export const ButtonsBlock = ({t, saveButtonClickHandler}) => {


  return (
    <div className={styles.buttonsBlock}>
      <button onClick={() => saveButtonClickHandler()} className={styles.saveButton}>Save</button>
      <button className={styles.cancelButton}>Cancel</button>
    </div>
  )
}