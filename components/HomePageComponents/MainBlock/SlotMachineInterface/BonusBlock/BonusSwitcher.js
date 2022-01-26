import styles from "../../../../../styles/HomePage/SumInputs.module.scss";


export const BonusSwitcher = ({checkedInputHandler, isChecked}) => {


  return (
    <div className={styles.bonusSwitcher}>
      <label className={styles.switch}>
        <input onChange={(e) => checkedInputHandler(e)} className={styles.bonusSwitcherInput} type="checkbox" checked={isChecked} />
        <span className={`${styles.slider} ${styles.round}`}>
              </span>
      </label>
    </div>
  )
}