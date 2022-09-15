import { TableContainer } from './TableContainer'
import { useDispatch } from 'react-redux'
import { LoadingComponent } from '../../LoadingComponent/LoadingComponent'
import { setCurrencySelectorType } from '../../../redux/userFinance/action'
import useCurrencies from "../../../hooks/useCurrencies";
import {TotalBalance} from "./TotalBalance";
import {SelectCurrencyModal} from "../../currency/SelectCurrencyModal";
import {addCurrencyToUserList} from "../../../redux/user/action";
import {useDisclosure} from "@chakra-ui/hooks";
import { Box } from "@chakra-ui/react";
import RoundButton from "../../buttons/RoundButton";

export const BalanceInfoContainer = ({ t, balanceInfo, currency }) => {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { rates, rateUsd, currencies } = useCurrencies()

  const addCurrencyClickHandler = () => {
    onOpen();
    dispatch(setCurrencySelectorType(false));
  }

  const onSelectCurrency = (currencyData) => {
    let currency = {
      currency_id: currencyData.id
    }
    dispatch(addCurrencyToUserList(currency))
    onClose();
  }

  return balanceInfo?.balance?.success && !currency.loading ? (
    <>
      <TotalBalance t={t} rates={rates} rateUsd={rateUsd} currencies={currencies}/>
      <Box overflowX="auto">
        <TableContainer currency={currency} balanceInfo={balanceInfo} t={t} rates={rates} rateUsd={rateUsd} />
      </Box>
      <Box p="20px">
        <RoundButton
          onClick={addCurrencyClickHandler}
          title={t('myAccount.balance.buttons.addCurrency')}
          w="auto"
          solid
        />
      </Box>

      <SelectCurrencyModal
        isOpen={isOpen}
        onClose={onClose}
        onSelect={onSelectCurrency}
      />
    </>
  ) : (
    <LoadingComponent t={t}/>
  )

}
