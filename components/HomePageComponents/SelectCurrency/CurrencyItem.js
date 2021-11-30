import styles from "../../../styles/HomePage/SelectCurrency.module.scss";


export const CurrencyItem = ({currencyData, currencySelectorHandler}) => {

  return (
    <li
      className={styles.selectorCurrenciesListItem}
      data-currency_id={currencyData.id}
      data-currency_symbol={currencyData.symbol}
      data-currency_abbr={currencyData.abbreviation}
      data-currency_type={currencyData.type}
      data-currency_is_deposit_enabled={currencyData.isDepositEnabled}
      data-currency_is_withdraw_enabled={currencyData.isWithdrawEnabled}
      key={currencyData.id}
      onClick={(e) => currencySelectorHandler(currencyData)}
    >
      {currencyData.abbreviation}
    </li>
  )
}