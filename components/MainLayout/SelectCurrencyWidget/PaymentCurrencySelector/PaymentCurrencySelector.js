import styles from "../../../../styles/CurrencySelector/CurrencySelector.module.scss";
import {InputContainer} from "../CurrencySelector/InputContainer";
import {useState} from "react";
import {log} from "qrcode/lib/core/galois-field";
import {PaymentCurrencyItem} from "./PaymentCurrencyItem";


export const PaymentCurrencySelector = ({t, backButtonClickHandler, userPayment}) => {
  const [searchValue, setSearchValue] = useState('');

  const searchInputHandler = (value) => {
    setSearchValue(value);

    // cryptoFinder(value);
  }

  return (
    <div  className={styles.currencySelectorContainerWrapper}>
      <div className={styles.currencySelectorContainer}>
        <InputContainer searchValue={searchValue} searchInputHandler={searchInputHandler} t={t} />
        <div  className={styles.currenciesListsContainer}>
          <ul className={styles.currenciesList}>
            {
              userPayment.paymentMethodData?.methodData.map((paymentMethod) => {
                return (
                  <PaymentCurrencyItem
                    key={`payment method ${paymentMethod.currency_from.currency}`}
                    paymentMethod={paymentMethod}
                  />
                )
              } )
            }
          </ul>
        </div>
      </div>
    </div>
  )
}