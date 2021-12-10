import styles from '../../../../styles/MyAccount/BonusHistory/BonusHistory.module.scss';



let months = [
  {name: 'January', value: 0},
  {name: 'February', value: 1},
  {name: 'March', value: 2},
  {name: 'April', value: 3},
  {name: 'May', value: 4},
  {name: 'June', value: 5},
  {name: 'July', value: 6},
  {name: 'August', value: 7},
  {name: 'September', value: 8},
  {name: 'October', value: 9},
  {name: 'November', value: 10},
  {name: 'December', value: 11},
];

export const MonthSelector = ({t, monthFilter, setMonthFilter}) => {


  return (
    <div className={styles.monthSelectorWrapper}>
      <select
        onChange={(e) => setMonthFilter(e.target.value)}
        value={monthFilter}
        className={styles.monthSelector}
        name='monthContainer'
        id="monthContainer"
      >
        <option value={undefined}>{null}</option>
        {
          months.map((el) => <option key={`${el.value} month selector`} value={el.value}>{el.name}</option>)
        }
      </select>
    </div>
  )
}