import styles from "../../../../styles/PaymentsModals/MobilePaymentsStepper.module.scss";


export const StepperPlayWithButton = ({t, whatShouldDoPlayWith, userCurrency, userDepositValue}) => {

  return (
    <button
      onClick={() => whatShouldDoPlayWith()}
      className={`${styles.stepperPlayWithButton} ${userCurrency.isDepositEnabled === 0 ? styles.disabledButton : ''}`}
      disabled={userCurrency.isDepositEnabled === 0  ? true : false}
      title={userCurrency.isDepositEnabled === 0 ? t("depositWidget.playWithTitle") : ""}
    >
      {`${t("depositWidget.playWith")} ${userCurrency.currencySymbol ? userCurrency.currencySymbol : ''}${userDepositValue}${userCurrency.currencySymbol ? "" : userCurrency.currencyAbbreviation}`}
    </button>
  )
}