import styles from '../../../../styles/DepostWidget/DepositWidgetMainContainer.module.scss';
import {PaymentMethodButton} from "./PaymentMethodButton";
import {PaymentMethodsList} from "./PaymentMethodsList";
import {useEffect, useState} from "react";
import {ChosenPaymentMethodButton} from "./ChosenPaymentMethodButton";
import {ErrorMessage} from "../ErrorsMessages/ErrorMessage";
import ErrorText from "../../../ErrorBoundaryComponents/ErrorText";
import ErrorEmpty from "../../../ErrorBoundaryComponents/ErrorEmpty";
import {useDisclosure} from "@chakra-ui/hooks";
import PaymentSelectCurrencyModal from "../../../currency/PaymentSelectCurrencyModal";
// import {paymentMethodsData} from "../../../../envs/paymetsMethods";

export const PaymentMethodMainBlock = ({t, userPayment, setErrorPaymentMethod, paymentMethods, setPaymentMethods, scrollHeight, paymentMethodChooser, isActivePayments, setIsActivePayments, errorPaymentMethod, userCurrency}) => {
  const {isOpen, onOpen, onClose} = useDisclosure()

  const onSelectCurrency = () => {
    console.log('onSelectCurrency')
  }

  const onBack = () => {
    console.log('onBack')
  }

  return (
    <div className={styles.paymentMethodMainBlock}>
      <ErrorText>
        <PaymentMethodsList
          // paymentMethodsData={paymentMethodsData}
          scrollHeight={scrollHeight}
          isActivePayments={isActivePayments}
          paymentMethodChooser={paymentMethodChooser}
          t={t}
          userCurrency={userCurrency}
          setPaymentMethods={setPaymentMethods}
          paymentMethods={paymentMethods}
          setErrorPaymentMethod={setErrorPaymentMethod}
          onOpenCryptoPayments={onOpen}
        />
      </ErrorText>
      {
        !userPayment
          ?
          <PaymentMethodButton
            setIsActivePayments={setIsActivePayments}
            isActivePayments={isActivePayments}
            t={t}
          />
          :
          !userPayment?.paymentMethodData
            ?
            <PaymentMethodButton
              setIsActivePayments={setIsActivePayments}
              isActivePayments={isActivePayments}
              t={t}
            />
            :
            userPayment?.paymentMethodData.paymentType === 'creditCard'
              ?
              <ErrorEmpty>
                <ChosenPaymentMethodButton
                  t={t}
                  isActivePayments={isActivePayments}
                  setIsActivePayments={setIsActivePayments}
                  paymentData={userPayment}
                />
              </ErrorEmpty>
              :
              userPayment?.paymentMethodData.paymentType === 'cryptoArr'
                ?
                <PaymentMethodButton
                  setIsActivePayments={setIsActivePayments}
                  isActivePayments={isActivePayments}
                  t={t}
                />
                :
                userPayment?.paymentMethodData.paymentType === null
                  ?
                  <PaymentMethodButton
                    setIsActivePayments={setIsActivePayments}
                    isActivePayments={isActivePayments}
                    t={t}
                  />
                  :
                  <ErrorEmpty>
                    <ChosenPaymentMethodButton
                      t={t}
                      isActivePayments={isActivePayments}
                      setIsActivePayments={setIsActivePayments}
                      paymentData={userPayment}
                    />
                  </ErrorEmpty>
      }
      {errorPaymentMethod ? <ErrorMessage t={t} text={"depositWidget.paymentError"}/> : <></>}

      <PaymentSelectCurrencyModal
        isOpen={isOpen}
        onBack={onBack}
        onClose={onClose}
        onSelect={onSelectCurrency}
      />
    </div>
  )
}
