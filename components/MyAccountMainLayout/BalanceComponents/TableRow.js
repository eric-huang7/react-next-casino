import styles from '../../../styles/MyAccount/BalancePage/BalancePage.module.scss'
import { DepositButton } from './DepositButton'
import { useDispatch } from 'react-redux'
import { patchUserActiveCurrency } from '../../../redux/user/action'

import Link from 'next/link'
import { numberTransformer } from '../../../helpers/numberTransformer'
import ErrorEmpty from '../../ErrorBoundaryComponents/ErrorEmpty'
import {CurrencyItem} from "../../MainLayout/SelectCurrencyWidget/CurrencySelector/CurrencyItem";

export const TableRow = ({ t, balanceData, currencyData, rates = [], rateUsd }) => {
  const dispatch = useDispatch();

  let currency = currencyData?.currency?.results?.find((el) => Number(el.id) === Number(balanceData.currency_id))
  const rate = currency ? rates[currency.id] : null;
  let amount = numberTransformer(parseFloat(balanceData.current_balance)?.toFixed(Math.min(9,currency?.decimal)))
  let cashOut = numberTransformer(parseFloat(balanceData.cash_amount)?.toFixed(Math.min(9,currency?.decimal)))
  let amountBtc = rate ? numberTransformer((parseFloat(balanceData.cash_amount) / rate)?.toFixed(8)) : ''
  let amountFiat = rate ? numberTransformer((rateUsd * parseFloat(balanceData.cash_amount) / rate)?.toFixed(2)) : ''

  const chooseClickHandler = () => {
    let userData = {
      id: balanceData.user_id,
      base_currency_id: balanceData.currency_id
    }
    dispatch(patchUserActiveCurrency(userData))
  }

  return currency ? (
    <tr className={styles.tableRow}>
      {
        Number(balanceData.is_default) === 0 ?
          <td className={`${styles.tableDataActive} ${styles.tableActiveChoose}`}>
            <p onClick={() => chooseClickHandler()}>
              {t('myAccount.balance.table.items.select')}
            </p>
          </td>
          :
          <td className={`${styles.tableDataActive} ${styles.active}`}>
            <p>
              {t('myAccount.balance.table.items.active')}
            </p>
          </td>
      }
      <td className={styles.tableCurrency}>
        <CurrencyItem t={t} currencyData={currency} />
      </td>
      <td className={styles.tableAmount}>
        {`${amount} ${currency?.abbreviation}`}
      </td>
      <td className={styles.tableCashOut}>
        {`${cashOut} ${currency?.abbreviation}`}
      </td>
      <td className={styles.tableCashOut}>
        {rate ? <span>{amountBtc} BTC ≈ {amountFiat} USD</span> : ''}
      </td>
      <td className={styles.tableActions}>
        <div>
          {currency?.isDepositEnabled === 1 && <ErrorEmpty>
            <DepositButton currency={currency} t={t}/>
          </ErrorEmpty>}
          {currency?.isWithdrawEnabled === 1 && (<Link
            href={{
              pathname: `/accounts/cashout/${currency?.abbreviation}`,
              query: { currency_id: `${currency?.id}` }
            }}
          >
            <a className={styles.cashoutLink}>
              {t('myAccount.balance.buttons.cashout')}
            </a>
          </Link>)}
        </div>
      </td>
    </tr>
  ) : null
}
