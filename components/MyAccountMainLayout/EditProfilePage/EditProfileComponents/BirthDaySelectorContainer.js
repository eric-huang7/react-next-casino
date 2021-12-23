import styles from '../../../../styles/MyAccount/UserInfoPage/EditProfilePage.module.scss';
import {DaySelector} from "./Selectors/DaySelector";
import {MonthSelector} from "./Selectors/MonthSelector";
import {YearSelector} from "./Selectors/YearSelector";
import {useState} from "react";


export const BirthDaySelectorContainer = ({t, value, disableEdit, setBDay, setBMonth, setBYear}) => {
  // const [bDay, setBDay] = useState('');
  // const [bMonth, setBMonth] = useState('');
  // const [bYear, setBYear] = useState('');

  const yearSelectorHandler = (e) => {
    setBYear(e);
  }
  const monthSelectorHandler = (e) => {
    setBMonth(e);
  }
  const daySelectorHandler = (e) => {
    setBDay(e);
  }


  return (
    <div className={styles.selectorWrapper}>
      <div className={`${styles.labelWrapper} ${styles.birthdayLabel}`}>
        <label htmlFor="daySelector">Date of Birth</label>
      </div>
      <div className={`${styles.selectorsContainer} ${styles.birthdaySelectorsWrapper}`}>
        <YearSelector
          yearSelectorHandler={yearSelectorHandler}
          disableEdit={disableEdit}
          t={t}
          year={value.year}
        />
        <MonthSelector
          monthSelectorHandler={monthSelectorHandler}
          disableEdit={disableEdit}
          t={t}
          month={value.month}
        />
        <DaySelector
          daySelectorHandler={daySelectorHandler}
          disableEdit={disableEdit}
          t={t}
          day={value.day}
        />
      </div>
    </div>
  )
}