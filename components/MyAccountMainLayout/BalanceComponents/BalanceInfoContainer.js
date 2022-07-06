import styles from '../../../styles/MyAccount/BalancePage/BalancePage.module.scss'
import { TableContainer } from './TableContainer'
import { useDispatch } from 'react-redux'
import { LoadingComponent } from '../../LoadingComponent/LoadingComponent'
import { setCurrencySelectorType } from '../../../redux/userFinance/action'
import useCurrencies from "../../../hooks/useCurrencies";
import {TotalBalance} from "./TotalBalance";
import {SelectCurrencyModal} from "../../currency/SelectCurrencyModal";
import {addCurrencyToUserList} from "../../../redux/user/action";
import {useDisclosure} from "@chakra-ui/hooks";

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

  if (balanceInfo?.balance?.success && !currency.loading) {
    return (
      <>
        <TotalBalance t={t} rates={rates} rateUsd={rateUsd} currencies={currencies}/>
        <div className={styles.tableContainerWrapper}>
          <TableContainer currency={currency} balanceInfo={balanceInfo} t={t} rates={rates} rateUsd={rateUsd} />
        </div>
        <button onClick={() => addCurrencyClickHandler()} className={styles.addCurrencyButton}>
          {t('myAccount.balance.buttons.addCurrency')}
        </button>

        <SelectCurrencyModal
          isOpen={isOpen}
          onClose={onClose}
          onSelect={onSelectCurrency}
        />
      </>
    )
  } else {
    return (
      <LoadingComponent t={t}/>
    )
  }

}
