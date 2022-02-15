import styles from "../../../../../../styles/MyAccount/CashoutPage/CashoutPage.module.scss";
import {ImageContainer} from "./ImageContainer";
import {PaymentInfoContainer} from "../PaymentInfoContainer";
import {IndicatorContainer} from "../IndicatorContainer";
import {FormContainer} from "./FormContainer";
import {useEffect} from "react";
import {useRouter} from "next/router";



export const CryptoPaymentItem = ({t, isActive, balanceData, chosenPayment, typeOfCurrency, activateItemClickHandler, userInfo}) => {
  // console.log(balanceData, "balance data");



  return (
    <li onClick={() => activateItemClickHandler(isActive)} className={`${styles.methodItem} ${isActive.isActive ? styles.activeMethodItem : ""}`}>
      <div className={styles.paymentItemMainContainer}>
        <ImageContainer
          typeOfCurrency={typeOfCurrency}
          t={t}
        />
        <PaymentInfoContainer
          t={t}
          typeOfCurrency={typeOfCurrency}
          chosenPayment={chosenPayment}
        />
        <IndicatorContainer />
      </div>
      {
        isActive.isActive
          ?
          <FormContainer
          t={t}
          typeOfCurrency={typeOfCurrency}
          chosenPayment={chosenPayment}
          userInfo={userInfo}
          />
          :
          <></>
      }
    </li>
  )
}