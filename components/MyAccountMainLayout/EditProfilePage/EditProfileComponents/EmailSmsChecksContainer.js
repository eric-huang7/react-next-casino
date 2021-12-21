import styles from '../../../../styles/MyAccount/UserInfoPage/EditProfilePage.module.scss';


export const EmailSmsChecksContainer = ({t}) => {



  return (
    <div  className={`${styles.inputWrapper} ${styles.checkboxWrapper}`}>
      <div className={`${styles.checkboxEmailWrapper} ${styles.checkboxContainer}`}>
        <input type="checkbox" id={'editEmailCheck'}/>
        <label htmlFor="editEmailCheck">Receive Email Promos</label>
      </div>
      <div className={`${styles.checkboxSmsWrapper} ${styles.checkboxContainer}`}>
        <input type="checkbox" id={'editSmsCheck'}/>
        <label htmlFor="editSmsCheck">Receive SMS Promos</label>
      </div>
    </div>
  )
}