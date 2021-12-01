import styles from '../../../styles/DepostWidget/DepositWidgetMainContainer.module.scss';

export const PlayWithButton = ({t, userDepositValue, userCurrency}) => {

  return (
    <button
      disabled={userCurrency.isDepositEnabled === 0 ? true : false}
      className={`${styles.playWithButton} ${userCurrency.isDepositEnabled === 0 ? styles.disabledButton : ''}`}

    >
      {`${t("depositWidget.playWith")} ${userCurrency.currencySymbol ? userCurrency.currencySymbol : ''}${userDepositValue}${userCurrency.currencySymbol ? "" : userCurrency.currencyAbbreviation}`}
    </button>
  )
}