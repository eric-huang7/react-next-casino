import styles from '../../../styles/DepostWidget/DepositWidgetMainContainer.module.scss';


export const CloseButton = () => {


  return (
    <button className={styles.closeButton}>
      <span className={styles.closeOne}></span>
      <span className={styles.closeTwo}></span>
    </button>
  )
}