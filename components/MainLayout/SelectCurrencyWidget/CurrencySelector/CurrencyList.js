import styles from "../../../../styles/CurrencySelector/CurrencySelector.module.scss";
import {CurrencyItem} from "./CurrencyItem";
import {useDispatch} from "react-redux";
import {setUserCurrencySwitcher} from "../../../../redux/actions/setSelectedCurrency";
import {addCurrencyToUserList} from "../../../../redux/actions/userData";


export const CurrencyList = ({t, type, currenciesData, backButtonClickHandler, userAuth}) => {
  const dispatch = useDispatch();

  const currencySelectorHandler = (currencyData) => {
      dispatch(setUserCurrencySwitcher(currencyData));

      if (userAuth) {
        let currency = {
          currency_id: currencyData.id
        }
        dispatch(addCurrencyToUserList(currency));
      }

    backButtonClickHandler();
      // console.log(currencyData.id, currencyData.abbreviation, currencyData.symbol, currencyData.type, '<<<< data for post')
  }


  return (
    <ul className={styles.currenciesList}>
      <span className={styles.currencyCategory}>{type}</span>
      {
        currenciesData.map((currency) => {

          return(
            <CurrencyItem
              t={t}
              currencyData={currency}
              key={`${currency.id} currency`}
              currencySelectorHandler={currencySelectorHandler}
            />
          )
        })
      }
    </ul>
  )
}