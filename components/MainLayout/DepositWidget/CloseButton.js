import styles from '../../../styles/DepostWidget/DepositWidgetMainContainer.module.scss';


export const CloseButton = ({setActiveWidget, setIsActivePayments, setErrorDepositValue, setErrorPaymentMethod}) => {

  const closeButtonClickHandler = () => {
    setActiveWidget(false);
    setIsActivePayments(false);
    setErrorPaymentMethod(false);
    setErrorDepositValue(false);
  }

  return (
    <button onClick={() => closeButtonClickHandler()} className={styles.closeButton}>
      <span className={styles.closeOne}></span>
      <span className={styles.closeTwo}></span>
    </button>
  )
}