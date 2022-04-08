import styles from '../../../styles/MyAccount/BalancePage/BalancePage.module.scss'
import { useDispatch } from 'react-redux'
import { setUserCurrencySwitcher } from '../../../redux/actions/setSelectedCurrency'
import { showDepositModal } from '../../../redux/popups/action'

export const DepositButton = ({ t, currency }) => {
  const dispatch = useDispatch()

  const currencyButtonHandler = () => {
    dispatch(setUserCurrencySwitcher(currency))
    dispatch(showDepositModal(true))
  }

  return (
    <button onClick={() => currencyButtonHandler()}
            className={styles.depositButton}>{t('myAccount.balance.buttons.deposit')}</button>
  )
}
