import styles from '../../../../styles/MyAccount/BonusHistory/BonusHistory.module.scss';
import {YearSelector} from "./YearSelector";
import {MonthSelector} from "./MonthSelector";
import {DaySelector} from "./DaySelector";


export const FromDateSelector = ({t}) => {

  return (
    <div className={styles.dateSelectorsWrapper}>
        <YearSelector t={t} />
        <MonthSelector t={t}/>
        <DaySelector />
    </div>
  )
}