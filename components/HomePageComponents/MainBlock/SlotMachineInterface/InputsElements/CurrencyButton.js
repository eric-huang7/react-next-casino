import styles from "../../../../../styles/HomePage/SumInputs.module.scss";


export const CurrencyButton = ({userCurrency, currencyButtonClickHAndler}) => {


  return (
    <div
      className={styles.currencyButton}
      onClick={() => currencyButtonClickHAndler()}
    >
      <span className={styles.currencyButtonValue}>{userCurrency.userCurrencyData.abbreviation}</span>
    </div>
  )
}