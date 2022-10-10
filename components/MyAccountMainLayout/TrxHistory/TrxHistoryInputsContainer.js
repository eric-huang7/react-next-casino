import { CurrencySelector } from './Selectors/CurrencySelector'
import { ActionSelector } from './Selectors/ActionSelector'
import { StatusSelector } from './Selectors/StatusSelector'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getUserPayments } from '../../../redux/user/action'
import ErrorEmpty from '../../ErrorBoundaryComponents/ErrorEmpty'
import {Stack} from "@chakra-ui/react";
import RoundButton from "../../buttons/RoundButton";

export const TrxHistoryInputsContainer = ({ t, userInfo, currencyData, setWasFiltering }) => {
  const dispatch = useDispatch()
  const [currencyFilter, setCurrencyFilter] = useState(null)
  const [actionFilter, setActionFilter] = useState(null)
  const [statusFilter, setStatusFilter] = useState(null)

  const filterButtonClickHandler = () => {
    let params = { user_id: Number(userInfo?.user?.user?.id) }
    let arrRequest = [
      { status: statusFilter, type: 'status' },
      { status: actionFilter, type: 'action' },
      { status: currencyFilter, type: 'currency_id' }
    ].map((el) => {
      if (el.status !== null && el.status !== '') {
        params[el.type] = Number(el.status) ? Number(el.status) : el.status
        return el
      }
      return el
    })
    setWasFiltering(true)
    dispatch(getUserPayments(params))
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
        <CurrencySelector
          setCurrencyFilter={setCurrencyFilter}
          t={t}
          currencyData={currencyData}
          userInfo={userInfo}
        />
      </ErrorEmpty>
      <ErrorEmpty>
        <ActionSelector
          setActionFilter={setActionFilter}
          t={t}
        />
      </ErrorEmpty>

      <ErrorEmpty>
        <StatusSelector
          setStatusFilter={setStatusFilter}
          t={t}
        />
      </ErrorEmpty>

      <RoundButton fontSize="15px" solid onClick={filterButtonClickHandler}
                   title={t("myAccount.history.transactions.inputsItems.filterButton")}/>
    </Stack>
  )
}
