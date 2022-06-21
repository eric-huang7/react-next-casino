import styles from '../../../styles/MyAccount/BalancePage/BalancePage.module.scss';
import {TableHeading} from "./TableHeading";
import {TableRow} from "./TableRow";
import ErrorText from '../../ErrorBoundaryComponents/ErrorText'
import {useState} from "react";
import {BalanceItemMobile} from "./BalanceItemMobile";
import {FaSort, FaSortDown, FaSortUp} from "react-icons/fa";
import {currencyInfo} from "../../../helpers/currencyInfo";

export const TableContainer = ({t, balanceInfo, currency, rates, rateUsd}) => {
  const [sort, setSort] = useState('currency')
  const [direction, setDirection] = useState(true)

  const columns = [
    {
      name: 'currency',
      title: t("myAccount.balance.table.headings.currency"),
      style: styles.headingCurrency,
      sort: true
    },
    {
      name: 'amount',
      title: t("myAccount.balance.table.headings.amount"),
      style: styles.headingAmount,
      sort: true
    },
    {
      name: 'cashout',
      title: t("myAccount.balance.table.headings.cashout"),
      style: styles.headingCashout,
      sort: true
    },
    {
      name: 'amountBtc',
      title: t("myAccount.balance.table.headings.amountBtc"),
      style: styles.headingCashout,
      sort: true
    },
    {
      name: 'actions',
      title: t("myAccount.balance.table.headings.actions"),
      style: styles.headingActions
    }
  ]

  const onSort = (column) => {
    if (column === sort) {
      setDirection(!direction)
    }

    setSort(column)
  }

  const sortedData = () => {
    switch (sort) {
      case 'currency':
        return balanceInfo.balance.balances.sort((a, b) => {
          let currencyA = currency?.currency?.results?.find((el) => Number(el.id) === Number(a.currency_id))
          let currencyB = currency?.currency?.results?.find((el) => Number(el.id) === Number(b.currency_id))
          return direction ? currencyA?.abbreviation > currencyB?.abbreviation : currencyA?.abbreviation < currencyB?.abbreviation
        })
      case 'amount':
        return balanceInfo.balance.balances.sort((a, b) => direction ? a.current_balance > b.current_balance : a.current_balance < b.current_balance)
      case 'cashout':
        return balanceInfo.balance.balances.sort((a, b) => direction ? a.cash_amount > b.cash_amount : a.cash_amount < b.cash_amount)
      default:
        return balanceInfo.balance.balances
    }
  }

  const getColumnsObject = () => {
    const res = {}
    columns.forEach(item => {
      res[item.name] = item
    })
    return res
  }

  return (
    <>
      <table className={styles.balanceTable} cellSpacing={0}>
        <thead>
          <TableHeading columns={columns} onSort={onSort} sort={sort} direction={direction} />
        </thead>
        <tbody>
        {
          sortedData().map((el) => {
            return (
              <ErrorText key={`${el.id} balance table item`}>
                <TableRow
                  key={`${el.id} balance table item`}
                  currencyData={currency}
                  t={t}
                  balanceData={el}
                  rates={rates}
                  rateUsd={rateUsd}
                />
              </ErrorText>
            )
          })
        }
        </tbody>
      </table>
      <div className={styles.balanceTableMobile}>
        <div className={`${styles.row} ${styles.inputsContainer}`}>
          <label htmlFor="sortSelect">{t('myAccount.balance.sortBy')}</label>
          <select
            onChange={(e) => {
              const value = e.target.value?.split(':');
              setDirection(value[1] === 'asc')
              onSort(value[0])
            }}
            id="sortSelect"
          >
            {
              columns.filter(item => item.sort).map((column) => (
                <>
                  <option
                    key={`${column.name}`}
                    value={`${column.name}:asc`}
                    selected={sort === column.name && direction}
                  >
                    {column.title} {t('myAccount.balance.sortAsc')}
                  </option>
                  <option
                    key={`${column.name}`}
                    value={`${column.name}:desc`}
                    selected={sort === column.name && !direction}
                  >
                    {column.title} {t('myAccount.balance.sortDesc')}
                  </option>
                </>
              ))
            }
          </select>
        </div>

        {
          sortedData().map((el) => {
            return (
              <ErrorText key={`mobile-item-${el.id}`}>
                <BalanceItemMobile
                  currencyData={currency}
                  t={t}
                  balanceData={el}
                  rates={rates}
                  rateUsd={rateUsd}
                  columns={getColumnsObject()}
                />
              </ErrorText>
            )
          })
        }
      </div>
    </>
  )
}
