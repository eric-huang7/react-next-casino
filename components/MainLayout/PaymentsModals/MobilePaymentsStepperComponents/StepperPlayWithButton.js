import styles from "../../../../styles/PaymentsModals/MobilePaymentsStepper.module.scss";


export const StepperPlayWithButton = ({t, whatShouldDoPlayWith, userCurrency, userDepositValue}) => {

  return (
    <button
      onClick={() => whatShouldDoPlayWith()}
      className={`${styles.stepperPlayWithButton} ${userCurrency.userCurrencyData.isDepositEnabled === 0 ? styles.disabledButton : ''}`}
      disabled={userCurrency.userCurrencyData.isDepositEnabled === 0  ? true : false}
      title={userCurrency.userCurrencyData.isDepositEnabled === 0 ? t("depositWidget.playWithTitle") : ""}
    >
      {`${t("depositWidget.playWith")} ${userCurrency.userCurrencyData.symbol ? userCurrency.userCurrencyData.symbol : ''}${userDepositValue}${userCurrency.userCurrencyData.symbol ? "" : userCurrency.userCurrencyData.abbreviation}`}
    </button>
  )
}