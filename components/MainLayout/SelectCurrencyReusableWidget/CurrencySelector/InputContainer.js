import styles from "../../../../styles/CurrencySelector/CurrencySelector.module.scss";


export const InputContainer = ({t, searchValue, searchInputHandler}) => {


  return (
    <div className={styles.selectorWrapper}>
      <label htmlFor="currencySearch" className={styles.currencyLabel}>{t("selectCurrency.searchLabel")}</label>
      <input
        onChange={(e) => searchInputHandler(e.target.value)}
        value={searchValue}
        id={"currencySearch"}
        type="text"
        placeholder={t("selectCurrency.searchPlaceholder")}
        className={styles.currencySearchInput}
      />
    </div>
  )
}