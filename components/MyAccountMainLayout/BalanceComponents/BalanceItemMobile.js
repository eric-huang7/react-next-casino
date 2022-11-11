import { useDispatch } from 'react-redux'
import { patchUserActiveCurrency } from '../../../redux/user/action'
import { numberTransformer } from '../../../helpers/numberTransformer'
import {CurrencyItem} from "../../currency/CurrencySelector/CurrencyItem";
import RoundButton from "../../buttons/RoundButton";
import {setUserCurrencySwitcher} from "../../../redux/userFinance/action";
import {showDepositModal} from "../../../redux/popups/action";
import {useRouter} from "next/router";
import {Box, Image} from "@chakra-ui/react";
import {HStack, Text} from "@chakra-ui/layout";
import LinkButton from "../../buttons/LinkButton";

const Row = ({children}) => <HStack p="5px 0" alignItems="flex-start">{children}</HStack>
const Label = ({children}) => <Box w="40%" color="#969698" pr="16px"><Text>{children}</Text></Box>
const Value = ({children}) => <Box wordWrap="break-word"><Text>{children}</Text></Box>

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
    <Box m="8px 16px 24px" p="16px" borderRadius="16px" boxShadow="#ddd 0px 0px 7px">
      <Row>
        <Label>
          {columns.currency.title}
        </Label>
        <div>
          <CurrencyItem currencyData={currency} />
        </div>
      </Row>
      <Row>
        <Label>
          {columns.amount.title}
        </Label>
        <Value>
          {`${amount} ${currency?.abbreviation}`}
        </Value>
      </Row>
      <Row>
        <Label>
          {columns.cashout.title}
        </Label>
        <Value>
          {`${cashOut} ${currency?.abbreviation}`}
        </Value>
      </Row>
      <Row>
        <Label>
          {columns.amountBtc.title}
        </Label>
        <Value>
          {rate ? <span>{amountBtc} BTC<br/> ≈ {amountFiat} USD</span> : ''}
        </Value>
      </Row>
      <HStack pt="30px" alignItems="center">
        {currency?.isDepositEnabled === 1 && <RoundButton w="76px" h="25px" fontSize="12px"
          onClick={currencyButtonHandler} solid title={t('myAccount.balance.buttons.deposit')} />}

        {currency?.isWithdrawEnabled === 1 &&
        <RoundButton w="76px" h="25px" fontSize="12px" onClick={() => cashoutButtonHandler( {
          pathname: `/accounts/cashout/${currency?.abbreviation}`,
          query: { currency_id: `${currency?.id}` }
        })
        } title={t('myAccount.balance.buttons.cashout')} />}

        {Number(balanceData.is_default) === 0
          ? <LinkButton onClick={chooseClickHandler} fontSize="14px">
              {t('myAccount.balance.table.items.select')}
            </LinkButton>
          : <HStack spacing={0}>
              <HStack w="30px" justifyContent="center">
                <Image src="/assets/img/myAccount/balance/active.webp" width="19px" alt="" />
              </HStack>
              <Text color="primary.500">
                {t('myAccount.balance.table.items.active')}
              </Text>
            </HStack>
        }
      </HStack>
    </Box>
  ) : null
}
