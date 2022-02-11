import styles from "../../../../../styles/MyAccount/CashoutPage/CashoutPage.module.scss";
import {numberTransformer} from "../../../../../helpers/numberTransformer";


export const PaymentInfoContainer = ({t, typeOfCurrency, chosenPayment}) => {

  let min = numberTransformer(chosenPayment ? `${chosenPayment.withdrawMin}` : `${typeOfCurrency.withdrawMin}`);
  let max = numberTransformer(chosenPayment ? `${chosenPayment.withdrawMax}` : `${typeOfCurrency.withdrawMax}`);


  return (
    <div className={styles.paymentInfoContainer}>
      <p>{t("myAccount.cashoutPage.selectPaymentContainer.cryptoPaymentDetails", {
        min_value: min,
        max_value: max,
        currency: typeOfCurrency.abbreviation
      })}</p>
    </div>
  )
}