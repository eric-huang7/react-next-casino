import { BalanceItem } from './BalanceItem'
import BalanceItemError from './BalanceErrorBoundary/BalansItemError'
import {
  Table,
  Tbody,
  TableContainer,
} from '@chakra-ui/react'

export const BalanceMenuContainer = ({ balanceData, currencyData, activeBalance, onSelect }) => {

  let balanceArr = []
  try {
    balanceArr = balanceData?.balance?.balances.filter((el) => Number(el.currency_id) !== Number(activeBalance[0].currency_id))
  } catch (e) {
    balanceArr = []
  }

  return (
    <TableContainer  position="absolute" top="20px" right={0} bg="#2d2b2b" overflowX="hidden">
      <Table p={0}>
        <Tbody>
        {balanceArr.map((el) => (
          <BalanceItemError key={`${el.id} balance item`}>
            <BalanceItem
              key={`${el.id} balance item`}
              balanceData={el}
              currencyData={currencyData}
              onSelect={onSelect}
            />
          </BalanceItemError>
        ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}
