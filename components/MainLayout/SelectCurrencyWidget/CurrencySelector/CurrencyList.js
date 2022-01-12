import styles from "../../../../styles/CurrencySelector/CurrencySelector.module.scss";
import {CurrencyItem} from "./CurrencyItem";


export const CurrencyList = ({t, type, currenciesData}) => {



  return (
    <ul className={styles.currenciesList}>
      <span className={styles.currencyCategory}>{type}</span>
      {
        currenciesData.map((currency) => {

          return(
            <CurrencyItem t={t} currencyData={currency} key={`${currency.id} currency`} />
          )
        })
      }
    </ul>
  )
}