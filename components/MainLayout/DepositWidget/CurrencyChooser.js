import styles from '../../../styles/DepostWidget/DepositWidgetMainContainer.module.scss';


export const CurrencyChooser = ({t, currencySwitcherShowHandler, userCurrency, width}) => {
  
  return (
    <>
      <button onClick={() => currencySwitcherShowHandler()} className={styles.widgetCurrencyButton} id={'widgetCurrencyButton'}>
        {userCurrency.userCurrencyData.abbreviation}
      </button>
      <label className={styles.currencyButtonLabel} htmlFor="widgetCurrencyButton">{width <= 680 ? "" : t("depositWidget.currency")}</label>
    </>
  )
}