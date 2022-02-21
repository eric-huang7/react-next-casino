import styles from '../../../../styles/MyAccount/GamblingLimitsPage/GamblingLimitsPage.module.scss'
import Link from 'next/link'

export const ButtonsContainer = ({ t, saveButtonHandler }) => {

  return (
    <div className={styles.buttonsBlock}>
      <button onClick={() => saveButtonHandler()}
              className={styles.saveButton}>{t('myAccount.selfExclusionPage.saveButton')}</button>
      <Link href={'/accounts/balance'}><a
        className={styles.cancelButton}>{t('myAccount.selfExclusionPage.cancelButton')}</a></Link>
    </div>
  )
}