import styles from '../../../styles/MyAccount/BalancePage/BalancePage.module.scss'
import { TableContainer } from './TableContainer'
import { useDispatch } from 'react-redux'
import { LoadingComponent } from '../../LoadingComponent/LoadingComponent'
import { showCurrencySwitcher } from '../../../redux/popups/action'
import { setCurrencySelectorType } from '../../../redux/actions/setSelectedCurrency'

export const BalanceInfoContainer = ({ t, balanceInfo, currency }) => {
  const dispatch = useDispatch()
  const addCurrencyClickHandler = () => {
    dispatch(showCurrencySwitcher(true))
    dispatch(setCurrencySelectorType(false))
  }

  if (balanceInfo?.balance?.success && !currency.loading) {
    return (
      <>
        <div className={styles.tableContainerWrapper}>
          <TableContainer currency={currency} balanceInfo={balanceInfo} t={t}/>
        </div>
        <button onClick={() => addCurrencyClickHandler()} className={styles.addCurrencyButton}>
          {t('myAccount.balance.buttons.addCurrency')}
        </button>
      </>
    )
  } else {
    return (
      <LoadingComponent t={t}/>
    )
  }

}
