import styles from '../../../../styles/MyAccount/BonusHistory/BonusHistory.module.scss'
import { YearSelector } from './YearSelector'
import { MonthSelector } from './MonthSelector'
import { DaySelector } from './DaySelector'

export const FromDateSelector = ({
  t,
  dayFilter,
  setDayFilter,
  setMonthFilter,
  setYearFilter,
  yearFilter,
  monthFilter
}) => {

  return (
    <div className={styles.dateSelectorsWrapper}>

      <YearSelector
        setYearFilter={setYearFilter}
        yearFilter={yearFilter}
        t={t}
      />
      <MonthSelector
        t={t}
        setMonthFilter={setMonthFilter}
        monthFilter={monthFilter}
      />
      <DaySelector
        setDayFilter={setDayFilter}
        dayFilter={dayFilter}
      />
    </div>
  )
}