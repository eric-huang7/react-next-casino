import styles from '../../../../styles/DepostWidget/DepositWidgetMainContainer.module.scss';
import {PaymentMethodButton} from "./PaymentMethodButton";
import {PaymentMethodsList} from "./PaymentMethodsList";
import {useEffect, useState} from "react";
import {ChosenPaymentMethodButton} from "./ChosenPaymentMethodButton";
import {ErrorMessage} from "../ErrorsMessages/ErrorMessage";
import {paymentMethodsData} from "../../../../envs/paymetsMethods";



export const PaymentMethodMainBlock = ({t, userPayment, setErrorPaymentMethod, paymentMethods, setPaymentMethods, scrollHeight, paymentMethodChooser, isActivePayments, setIsActivePayments, errorPaymentMethod, userCurrency}) => {

  console.log(userPayment, "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
  return (
    <div className={styles.paymentMethodMainBlock}>
          <PaymentMethodsList
            paymentMethodsData={paymentMethodsData}
            scrollHeight={scrollHeight}
            isActivePayments={isActivePayments}
            paymentMethodChooser={paymentMethodChooser}
            t={t}
            userCurrency={userCurrency}
            setPaymentMethods={setPaymentMethods}
            paymentMethods={paymentMethods}
            setErrorPaymentMethod={setErrorPaymentMethod}
          />
      {
        !userPayment
        ?
          <PaymentMethodButton
            setIsActivePayments={setIsActivePayments}
            isActivePayments={isActivePayments}
            t={t}
          />
          :
        !userPayment.paymentMethodData
          ?
          <PaymentMethodButton
            setIsActivePayments={setIsActivePayments}
            isActivePayments={isActivePayments}
            t={t}
          />
          :
        userPayment.paymentMethodData.paymentType === 'creditCard'
        ?
        <ChosenPaymentMethodButton
          t={t}
          isActivePayments={isActivePayments}
          setIsActivePayments={setIsActivePayments}
          paymentData={userPayment}
        />
        :
        userPayment.paymentMethodData.paymentType === 'cryptoArr'
          ?
        <PaymentMethodButton
          setIsActivePayments={setIsActivePayments}
          isActivePayments={isActivePayments}
          t={t}
        />
          :
          userPayment.paymentMethodData.paymentType === null
          ?
            <PaymentMethodButton
              setIsActivePayments={setIsActivePayments}
              isActivePayments={isActivePayments}
              t={t}
            />
            :
          <ChosenPaymentMethodButton
            t={t}
            isActivePayments={isActivePayments}
            setIsActivePayments={setIsActivePayments}
            paymentData={userPayment}
          />
      }
      { errorPaymentMethod ? <ErrorMessage t={t} text={"depositWidget.paymentError"} /> : <></> }
    </div>
  )
}