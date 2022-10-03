import {DaySelector} from "./Selectors/DaySelector";
import {MonthSelector} from "./Selectors/MonthSelector";
import {YearSelector} from "./Selectors/YearSelector";
import SelectContainer from "./SelectContainer";

const BirthDaySelectorContainer = ({t, value, disableEdit, setBDay, setBMonth, setBYear, bDay, bMonth, bYear}) => (
  <SelectContainer label={t("myAccount.editProfilePage.birthDay")}>
    <YearSelector
      yearSelectorHandler={setBYear}
      disableEdit={disableEdit}
      t={t}
      year={bYear}
    />
    <MonthSelector
      monthSelectorHandler={setBMonth}
      disableEdit={disableEdit}
      t={t}
      month={bMonth}
    />
    <DaySelector
      daySelectorHandler={setBDay}
      disableEdit={disableEdit}
      t={t}
      day={bDay}
    />
  </SelectContainer>
)

export default BirthDaySelectorContainer
