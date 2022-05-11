import styles from '../../../styles/HomePage/WhySlotsIdol.module.scss'
import { useTranslation } from 'next-i18next'

export const WhySlotsIdol = ({ isBackShow, title }) => {
  const { t } = useTranslation('common')
  return (
    <div className={`${styles.whySlotsMainwrapper} ${isBackShow ? styles.backShow : ''}`}>
      <div className={styles.headingWrapper}>
        <div className={styles.heading}>
          <div className={styles.title}>
            {title}
          </div>
        </div>
      </div>
      <div className={styles.whySlotsItems}>
        <div className={`${styles.minuteBlock} ${styles.whySlotsInnerItem}`}>
          <div className={styles.minuteImg}>
            <img src={'/assets/img/whySlotsIdol/minute.svg'} alt="minute"/>
          </div>
          <p className={styles.minuteDescr}>{t(`whySlotsIdol.minuteRegistration`)}</p>
        </div>
        <div className={`${styles.depositsBlock} ${styles.whySlotsInnerItem}`}>
          <div className={styles.depositsImg}>
            <img src={'/assets/img/whySlotsIdol/deposits.svg'} alt="deposits"/>
          </div>
          <p className={styles.depositsDescr}>{t(`whySlotsIdol.InstantDeposits`)}</p>
        </div>
        <div className={`${styles.payoutsBlock} ${styles.whySlotsInnerItem}`}>
          <div className={styles.payoutsImg}>
            <img src={'/assets/img/whySlotsIdol/payouts.svg'} alt="payouts"/>
          </div>
          <p className={styles.payoutsDescr}>{t(`whySlotsIdol.FastPayouts`)}</p>
        </div>
        <div className={`${styles.licensedBlock} ${styles.whySlotsInnerItem}`}>
          <div className={styles.licensedImg}>
            <img src={'/assets/img/whySlotsIdol/licensed.svg'} alt="licensed"/>
          </div>
          <p className={styles.licensedDescr}>{t(`whySlotsIdol.LicensedAndRegulated`)}</p>
        </div>
      </div>
      <div className={styles.whySlotsInfoblock}>
        <h1>{t(`whySlotsIdol.GetMoreCustomerSupport`)}</h1>
        <p>{t(`whySlotsIdol.getSupportInnerText`)}</p>
      </div>
    </div>
  )
}
