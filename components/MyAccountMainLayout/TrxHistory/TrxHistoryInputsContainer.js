import styles from '../../../styles/MyAccount/TrxHistory/TrxHistory.module.scss'
import { CurrencySelector } from './Selectors/CurrencySelector'
import { ActionSelector } from './Selectors/ActionSelector'
import { StatusSelector } from './Selectors/StatusSelector'
import { FilterButton } from './Selectors/FilterButton'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getUserPayments } from '../../../redux/user/action'
import ErrorEmpty from '../../ErrorBoundaryComponents/ErrorEmpty'

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
    <div className={styles.inputsContainer}>
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

      <div className={styles.lastSelectorButtonWrapper}>
        <ErrorEmpty>
          <StatusSelector
            setStatusFilter={setStatusFilter}
            t={t}
          />
        </ErrorEmpty>

        <FilterButton
          filterButtonClickHandler={filterButtonClickHandler}
          t={t}
        />
      </div>
    </div>
  )
}
