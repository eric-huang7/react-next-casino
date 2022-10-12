import styles from "../../../../styles/MyAccount/UserInfoPage/GoogleAuthConfirmModal.module.scss";

export const GoogleAuthConfirmModal = ({t, onClose, onConfirm }) => (
  <div className={`${styles.forgotPasswordWrapper} `}>
    <div className={styles.mainContainer}>
      <div className={styles.instructionsBlock}>
        <div className={styles.blockHeading}>
          <div className={styles.emptyBlock}/>
          <h3 className={`${styles.heading} ${styles.smallHeading}`}>{t('myAccount.twoFactorAuthPage.confirm.title')}</h3>
          <button
            onClick={onClose}
            className={styles.closeButton}
          >
            <span className={styles.closeOne}></span>
            <span className={styles.closeTwo}></span>
          </button>
        </div>
        <div className={`${styles.innerContainer}`}>
          {t('myAccount.twoFactorAuthPage.confirm.text')}
          <div className={styles.buttonsWrapper}>
            <button className={styles.confirmButton} onClick={onConfirm}>
              {t('myAccount.twoFactorAuthPage.confirm.yes')}
            </button>
            <button className={styles.cancelButton} onClick={onClose}>
              {t('myAccount.twoFactorAuthPage.confirm.no')}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)
