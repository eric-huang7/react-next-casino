import {HStack} from "@chakra-ui/react";
import SelectField from "../../../form/SelectField";

let months = [
  {name: 'myAccount.history.bonus.month.january', value: 0},
  {name: 'myAccount.history.bonus.month.february', value: 1},
  {name: 'myAccount.history.bonus.month.march', value: 2},
  {name: 'myAccount.history.bonus.month.april', value: 3},
  {name: 'myAccount.history.bonus.month.may', value: 4},
  {name: 'myAccount.history.bonus.month.june', value: 5},
  {name: 'myAccount.history.bonus.month.july', value: 6},
  {name: 'myAccount.history.bonus.month.august', value: 7},
  {name: 'myAccount.history.bonus.month.september', value: 8},
  {name: 'myAccount.history.bonus.month.october', value: 9},
  {name: 'myAccount.history.bonus.month.november', value: 10},
  {name: 'myAccount.history.bonus.month.december', value: 11},
];

export const MonthSelector = ({t, monthFilter, setMonthFilter}) => (
  <HStack alignItems="center">
    <SelectField value={monthFilter} name="monthContainer" onChange={(e) => setMonthFilter(e.target.value)}>
      <option value={undefined}>{null}</option>
      {months.map((el) =>
        <option key={`${el.value} month selector`} value={el.value}>{t(el.name)}</option>)
      }
    </SelectField>
  </HStack>
)
