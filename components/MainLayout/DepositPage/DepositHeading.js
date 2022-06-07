import styles from '../../../styles/DepositPage/DepositPage.module.scss';

export const DepositHeading = ({t, closeDepositModalHandler, title}) => {

  return (
    <div className={styles.depositHeadingBlock}>
      <h3>
        {title || t("depositPage.innerHeading")}
      </h3>
      <div onClick={() => closeDepositModalHandler()} className={styles.depositPageCloseButton}>
        <span className={styles.closeOne}></span>
        <span className={styles.closeTwo}></span>
      </div>
    </div>
  )
}
