import styles from '../../../styles/PaymentsModals/CreditCardPayment.module.scss';

import Image from "next/image";
import {ConfirmButton} from "./CreditCardComponents/ConfirmButton";
import {PaymentHeading} from "./CreditCardComponents/Heading";
import {InputsContainer} from "./CreditCardComponents/InputsContainer";

export const PaymentsCardWrapper = ({t}) => {


  return (
    <div className={styles.paymentsMainWrapper}>
      <div className={styles.paymentsInnerWrapper}>
        <div className={styles.paymentsMainContainer}>
          <PaymentHeading />
          <InputsContainer t={t}/>
        </div>
        <ConfirmButton t={t} />
      </div>
    </div>
  )
}