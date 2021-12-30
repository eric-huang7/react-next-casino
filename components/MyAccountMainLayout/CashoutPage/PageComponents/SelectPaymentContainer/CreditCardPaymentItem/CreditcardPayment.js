import styles from "../../../../../../styles/MyAccount/CashoutPage/CashoutPage.module.scss";
import {ImageContainer} from "./ImageContainer";
import {PaymentInfoContainer} from "./PaymentInfoContainer";
import {IndicatorContainer} from "../IndicatorContainer";
import {FormContainer} from "./FormContainer";


export const CreditCardPayment = ({t, isActive, typeOfCurrency, activateItemClickHandler, userInfo}) => {


  return (
    <li onClick={() => activateItemClickHandler(isActive)} className={`${styles.methodItem} ${isActive.isActive ? styles.activeMethodItem : ""}`}>
      <div className={styles.paymentItemMainContainer}>
        <ImageContainer t={t} />
        <PaymentInfoContainer t={t} typeOfCurrency={typeOfCurrency}/>
        <IndicatorContainer />
      </div>
      {
        isActive.isActive ? <FormContainer t={t} userInfo={userInfo} typeOfCurrency={typeOfCurrency} /> : <></>
      }
    </li>
  )
}