import styles from "../../../../../styles/HomePage/SumInputs.module.scss";
import Link from "next/link";


export const BonusBlock = ({t, checkedInputHandler, isChecked}) => {




  return (
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
      <div className={styles.bonusSwitcher}>
        <label className={styles.switch}>
          <input onChange={(e) => checkedInputHandler(e)} className={styles.bonusSwitcherInput} type="checkbox" checked={isChecked} />
          <span className={`${styles.slider} ${styles.round}`}>
              </span>
        </label>
      </div>
    </div>
  )
}