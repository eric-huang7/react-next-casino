import styles from '../../../styles/DepostWidget/DepositWidgetMainContainer.module.scss';
import {ErrorMessage} from "./ErrorsMessages/ErrorMessage";

export const AmountInputContainer = ({t, userCurrency, userDepositValue, valueInputHandler, errorDepositValue}) => {


  return (
    <div className={styles.amountInputWrapper}>
      <input
        onChange={(e) => valueInputHandler(e)}
        className={styles.widgetAmountInput}
        type="number"
        id={'widgetAmountInput'}
        placeholder={`${userCurrency.currencySymbol} ${userDepositValue}`}
      />
      {/*<label className={styles.currencyLabel} htmlFor="widgetAmountInput">{userCurrency.currencySymbol}</label>*/}
      <label className={styles.amountInputLabel} htmlFor="widgetAmountInput">{t("depositWidget.amount")}</label>
      {errorDepositValue ? <ErrorMessage t={t} text={"depositWidget.valueError"} /> : <></> }
    </div>
  )
}