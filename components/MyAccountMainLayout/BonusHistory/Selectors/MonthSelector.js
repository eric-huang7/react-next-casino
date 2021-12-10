import styles from '../../../../styles/MyAccount/BonusHistory/BonusHistory.module.scss';



let months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export const MonthSelector = ({t}) => {


  return (
    <div className={styles.monthSelectorWrapper}>
      <select className={styles.monthSelector} name='monthContainer' id="monthContainer">
        <option value={null}>{null}</option>
        {
          months.map((el) => <option key={el} value={el}>{el}</option>)
        }
      </select>
    </div>
  )
}