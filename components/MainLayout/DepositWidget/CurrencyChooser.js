import styles from '../../../styles/DepostWidget/DepositWidgetMainContainer.module.scss';
import CurrencyIcon from "../../currency/CurrencyIcon";


export const CurrencyChooser = ({t, currencySwitcherShowHandler, userCurrency, width}) => {

  return (
    <>
      <button onClick={() => currencySwitcherShowHandler()} className={styles.widgetCurrencyButton} id={'widgetCurrencyButton'}>
        <CurrencyIcon id={userCurrency?.userCurrencyData?.abbreviation} size={6} mr={1}/>
        {userCurrency?.userCurrencyData?.abbreviation}
      </button>
      <label className={styles.currencyButtonLabel} htmlFor="widgetCurrencyButton">{width <= 680 ? "" : t("depositWidget.currency")}</label>
    </>
  )
}
