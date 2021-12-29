import styles from "../../../../../../styles/MyAccount/CashoutPage/CashoutPage.module.scss";
import {ImageContainer} from "./ImageContainer";
import {PaymentInfoContainer} from "../PaymentInfoContainer";
import {IndicatorContainer} from "../IndicatorContainer";
import {FormContainer} from "./FormContainer";


export const CreditCardPayment = ({t}) => {


  return (
    <li className={`${styles.methodItem} `}>
      <div className={styles.paymentItemMainContainer}>
        <ImageContainer t={t} />
        <PaymentInfoContainer t={t} />
        <IndicatorContainer />
      </div>
      <FormContainer t={t} />
    </li>
  )
}