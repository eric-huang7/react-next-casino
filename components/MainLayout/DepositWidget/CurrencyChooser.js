import styles from '../../../styles/DepostWidget/DepositWidgetMainContainer.module.scss';


export const CurrencyChooser = ({t, currencySwitcherShowHandler}) => {
  
  return (
    <>
      <button onClick={() => currencySwitcherShowHandler()} className={styles.widgetCurrencyButton} id={'widgetCurrencyButton'}>
        EUR
      </button>
      <label className={styles.currencyButtonLabel} htmlFor="widgetCurrencyButton">Currency</label>
    </>
  )
}