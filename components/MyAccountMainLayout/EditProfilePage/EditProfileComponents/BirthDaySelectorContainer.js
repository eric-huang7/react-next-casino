import styles from '../../../../styles/MyAccount/UserInfoPage/EditProfilePage.module.scss';
import {DaySelector} from "./Selectors/DaySelector";
import {MonthSelector} from "./Selectors/MonthSelector";
import {YearSelector} from "./Selectors/YearSelector";


export const BirthDaySelectorContainer = ({t}) => {


  return (
    <div className={styles.selectorWrapper}>
      <div className={`${styles.labelWrapper} ${styles.birthdayLabel}`}>
        <label htmlFor="daySelector">Date of Birth</label>
      </div>
      <div className={`${styles.selectorsContainer} ${styles.birthdaySelectorsWrapper}`}>
        <DaySelector t={t} />
        <MonthSelector t={t} />
        <YearSelector t={t} />
      </div>
    </div>
  )
}