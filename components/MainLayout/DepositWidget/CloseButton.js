import styles from '../../../styles/DepostWidget/DepositWidgetMainContainer.module.scss';


export const CloseButton = ({setActiveWidget, setIsActivePayments}) => {

  const closeButtonClickHandler = () => {
    setActiveWidget(false);
    setIsActivePayments(false);
  }

  return (
    <button onClick={() => closeButtonClickHandler()} className={styles.closeButton}>
      <span className={styles.closeOne}></span>
      <span className={styles.closeTwo}></span>
    </button>
  )
}