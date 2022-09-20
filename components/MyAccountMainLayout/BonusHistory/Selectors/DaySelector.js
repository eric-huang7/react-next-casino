import {HStack} from "@chakra-ui/react";
import SelectField from "../../../form/SelectField";

export const DaySelector = ({setDayFilter, dayFilter}) => {
  let daysArr = Array.from({length: 31}, (el, ind) => ind + 1);

  return (
    <HStack alignItems="center">
      <SelectField value={dayFilter} name="daySelector" onChange={(e) => setDayFilter(e.target.value)}>
        <option value={undefined}>{null}</option>
        {
          daysArr.map((el) => <option key={el} value={el}>{el}</option>)
        }
      </SelectField>
    </HStack>
  )
}
