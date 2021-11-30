import styles from '../../../styles/DepostWidget/DepositWidgetMainContainer.module.scss';

export const PlayWithButton = ({t, userDepositValue, userCurrency}) => {

  return (
    <button className={styles.playWithButton}>
      {`${t("depositWidget.playWith")} ${userCurrency.currencySymbol ? userCurrency.currencySymbol : ''}${userDepositValue}${userCurrency.currencySymbol ? "" : userCurrency.currencyAbbreviation}`}
    </button>
  )
}