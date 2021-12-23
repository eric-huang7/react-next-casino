import styles from '../../../../styles/MyAccount/UserInfoPage/EditProfilePage.module.scss';
import {DaySelector} from "./Selectors/DaySelector";
import {MonthSelector} from "./Selectors/MonthSelector";
import {YearSelector} from "./Selectors/YearSelector";


export const BirthDaySelectorContainer = ({t, value, disableEdit}) => {
  const yearSelectorHandler = (e) => {
    console.log(e);
  }
  const monthSelectorHandler = (e) => {

  }
  const daySelectorHandler = (e) => {

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