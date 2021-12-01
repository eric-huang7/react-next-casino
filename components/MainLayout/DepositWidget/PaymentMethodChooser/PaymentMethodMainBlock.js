import styles from '../../../../styles/DepostWidget/DepositWidgetMainContainer.module.scss';
import {PaymentMethodButton} from "./PaymentMethodButton";
import {PaymentMethodsList} from "./PaymentMethodsList";
import {useEffect, useState} from "react";
import {ChosenPaymentMethodButton} from "./ChosenPaymentMethodButton";
import {ErrorMessage} from "../ErrorsMessages/ErrorMessage";

let paymentMethodsData = [
  {
    type: 'card',
    name: 'depositWidget.card',
    icon_one: '/assets/img/depositPage/payments/Visa.png',
    icon_two: '/assets/img/depositPage/payments/MasterCard.png',
    currency: 'card',
    currency_id: null
  },
  {
    type: 'crypto',
    name: 'depositWidget.bitcoin',
    icon_one: '/assets/img/depositWidget/bitcoin.png',
    icon_two: null,
    currency: 'BTC',
    currency_id: 1
  },
  {
    type: 'crypto',
    name: 'depositWidget.bitcoinCash',
    icon_one: '/assets/img/depositWidget/bitcoin.png',
    icon_two: null,
    currency: 'BCH',
    currency_id: 391
  },
  {
    type: 'crypto',
    name: 'depositWidget.litecoin',
    icon_one: '/assets/img/depositWidget/litecoin.png',
    icon_two: null,
    currency: 'LTC',
    currency_id: 2
  },
  {
    type: 'crypto',
    name: 'depositWidget.ethereum',
    icon_one: '/assets/img/depositWidget/ethereum.png',
    icon_two: null,
    currency: 'ETH',
    currency_id: 168
  }
]

export const PaymentMethodMainBlock = ({t, scrollHeight, paymentMethod, paymentMethodChooser, isActivePayments, setIsActivePayments, errorPaymentMethod}) => {






  return (
    <div className={styles.paymentMethodMainBlock}>
      <PaymentMethodsList
        paymentMethodsData={paymentMethodsData}
        scrollHeight={scrollHeight}
        isActivePayments={isActivePayments}
        paymentMethodChooser={paymentMethodChooser}
        t={t}
      />
      {paymentMethod ?
        <ChosenPaymentMethodButton
          t={t}
          isActivePayments={isActivePayments}
          setIsActivePayments={setIsActivePayments}
          paymentData={paymentMethod}
        />
        :
        <PaymentMethodButton
          setIsActivePayments={setIsActivePayments}
          isActivePayments={isActivePayments}
          t={t}
        />
      }
      { errorPaymentMethod ? <ErrorMessage t={t} text={"depositWidget.paymentError"} /> : <></> }
    </div>
  )
}