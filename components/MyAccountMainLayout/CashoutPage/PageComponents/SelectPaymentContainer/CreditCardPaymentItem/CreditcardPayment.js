import styles from "../../../../../../styles/MyAccount/CashoutPage/CashoutPage.module.scss";
import {ImageContainer} from "./ImageContainer";
import {PaymentInfoContainer} from "./PaymentInfoContainer";
import {IndicatorContainer} from "../IndicatorContainer";
import {FormContainer} from "./FormContainer";


export const CreditCardPayment = ({t, isActive, typeOfCurrency, activateItemClickHandler}) => {


  return (
    <li onClick={(e) => activateItemClickHandler(e)} className={`${styles.methodItem} ${isActive ? styles.activeMethodItem : ""}`}>
      <div className={styles.paymentItemMainContainer}>
        <ImageContainer t={t} />
        <PaymentInfoContainer t={t} typeOfCurrency={typeOfCurrency.abbreviation}/>
        <IndicatorContainer />
      </div>
      {
        isActive ? <FormContainer t={t} typeOfCurrency={typeOfCurrency} /> : <></>
      }
    </li>
  )
}