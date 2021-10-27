import styles from '../../../styles/DepositPage/DepositPage.module.scss';

export const DepositHeading = ({closeDepositModalHandler}) => {

  return (
    <div className={styles.depositHeadingBlock}>
      <h3>
        DEPOSIT AMOUNT
      </h3>
      <div onClick={() => closeDepositModalHandler()} className={styles.depositPageCloseButton}>
        <span className={styles.closeOne}></span>
        <span className={styles.closeTwo}></span>
      </div>
    </div>
  )
}