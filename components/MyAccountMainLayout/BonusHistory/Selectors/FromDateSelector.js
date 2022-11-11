import { YearSelector } from './YearSelector'
import { MonthSelector } from './MonthSelector'
import { DaySelector } from './DaySelector'
import {Stack} from "@chakra-ui/react";

export const FromDateSelector = ({
  t,
  dayFilter,
  setDayFilter,
  setMonthFilter,
  setYearFilter,
  yearFilter,
  monthFilter
}) => (
  <Stack direction={{base: 'column', lg: 'row'}} alignItems={{base: 'flex-start', lg: 'center'}}>
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
  </Stack>
)
