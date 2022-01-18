import styles from '../../../styles/DepostWidget/DepositWidgetMainContainer.module.scss';

export const PlayWithButton = ({t, userDepositValue, userCurrency, whatShouldDoPlayWithButton, width}) => {

  return (
    <button
      onClick={() => whatShouldDoPlayWithButton()}
      disabled={userCurrency.userCurrencyData.isDepositEnabled === 0 ? true : false}
      className={`${styles.playWithButton} ${userCurrency.userCurrencyData.isDepositEnabled === 0 ? styles.disabledButton : ''}`}
      title={userCurrency.userCurrencyData.isDepositEnabled === 0 ? t("depositWidget.playWithTitle") : ""}
    >
      {width <= 680 ? t("depositWidget.deposit") : `${t("depositWidget.playWith")} ${userCurrency.userCurrencyData.symbol ? userCurrency.userCurrencyData.symbol : ''}${userDepositValue} ${userCurrency.userCurrencyData.symbol ? "" : userCurrency.userCurrencyData.abbreviation}`}
    </button>
  )
}