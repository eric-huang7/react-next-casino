import styles from '../../../styles/PaymentsModals/CreditCardPayment.module.scss';

import Image from "next/image";
import {ConfirmButton} from "./CreditCardComponents/ConfirmButton";
import {PaymentHeading} from "./CreditCardComponents/Heading";
import {InputsContainer} from "./CreditCardComponents/InputsContainer";
import {useDispatch} from "react-redux";
import {showCreditCardModal, showCryptoModal} from "../../../redux/actions/showPopups";

export const PaymentsCardWrapper = ({t}) => {
  const dispatch = useDispatch()
  const closeCardPayment = () => {
    dispatch(showCreditCardModal(false));
  }

  return (
    <div className={styles.paymentsMainWrapper}>
      <div className={styles.paymentsInnerWrapper}>
        <div className={styles.paymentsMainContainer}>
          <PaymentHeading closeHandler={closeCardPayment} t={t} type={'fiat'}/>
          <InputsContainer t={t}/>
        </div>
        <ConfirmButton t={t} />
      </div>
    </div>
  )
}