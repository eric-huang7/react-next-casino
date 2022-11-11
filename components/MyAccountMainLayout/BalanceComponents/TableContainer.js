import {TableHeading} from "./TableHeading";
import {TableRow} from "./TableRow";
import ErrorText from '../../ErrorBoundaryComponents/ErrorText'
import {useState} from "react";
import {BalanceItemMobile} from "./BalanceItemMobile";
import { chakra, Box, HStack } from '@chakra-ui/react';
import {Select} from "@chakra-ui/select";

export const TableContainer = ({t, balanceInfo, currency, rates, rateUsd}) => {
  const [sort, setSort] = useState('currency')
  const [direction, setDirection] = useState(true)

  const columns = [
    {
      name: 'currency',
      title: t("myAccount.balance.table.headings.currency"),
      style: {w: {base: "150px", lg: "210px"}},
      sort: true
    },
    {
      name: 'amount',
      title: t("myAccount.balance.table.headings.amount"),
      style: {},
      sort: true
    },
    {
      name: 'cashout',
      title: t("myAccount.balance.table.headings.cashout"),
      style: {w: {base: "90px", lg: "120px"}},
      sort: true
    },
    {
      name: 'amountBtc',
      title: t("myAccount.balance.table.headings.amountBtc"),
      style: {},
      sort: true
    },
    {
      name: 'actions',
      title: t("myAccount.balance.table.headings.actions"),
      style: {w: {base: "97px", lg: "259px"}},
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
      <chakra.table minW="500px" w="100%" tableLayout="fixed" cellSpacing={0} display={{base: "none", lg: "table"}}>
        <thead>
          <TableHeading columns={columns} onSort={onSort} sort={sort} direction={direction} />
        </thead>
        <tbody>
        {sortedData().map((el, index) => (
          <ErrorText key={`${el.id} balance table item`}>
            <TableRow
              index={index}
              key={`${el.id} balance table item`}
              currencyData={currency}
              t={t}
              balanceData={el}
              rates={rates}
              rateUsd={rateUsd}
            />
          </ErrorText>
        ))}
        </tbody>
      </chakra.table>
      <Box  display={{base: "block", lg: "none"}}>
        <HStack py="16px" px="24px">
          <chakra.label htmlFor="sortSelect" w="40%" color="#969698" pr="16px">
            {t('myAccount.balance.sortBy')}
          </chakra.label>
          <Select id="sortSelect" size='md' bg="#ededed" border="0.88px solid #8a8a8a"
            onChange={(e) => {
              const value = e.target.value?.split(':');
              setDirection(value[1] === 'asc')
              onSort(value[0])
            }}
          >
            {columns.filter(item => item.sort).map((column) => (
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
            ))}
          </Select>
        </HStack>

        {sortedData().map((el) => (
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
        ))}
      </Box>
    </>
  )
}
