import styles from '../../../styles/PaymentsModals/CreditCardPayment.module.scss';

import Image from "next/image";
import {ConfirmButton} from "./CreditCardComponents/ConfirmButton";
import {PaymentHeading} from "./CreditCardComponents/Heading";
import {InputsContainer} from "./CreditCardComponents/InputsContainer";
import {useDispatch, useSelector} from "react-redux";
import {showCreditCardModal, showCryptoModal} from "../../../redux/actions/showPopups";
import {annulDeposit} from "../../../redux/actions/depositPayments";
import useWindowScroll from "../../../hooks/useWindowScroll";

export const PaymentsCardWrapper = ({t}) => {
  let scrollHeight = useWindowScroll();
  const userCurrency = useSelector((state) => state.userSelectedCurrency);
  const userDepositValue = useSelector((state) => state.userDepositValue.value);
  const dispatch = useDispatch()
  const closeCardPayment = () => {
    dispatch(showCreditCardModal(false));
    dispatch(annulDeposit());
  }

  return (
    <div className={styles.paymentsMainWrapper}>
      <div className={`${styles.paymentsInnerWrapper} ${scrollHeight > 100 ? styles.marginNull : ''}`}>
        <div className={styles.paymentsMainContainer}>
          <PaymentHeading closeHandler={closeCardPayment} t={t} type={'fiat'} />
          <InputsContainer userDepositValue={userDepositValue} userCurrency={userCurrency} t={t}/>
        </div>
        <ConfirmButton t={t} />
      </div>
    </div>
  )
}