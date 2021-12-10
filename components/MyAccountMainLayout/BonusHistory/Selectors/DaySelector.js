import styles from '../../../../styles/MyAccount/BonusHistory/BonusHistory.module.scss';


export const DaySelector = () => {
  let daysArr = Array.from({length: 31}, (el, ind) => ind + 1);
  console.log(daysArr)

  return (
    <div className={styles.daySelectorWrapper}>
      <select className={styles.daySelector} name="daySelector" id="daySelector">
        <option value={null}>{null}</option>
        {
          daysArr.map((el) => <option key={el} value={el}>{el}</option>)
        }
      </select>
    </div>

  )
}