import Link from "next/link";

import styles from '../../../../../styles/HomePage/SumInputs.module.scss'

export const SumInputs = () => {
  
  return (
    <>
      <div className={styles.inputsWrapper}>
        <input className={styles.sumInput} placeholder={'$'} type="number"/>
        <div className={styles.сurrencyButton}>
          <span className={styles.currencyButtonValue}>USD</span>
        </div>
      </div>
      <div className={styles.dividerUp}/>
      <div className={styles.bonusInfoBlockWrapper}>
        <div className={styles.bonusInfoBlock}>
          <p>
            First Deposit Bonus
          </p>
          <Link href={'#'}><a>info</a></Link>
        </div>
        <p className={styles.bonusInfoText}>
          100% up to $100 plus 200 free spin...
        </p>
      </div>
      <div className={styles.dividerDown}/>
      <div className={styles.typePayments}>
      </div>
    </>

  )
}