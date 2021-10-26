import styles from '../../../../styles/DepositPage/DepositPage.module.scss';
import {useSelector} from "react-redux";


export const DepositLastPage = ({t}) => {
  const chosenPayment = useSelector((state) => state.userPaymentMethod)

  console.log(chosenPayment, '@@@@@@@@')
  return (
    <div className={styles.depositLastWrapper}>
      <div className={styles.chosenPaymentMethodBlock}>
        <img src={chosenPayment.paymentImg} alt={chosenPayment.paymentName}/>
      </div>
      <div className={styles.inputsWrapper}>
        <div className={styles.emailInputContainer}>
          <label htmlFor="paymentEmail">Email</label>
          <input id='paymentEmail' type="text"/>
        </div>
        <div className={styles.amountPaymentContainer}>
          <label className={styles.amountPaymentInfo} htmlFor="">Amount (min 10.00, max 5000.00)</label>
          <label className={styles.currencyIcon} htmlFor="paymentAmount">{"$"}</label>
          <input id='paymentAmount' type="number"/>
        </div>
      </div>
      <p className={styles.paymentSecureInfo}>{'Secure Payment Processing Time: Instant Fee 3.0%'}</p>
    </div>
  )
}