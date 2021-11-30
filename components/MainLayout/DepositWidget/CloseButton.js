import styles from '../../../styles/DepostWidget/DepositWidgetMainContainer.module.scss';


export const CloseButton = ({setActiveWidget}) => {


  return (
    <button onClick={() => setActiveWidget(false)} className={styles.closeButton}>
      <span className={styles.closeOne}></span>
      <span className={styles.closeTwo}></span>
    </button>
  )
}