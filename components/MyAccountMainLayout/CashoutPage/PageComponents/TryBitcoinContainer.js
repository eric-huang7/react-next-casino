import styles from '../../../../styles/MyAccount/CashoutPage/CashoutPage.module.scss';
import {useDispatch} from "react-redux";
import {setUserCurrencySwitcher} from "../../../../redux/userFinance/action";
import {showDepositModal} from "../../../../redux/popups/action";


export const TryBitcoinContainer = ({t, btcCurrency}) => {

  const dispatch = useDispatch()


  const tryBitcoinButtonHandler = () => {
    dispatch(setUserCurrencySwitcher(btcCurrency));
    dispatch(showDepositModal(true));
  }

  return (
    <div  className={styles.tryBitcoinContainer}>
      <p>{t("myAccount.cashoutPage.selectPaymentContainer.tryBitcoinBlock.heading")}</p>
      <button
        className={styles.playWithBitcoinButton}
        onClick={() => tryBitcoinButtonHandler()}
      >
        <span>{t("myAccount.cashoutPage.selectPaymentContainer.tryBitcoinBlock.button.playWith")}</span>
        <img src="/assets/img/myAccount/cashoutPage/bitcoinIcon.webp" alt="bincoin icon"/>
        <span>{t("myAccount.cashoutPage.selectPaymentContainer.tryBitcoinBlock.button.bitcoin")}</span>
      </button>
    </div>
  )
}
