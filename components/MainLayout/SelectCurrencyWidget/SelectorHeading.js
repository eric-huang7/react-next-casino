import styles from "../../../styles/CurrencySelector/CurrencySelector.module.scss";


export const SelectorHeading = ({t, backButtonClickHandler, closeCurrenciesClickHandler, text}) => {


  return (
    <div className={styles.selectCurrencyHeadingBlock}>
      <div
        onClick={() => backButtonClickHandler()}
        className={styles.selectCurrencyBackButton}
      >
      </div>
      <h3 className={styles.selectCurrencyHeading}>{t(text)}</h3>
      <div
        className={styles.selectCurrencyCloseButton}
        onClick={() => closeCurrenciesClickHandler()}
      >
        <span className={styles.closeOne}></span>
        <span className={styles.closeTwo}></span>
      </div>
    </div>
  )
}