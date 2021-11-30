import styles from '../../../styles/DepostWidget/DepositWidgetMainContainer.module.scss';


export const CurrencyChooser = ({t, currencySwitcherShowHandler, userCurrency}) => {
  
  return (
    <>
      <button onClick={() => currencySwitcherShowHandler()} className={styles.widgetCurrencyButton} id={'widgetCurrencyButton'}>
        {userCurrency.currencyAbbreviation}
      </button>
      <label className={styles.currencyButtonLabel} htmlFor="widgetCurrencyButton">{t("depositWidget.currency")}</label>
    </>
  )
}