import styles from "../../../../../../styles/MyAccount/CashoutPage/CashoutPage.module.scss";
import {ImageContainer} from "./ImageContainer";
import {PaymentInfoContainer} from "../PaymentInfoContainer";
import {IndicatorContainer} from "../IndicatorContainer";
import {FormContainer} from "./FormContainer";


export const CryptoPaymentItem = ({t, isActive, balanceData, typeOfCurrency, activateItemClickHandler}) => {

  return (
    <li onClick={(e) => activateItemClickHandler(e)} className={`${styles.methodItem} ${isActive ? styles.activeMethodItem : ""}`}>
      <div className={styles.paymentItemMainContainer}>
        <ImageContainer
          typeOfCurrency={typeOfCurrency.abbreviation}
          t={t}
        />
        <PaymentInfoContainer
          t={t}
          typeOfCurrency={typeOfCurrency}
        />
        <IndicatorContainer />
      </div>
      {
        isActive ? <FormContainer t={t} typeOfCurrency={typeOfCurrency} /> : <></>
      }
    </li>
  )
}