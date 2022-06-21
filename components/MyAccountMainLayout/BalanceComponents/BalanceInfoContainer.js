import styles from '../../../styles/MyAccount/BalancePage/BalancePage.module.scss'
import { TableContainer } from './TableContainer'
import { useDispatch } from 'react-redux'
import { LoadingComponent } from '../../LoadingComponent/LoadingComponent'
import { showCurrencySwitcher } from '../../../redux/popups/action'
import { setCurrencySelectorType } from '../../../redux/userFinance/action'
import useCurrencies from "../../../hooks/useCurrencies";
import {TotalBalance} from "./TotalBalance";

export const BalanceInfoContainer = ({ t, balanceInfo, currency }) => {
  const dispatch = useDispatch();

  const { rates, rateUsd, currencies } = useCurrencies()

  const addCurrencyClickHandler = () => {
    dispatch(showCurrencySwitcher(true));
    dispatch(setCurrencySelectorType(false));
  }

  if (balanceInfo?.balance?.success && !currency.loading) {
    return (
      <>
        <TotalBalance t={t} rates={rates} rateUsd={rateUsd} currencies={currencies}/>
        <div className={styles.tableContainerWrapper}>
          <TableContainer currency={currency} balanceInfo={balanceInfo} t={t} rates={rates} rateUsd={rateUsd} />
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
