import styles from '../../../../styles/MyAccount/BonusHistory/BonusHistory.module.scss';


export const DaySelector = ({setDayFilter, dayFilter}) => {
  let daysArr = Array.from({length: 31}, (el, ind) => ind + 1);

  return (
    <div className={styles.daySelectorWrapper}>
      <select
        onChange={(e) => setDayFilter(e.target.value)}
        value={dayFilter}
        className={styles.daySelector}
        name="daySelector"
        id="daySelector"

      >
        <option value={undefined}>{null}</option>
        {
          daysArr.map((el) => <option key={el} value={el}>{el}</option>)
        }
      </select>
    </div>

  )
}