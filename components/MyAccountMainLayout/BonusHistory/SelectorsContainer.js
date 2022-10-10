import { StatusSelector } from './Selectors/StatusSelector'
import { useState } from 'react'
import { FromDateSelector } from './Selectors/FromDateSelector'
import { CurrencyBonusSelector } from './Selectors/CurrencyBonusSelector'
import { useDispatch } from 'react-redux'
import { getUserBonuses } from '../../../redux/user/action'
import ErrorEmpty from '../../ErrorBoundaryComponents/ErrorEmpty'
import RoundButton from "../../buttons/RoundButton";
import { Stack } from "@chakra-ui/react";

export const SelectorsContainer = ({ t, userInfo, currencyData }) => {
  const dispatch = useDispatch()

  const [currencyFilter, setCurrencyFilter] = useState(undefined)
  const [statusFilter, setStatusFilter] = useState(undefined)
  const [yearFilter, setYearFilter] = useState(undefined)
  const [monthFilter, setMonthFilter] = useState(undefined)
  const [dayFilter, setDayFilter] = useState(undefined)

  const filterButtonClickHandler = () => {
    let dateNow = new Date
    let dayNow = dateNow.getDate()
    let monthNow = dateNow.getMonth()
    let yearNow = dateNow.getFullYear()
    let statusNeed
    if (statusFilter) {
      statusNeed = statusFilter
    } else {
      statusNeed = '1,2,3,4,6'
    }
    if (yearFilter || monthFilter || dayFilter) {
      if (!yearFilter) {
        setYearFilter(yearNow)
      }
      if (!monthFilter) {
        setMonthFilter(monthNow)
      }
      if (!dayFilter) {
        setDayFilter(dayNow)
      }
      let params = {}
      let arrRequest = [
        { status: statusNeed, type: 'status' },
        { status: currencyFilter, type: 'currency_id' }
      ].map((el) => {
        if (el.status !== undefined && el.status !== '') {
          params[el.type] = Number(el.status) ? Number(el.status) : el.status
          return el
        }
        return el
      })
      params.start_time = Math.floor(new Date(Number(yearFilter), Number(monthFilter), Number(dayFilter)) / 1000)

      dispatch(getUserBonuses(params))
    } else {
      let params = {}
      let arrRequest = [
        { status: statusNeed, type: 'status' },
        { status: currencyFilter, type: 'currency_id' }
      ].map((el) => {
        if (el.status !== undefined && el.status !== '') {
          params[el.type] = Number(el.status) ? Number(el.status) : el.status
          return el
        }
        return el
      })

      dispatch(getUserBonuses(params))
    }
  }

  return (
    <Stack
      direction={{base: 'column', lg: 'row'}}
      w="100%"
      mt="26px"
      mb="37px"
      p="0 5px"
      alignItems={{base: 'flex-start', lg: 'center'}}
      justifyContent={{base: 'flex-start', lg: 'flex-start'}}
    >
      <ErrorEmpty>
        <CurrencyBonusSelector
          setCurrencyFilter={setCurrencyFilter}
          currencyFilter={currencyFilter}
          t={t}
          currencyData={currencyData}
          userInfo={userInfo}
        />
      </ErrorEmpty>
      <ErrorEmpty>
        <StatusSelector
          t={t}
          setStatusFilter={setStatusFilter}
          statusFilter={statusFilter}
        />
      </ErrorEmpty>
      <ErrorEmpty>
        <FromDateSelector
          setYearFilter={setYearFilter}
          setMonthFilter={setMonthFilter}
          setDayFilter={setDayFilter}
          yearFilter={yearFilter}
          monthFilter={monthFilter}
          dayFilter={dayFilter}
          t={t}
        />
      </ErrorEmpty>
      <RoundButton fontSize="15px" solid onClick={filterButtonClickHandler}
                   title={t("myAccount.history.bonus.filterButton")}/>
    </Stack>
  )
}
