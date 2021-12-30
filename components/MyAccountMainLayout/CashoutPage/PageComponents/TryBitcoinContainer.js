import styles from '../../../../styles/MyAccount/CashoutPage/CashoutPage.module.scss';
import {useDispatch} from "react-redux";
import {setUserCurrencySwitcher} from "../../../../redux/actions/setSelectedCurrency";
import {showDepositModal} from "../../../../redux/actions/showPopups";


export const TryBitcoinContainer = ({t, currency}) => {

  const dispatch = useDispatch()
  // console.log(currency, '<<<<<<<< deposit button');

  const tryBitcoinButtonHandler = () => {
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
    <div  className={styles.tryBitcoinContainer}>
      <p>{"Haven't found your Payment Method? Maybe it's time to try Bitcoin."}</p>
      <button
        className={styles.playWithBitcoinButton}
        onClick={() => tryBitcoinButtonHandler()}
      >
        <span>{"Play with"}</span>
        <img src="/assets/img/myAccount/cashoutPage/bitcoinIcon.png" alt="bincoin icon"/>
        <span>{"Bitcoin"}</span>
      </button>
    </div>
  )
}