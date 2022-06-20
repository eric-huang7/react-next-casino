import styles from '../../../styles/MyAccount/BalancePage/BalancePage.module.scss'
import { DepositButton } from './DepositButton'
import { useDispatch } from 'react-redux'
import { patchUserActiveCurrency } from '../../../redux/user/action'

import Link from 'next/link'
import { numberTransformer } from '../../../helpers/numberTransformer'
import ErrorEmpty from '../../ErrorBoundaryComponents/ErrorEmpty'
import {useEffect} from "react";
import {svgSetter} from "../../../helpers/iconNameFinder";
import {CurrencyItem} from "../../MainLayout/SelectCurrencyWidget/CurrencySelector/CurrencyItem";

export const BalanceItemMobile = ({ t, balanceData, currencyData, rates = [], rateUsd, columns }) => {
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

  useEffect(() => {
    const returnAbbr = false
    svgSetter(currency, returnAbbr)
  }, [])

  return currency ? (
    <div className={styles.tableRow}>
      <div className={styles.row}>
        <div className={styles.label}>
          {columns.currency.title}
        </div>
        <div className={styles.tableCurrency}>
          <CurrencyItem t={t} currencyData={currency} iconId="mobileIcon" />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.label}>
          {columns.amount.title}
        </div>
        <div className={styles.tableAmount}>
          {`${amount} ${currency?.abbreviation}`}
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.label}>
          {columns.cashout.title}
        </div>
        <div className={styles.tableCashOut}>
          {`${cashOut} ${currency?.abbreviation}`}
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.label}>
          {columns.amountBtc.title}
        </div>
        <div className={styles.tableCashOut}>
          {rate ? <span>{amountBtc} BTC<br/> ≈ {amountFiat} USD</span> : ''}
        </div>
      </div>
      <div className={`${styles.row} ${styles.actionButtons}`}>
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
        <div className={styles.selectWrapper}>
        {
          Number(balanceData.is_default) === 0 ?
            <div className={`${styles.tableDataActive} ${styles.tableActiveChoose}`}>
              <div onClick={() => chooseClickHandler()}>
                {t('myAccount.balance.table.items.select')}
              </div>
            </div>
            :
            <div className={`${styles.tableDataActive} ${styles.active}`}>
              <div>
                {t('myAccount.balance.table.items.active')}
              </div>
            </div>
        }
        </div>
      </div>
    </div>
  ) : null
}
