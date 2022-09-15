import styles from '../../../styles/MyAccount/BalancePage/BalancePage.module.scss'
import { useDispatch } from 'react-redux'
import { chakra, Text } from "@chakra-ui/react"
import { patchUserActiveCurrency } from '../../../redux/user/action'

import { numberTransformer } from '../../../helpers/numberTransformer'
import {CurrencyItem} from "../../currency/CurrencySelector/CurrencyItem";
import {HStack} from "@chakra-ui/layout";
import RoundButton from "../../buttons/RoundButton";
import {setUserCurrencySwitcher} from "../../../redux/userFinance/action";
import {showDepositModal} from "../../../redux/popups/action";
import {useRouter} from "next/router";

export const TableRow = ({ t, balanceData, currencyData, rates = [], rateUsd }) => {
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
    <chakra.tr h="51px" fontSize="15px" color="#808080" fontFamily="Verdana">
      {Number(balanceData.is_default) === 0
        ? <chakra.td className={`${styles.tableDataActive} ${styles.tableActiveChoose}`}>
            <Text color="primary.500" cursor="pointer" onClick={chooseClickHandler}>
              {t('myAccount.balance.table.items.select')}
            </Text>
          </chakra.td>
        : <chakra.td className={`${styles.tableDataActive} ${styles.active}`}>
            <p>
              {t('myAccount.balance.table.items.active')}
            </p>
          </chakra.td>
      }
      <chakra.td>
        <CurrencyItem currencyData={currency} />
      </chakra.td>
      <chakra.td wordWrap="break-word">
        {`${amount} ${currency?.abbreviation}`}
      </chakra.td>
      <chakra.td wordWrap="break-word">
        {`${cashOut} ${currency?.abbreviation}`}
      </chakra.td>
      <chakra.td wordWrap="break-word">
        {rate ? <span>{amountBtc} BTC ≈ {amountFiat} USD</span> : ''}
      </chakra.td>
      <chakra.td>
        <HStack alignItems="center" justifyContent="space-around">
          {currency?.isDepositEnabled === 1 &&
            <RoundButton onClick={currencyButtonHandler} solid title={t('myAccount.balance.buttons.deposit')} />}

          {currency?.isWithdrawEnabled === 1 &&
            <RoundButton onClick={() => cashoutButtonHandler( {
                pathname: `/accounts/cashout/${currency?.abbreviation}`,
                query: { currency_id: `${currency?.id}` }
              })
            } title={t('myAccount.balance.buttons.cashout')} />}
        </HStack>
      </chakra.td>
    </chakra.tr>
  ) : null
}
