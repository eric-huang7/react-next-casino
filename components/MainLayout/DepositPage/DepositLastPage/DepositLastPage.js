import styles from '../../../../styles/DepositPage/DepositPage.module.scss';
import {useSelector} from "react-redux";


export const DepositLastPage = ({t, userDepositValue, depositValueInputHandler, userDepositValueError, userInfo, userCurrency}) => {
  const chosenPayment = useSelector((state) => state.userPaymentMethod)

  return (
    <div className={styles.depositLastWrapper}>
      <div className={styles.chosenPaymentMethodBlock}>
        <img src={chosenPayment.paymentImg} alt={chosenPayment.paymentName}/>
      </div>
      <div className={styles.inputsWrapper}>
        <div className={styles.emailInputContainer}>
          <label htmlFor="paymentEmail">{t("depositPage.depositLastPage.emailLabel")}</label>
          <input id='paymentEmail' type="text" defaultValue={userInfo.user.email}/>
        </div>
        <div className={styles.amountPaymentContainer}>
          <label className={styles.amountPaymentInfo} htmlFor="">{t("depositPage.depositLastPage.amountPayment")}</label>
          <label className={styles.currencyIcon} htmlFor="paymentAmount">{userCurrency.userCurrencyData.symbol}</label>
          <input id='paymentAmount' type="number" defaultValue={userDepositValue} onChange={(e) => depositValueInputHandler(e)}/>
          <span className={styles.errorMessage}>{t(userDepositValueError)}</span>
        </div>
      </div>
      <p className={styles.paymentSecureInfo}>{t("depositPage.depositLastPage.secureInfo")}</p>
    </div>
  )
}