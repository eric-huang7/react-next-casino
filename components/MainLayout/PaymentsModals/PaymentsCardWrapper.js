import styles from '../../../styles/PaymentsModals/CreditCardPayment.module.scss';

import Image from "next/image";
import {ConfirmButton} from "./CreditCardComponents/ConfirmButton";
import {PaymentHeading} from "./CreditCardComponents/Heading";
import {InputsContainer} from "./CreditCardComponents/InputsContainer";
import {useDispatch, useSelector} from "react-redux";
import {showCreditCardModal, showCryptoModal} from "../../../redux/actions/showPopups";

export const PaymentsCardWrapper = ({t}) => {
  const userCurrency = useSelector((state) => state.userSelectedCurrency);
  const userDepositValue = useSelector((state) => state.userDepositValue.value);
  const dispatch = useDispatch()
  const closeCardPayment = () => {
    dispatch(showCreditCardModal(false));
  }

  return (
    <div className={styles.paymentsMainWrapper}>
      <div className={styles.paymentsInnerWrapper}>
        <div className={styles.paymentsMainContainer}>
          <PaymentHeading closeHandler={closeCardPayment} t={t} type={'fiat'}/>
          <InputsContainer userDepositValue={userDepositValue} userCurrency={userCurrency} t={t}/>
        </div>
        <ConfirmButton t={t} />
      </div>
    </div>
  )
}