import styles from '../../../styles/MyAccount/BalancePage/BalancePage.module.scss'
import { DepositButton } from './DepositButton'
import { useDispatch } from 'react-redux'
import { patchUserActiveCurrency } from '../../../redux/actions/userData'

import Link from 'next/link'
import { numberTransformer } from '../../../helpers/numberTransformer'
import ErrorEmpty from '../../ErrorBoundaryComponents/ErrorEmpty'
import {useEffect} from "react";
import {svgSetter} from "../../../helpers/iconNameFinder";

export const TableRow = ({ t, balanceData, currencyData }) => {
  const dispatch = useDispatch()

  let currency = currencyData.currency.results.find((el) => Number(el.id) === Number(balanceData.currency_id))

  let amount = numberTransformer(balanceData.current_balance)
  let cashOut = numberTransformer(balanceData.cash_amount)

  const chooseClickHandler = () => {
    let userData = {
      id: balanceData.user_id,
      base_currency_id: balanceData.currency_id
    }
    dispatch(patchUserActiveCurrency(userData))

  }

  useEffect(() => {
    const returnAbbr = true
    svgSetter(currency, returnAbbr)
  }, [])

  console.log('currency', currency)
  return (
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
        <div id={`currencyImageContainer${currency.id}`} className={styles.iconContainer}></div>
        <div className={styles.currencyInfoContainer}>
          <div className={styles.currencyAbbrBaseWrapper}>
            <span className={styles.abbreviation}>{currency.abbreviation}</span>
          </div>
          <div className={styles.name}>{currency.name}</div>
        </div>
      </td>
      <td className={styles.tableAmount}>
        {`${amount} ${currency.abbreviation}`}
      </td>
      <td className={styles.tableCashOut}>
        {`${cashOut} ${currency.abbreviation}`}
      </td>
      <td className={styles.tableActions}>
        <div>
          <ErrorEmpty>
            <DepositButton currency={currency} t={t}/>
          </ErrorEmpty>
          <Link
            href={{
              pathname: `/accounts/cashout/${currency.abbreviation}`,
              query: { currency_id: `${currency.id}` }
            }}
          >
            <a className={styles.cashoutLink}>
              {t('myAccount.balance.buttons.cashout')}
            </a>
          </Link>
        </div>
      </td>
    </tr>
  )
}
