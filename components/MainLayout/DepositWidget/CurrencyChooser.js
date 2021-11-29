import styles from '../../../styles/DepostWidget/DepositWidgetMainContainer.module.scss';


export const CurrencyChooser = () => {
  
  return (
    <>
      <button className={styles.widgetCurrencyButton} id={'widgetCurrencyButton'}>
        EUR
      </button>
      <label className={styles.currencyButtonLabel} htmlFor="widgetCurrencyButton">Currency</label>
    </>
  )
}