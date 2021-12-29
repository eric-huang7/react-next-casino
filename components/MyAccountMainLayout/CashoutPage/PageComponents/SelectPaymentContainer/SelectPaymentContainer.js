import styles from '../../../../../styles/MyAccount/CashoutPage/CashoutPage.module.scss';
import {CreditCardPayment} from "./CreditCardPaymentItem/CreditcardPayment";
import {CryptoPaymentItem} from "./CryptoPaymentContainer/CryptoPaymentContainer";



export const SelectPaymentContainer = ({t, balanceData, typeOfCurrency, currencyData}) => {
  console.log(balanceData, typeOfCurrency);
  let BTC = currencyData.filter((el) => el.abbreviation === "BTC")[0];
  let LTC = currencyData.filter((el) => el.abbreviation === "LTC")[0];
  let BCH = currencyData.filter((el) => el.abbreviation === "BCH")[0];
  let ETH = currencyData.filter((el) => el.abbreviation === "ETH")[0];

  console.log(BTC, LTC, BCH, ETH,  "currncy")

  const activateItemClickHandler = (item) => {
    console.log(item);
  }

  if (typeOfCurrency.type === 3) {
    return (
      <div className={styles.selectMethodContainer}>
        <p className={styles.containerHeading}>{"Select Payment Method"}</p>
        <div className={styles.paymentMethodWrapper}>
          <ul className={styles.methodsList}>
            <CreditCardPayment
              t={t}
              isActive={true}
              typeOfCurrency={typeOfCurrency}
              activateItemClickHandler={activateItemClickHandler}
            />
            <CryptoPaymentItem
              t={t}
              isActive={false}
              balanceData={balanceData}
              typeOfCurrency={BTC}
              activateItemClickHandler={activateItemClickHandler}
            />
            <CryptoPaymentItem
              t={t}
              isActive={false}
              balanceData={balanceData}
              typeOfCurrency={LTC}
              activateItemClickHandler={activateItemClickHandler}
            />
            <CryptoPaymentItem
              t={t}
              isActive={false}
              balanceData={balanceData}
              typeOfCurrency={BCH}
              activateItemClickHandler={activateItemClickHandler}
            />
            <CryptoPaymentItem
              t={t}
              isActive={false}
              balanceData={balanceData}
              typeOfCurrency={ETH}
              activateItemClickHandler={activateItemClickHandler}
            />
          </ul>
        </div>
      </div>
    )
  } else {
    return (
      <div className={styles.selectMethodContainer}>
        <p className={styles.containerHeading}>{"Select Payment Method"}</p>
        <div className={styles.paymentMethodWrapper}>
          <ul className={styles.methodsList}>
            <CryptoPaymentItem
              t={t}
              isActive={true}
              balanceData={balanceData}
              typeOfCurrency={typeOfCurrency}
              activateItemClickHandler={activateItemClickHandler}
            />
          </ul>
        </div>
      </div>
    )
  }

}