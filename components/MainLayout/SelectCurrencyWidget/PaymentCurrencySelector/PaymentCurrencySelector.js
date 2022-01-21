import styles from "../../../../styles/CurrencySelector/CurrencySelector.module.scss";
import {InputContainer} from "../CurrencySelector/InputContainer";
import {useState} from "react";
import {log} from "qrcode/lib/core/galois-field";
import {PaymentCurrencyItem} from "./PaymentCurrencyItem";
import {useDispatch} from "react-redux";
import {setErrorUserPaymentMethod, setUserPaymentMethod} from "../../../../redux/actions/setUserPaymentMethod";


export const PaymentCurrencySelector = ({t, backButtonClickHandler, userPayment}) => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');

  const [cryptoFindArr, setCryptoFindArr] = useState(userPayment.paymentMethodData?.methodData);

  const searchInputHandler = (value) => {
    setSearchValue(value);

    cryptoFinder(value);
  }

  const cryptoFinder = (value) => {
    let searchReg = new RegExp(value.toLowerCase().trim());

    const cryptoFindArr = userPayment.paymentMethodData?.methodData.filter((currency) => {
      if (searchReg.test(currency.currency_from.currency.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    })
    setCryptoFindArr(cryptoFindArr);
  }

  const chosePaymentClickHandler = (paymentData) => {

    // console.log(paymentData, 'selected');
    backButtonClickHandler();
    dispatch(setUserPaymentMethod({
      methodData: paymentData,
      paymentImg: '/assets/img/depositPage/visa-2.svg',
      paymentSecImg: '',
      paymentType: 'crypto',
    }))
    dispatch(setErrorUserPaymentMethod(''));
  }

  return (
    <div  className={styles.currencySelectorContainerWrapper}>
      <div className={styles.currencySelectorContainer}>
        <InputContainer searchValue={searchValue} searchInputHandler={searchInputHandler} t={t} />
        <div  className={styles.currenciesListsContainer}>
          <ul className={styles.currenciesList}>
            {
              cryptoFindArr.length > 0
                ?
              cryptoFindArr.map((paymentMethod) => {
                return (
                  <PaymentCurrencyItem
                    key={`payment method ${paymentMethod.currency_from.currency}`}
                    paymentMethod={paymentMethod}
                    chosePaymentClickHandler={chosePaymentClickHandler}
                  />
                )
              } )
                :
                <p className={styles.nothingFoundText}>{t("selectCurrency.nothingFound")}</p>
            }
          </ul>
        </div>
      </div>
    </div>
  )
}