import styles from '../../../styles/HomePage/WhySlotsIdol .module.scss'

export const WhySlotsIdol = ({t}) => {

  return (
      <div className={styles.whySlotsMainwrapper}>
        <div className={styles.whySlotsHeading}>
          <img src={'/assets/img/whySlotsIdol/why_slots_heading.svg'} alt="why slots idol heading"/>
        </div>
        <div className={styles.whySlotsItems}>
          <div className={`${styles.minuteBlock} ${styles.whySlotsInnerItem}`}>
            <div className={styles.minuteImg}>
              <img src={'/assets/img/whySlotsIdol/minute.png'} alt="minute"/>
            </div>
            <p className={styles.minuteDescr}>1 Minute Registration</p>
          </div>
          <div className={`${styles.depositsBlock} ${styles.whySlotsInnerItem}`}>
            <div className={styles.depositsImg}>
              <img src={'/assets/img/whySlotsIdol/deposits.png'} alt="deposits"/>
            </div>
            <p className={styles.depositsDescr}>Instant Deposits</p>
          </div>
          <div className={`${styles.payoutsBlock} ${styles.whySlotsInnerItem}`}>
            <div className={styles.payoutsImg}>
              <img src={'/assets/img/whySlotsIdol/payouts.png'} alt="payouts"/>
            </div>
            <p className={styles.payoutsDescr}>Fast Payouts</p>
          </div>
          <div className={`${styles.licensedBlock} ${styles.whySlotsInnerItem}`}>
            <div className={styles.licensedImg}>
              <img src={'/assets/img/whySlotsIdol/licensed.png'} alt="licensed"/>
            </div>
            <p className={styles.licensedDescr}>Licensed and Regulated</p>
          </div>
        </div>
        <div className={styles.whySlotsInfoblock}>
          <h1>Get More Customer Support</h1>
          <p>Casino representatives are available 24/7 via email and live chat. We assist with registrations, deposits, withdraws and everything about SlotsIdol Casino!</p>
        </div>
      </div>
  )
}