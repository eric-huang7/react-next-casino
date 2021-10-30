import styles from '../../../../styles/DepositPage/DepositPage.module.scss';
import {useSelector} from "react-redux";


export const DepositLastPage = ({t, userDepositValue, depositValueInputHandler, userDepositValueError, userInfo, userCurrency}) => {
  const chosenPayment = useSelector((state) => state.userPaymentMethod)

  // console.log(chosenPayment, userInfo, '@@@@@@@@')
  return (
    <div className={styles.depositLastWrapper}>
      <div className={styles.chosenPaymentMethodBlock}>
        <img src={chosenPayment.paymentImg} alt={chosenPayment.paymentName}/>
      </div>
      <div className={styles.inputsWrapper}>
        <div className={styles.emailInputContainer}>
          <label htmlFor="paymentEmail">Email</label>
          <input id='paymentEmail' type="text" defaultValue={userInfo.user.email}/>
        </div>
        <div className={styles.amountPaymentContainer}>
          <label className={styles.amountPaymentInfo} htmlFor="">Amount (min 10.00, max 5000.00)</label>
          <label className={styles.currencyIcon} htmlFor="paymentAmount">{userCurrency.currencySymbol}</label>
          <input id='paymentAmount' type="number" defaultValue={userDepositValue} onChange={(e) => depositValueInputHandler(e)}/>
          <span className={styles.errorMessage}>{userDepositValueError}</span>
        </div>
      </div>
      <p className={styles.paymentSecureInfo}>{'Secure Payment Processing Time: Instant Fee 3.0%'}</p>
    </div>
  )
}