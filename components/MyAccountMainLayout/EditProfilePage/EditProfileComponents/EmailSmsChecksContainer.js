import styles from '../../../../styles/MyAccount/UserInfoPage/EditProfilePage.module.scss';


export const EmailSmsChecksContainer = ({t, emailPromo, emailPromoInputHandler, smsPromoPromoInputHandler, smsPromo}) => {



  return (
    <div  className={`${styles.inputWrapper} ${styles.checkboxWrapper}`}>
      <div className={`${styles.checkboxEmailWrapper} ${styles.checkboxContainer}`}>
        <input
          type="checkbox"
          id={'editEmailCheck'}
          checked={emailPromo}
          onChange={(e) => emailPromoInputHandler(e.target.checked)}
        />
        <label htmlFor="editEmailCheck">Receive Email Promos</label>
      </div>
      <div className={`${styles.checkboxSmsWrapper} ${styles.checkboxContainer}`}>
        <input
          type="checkbox"
          id={'editSmsCheck'}
          checked={smsPromo}
          onChange={(e) => smsPromoPromoInputHandler(e.target.checked)}
        />
        <label htmlFor="editSmsCheck">Receive SMS Promos</label>
      </div>
    </div>
  )
}