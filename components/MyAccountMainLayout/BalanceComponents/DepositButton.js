import styles from '../../../styles/MyAccount/BalancePage/BalancePage.module.scss';
import {useDispatch} from "react-redux";
import {setUserCurrencySwitcher} from "../../../redux/actions/setSelectedCurrency";
import {showDepositModal} from "../../../redux/actions/showPopups";



export const DepositButton = ({t, currency}) => {
  const dispatch = useDispatch()
  console.log(currency, '<<<<<<<< deposit button')

  const currencyButtonHandler = () => {
    dispatch(setUserCurrencySwitcher({
      currencyId: currency.id,
      currencyAbbreviation: currency.abbreviation,
      currencySymbol: currency.symbol,
      currencyType: currency.type,
      isDepositEnabled: currency.isDepositEnabled,
      isWithdrawEnabled: currency.isWithdrawEnabled,
    }))
    dispatch(showDepositModal(true));
  }

  return (
    <button onClick={() => currencyButtonHandler()} className={styles.depositButton}>{t("myAccount.balance.buttons.deposit")}</button>
  )
}