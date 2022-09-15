import styles from '../../../styles/MyAccount/BalancePage/BalancePage.module.scss'
import { useDispatch } from 'react-redux'
import { patchUserActiveCurrency } from '../../../redux/user/action'

import Link from 'next/link'
import { numberTransformer } from '../../../helpers/numberTransformer'
import {CurrencyItem} from "../../currency/CurrencySelector/CurrencyItem";
import RoundButton from "../../buttons/RoundButton";
import {setUserCurrencySwitcher} from "../../../redux/userFinance/action";
import {showDepositModal} from "../../../redux/popups/action";
import {useRouter} from "next/router";

export const BalanceItemMobile = ({ t, balanceData, currencyData, rates = [], rateUsd, columns }) => {
  const dispatch = useDispatch();
  const router = useRouter();

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

  const currencyButtonHandler = () => {
    dispatch(setUserCurrencySwitcher(currency))
    dispatch(showDepositModal(true))
  }

  const cashoutButtonHandler = (data) => {
    router.push(data)
  }
  return currency ? (
    <div className={styles.tableRow}>
      <div className={styles.row}>
        <div className={styles.label}>
          {columns.currency.title}
        </div>
        <div className={styles.tableCurrency}>
          <CurrencyItem currencyData={currency} />
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
        {currency?.isDepositEnabled === 1 &&
        <RoundButton onClick={currencyButtonHandler} solid title={t('myAccount.balance.buttons.deposit')} />}

        {currency?.isWithdrawEnabled === 1 &&
        <RoundButton onClick={() => cashoutButtonHandler( {
          pathname: `/accounts/cashout/${currency?.abbreviation}`,
          query: { currency_id: `${currency?.id}` }
        })
        } title={t('myAccount.balance.buttons.cashout')} />}

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
