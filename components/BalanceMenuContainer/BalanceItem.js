import { numberTransformer } from '../../helpers/numberTransformer'
import { patchUserActiveCurrency } from '../../redux/user/action'
import { useDispatch } from 'react-redux'
import {Tr, Td} from "@chakra-ui/react"
import CurrencyItemShort from "../currency/CurrencyItemShort";

export const BalanceItem = ({ balanceData, currencyData, onSelect }) => {
  const dispatch = useDispatch()

  const chooseClickHandler = () => {
    let userData = {
      id: balanceData.user_id,
      base_currency_id: balanceData.currency_id
    }
    dispatch(patchUserActiveCurrency(userData))

  }
  const onSelectHandler = () => {
    let userData = {
      id: balanceData.user_id,
      base_currency_id: balanceData.currency_id,
      abbreviation: currency?.abbreviation,
      name: currency?.name
    }
    onSelect(userData)
  }

  let currency = currencyData.currency.results.find((el) => Number(el.id) === Number(balanceData.currency_id))
  let amount = numberTransformer(parseFloat(balanceData.current_balance).toFixed(Math.min(9, currency?.decimal)))

  return currency && (
    <Tr
      h="50px"
      minW="100px"
      cursor="pointer"
      color="white"
      onClick={() => onSelect ? onSelectHandler() : chooseClickHandler()}
    >
      <Td py={1} px={2} w="fit-content">{amount}</Td>
      <Td py={1} px={2} w="fit-content">
        <CurrencyItemShort currencyData={currency} />
      </Td>
    </Tr>
  )
}
