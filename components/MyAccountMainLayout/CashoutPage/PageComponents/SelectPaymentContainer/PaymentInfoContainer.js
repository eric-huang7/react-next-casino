import styles from "../../../../../styles/MyAccount/CashoutPage/CashoutPage.module.scss";
import {numberTransformer} from "../../../../../helpers/numberTransformer";


export const PaymentInfoContainer = ({t, typeOfCurrency, chosenPayment}) => {

let min = numberTransformer(chosenPayment ? chosenPayment.withdrawMin : typeOfCurrency.withdrawMin);

  return (
    <div className={styles.paymentInfoContainer}>
      <p>{t("myAccount.cashoutPage.selectPaymentContainer.cryptoPaymentDetails", {min_value: min , currency: typeOfCurrency.abbreviation})}</p>
    </div>
  )
}