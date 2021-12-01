import styles from '../../../../styles/DepostWidget/DepositWidgetMainContainer.module.scss';

export const ErrorMessage = ({t, text}) => {


  return (
    <div className={styles.errorMessageContainer}>
      <div className={styles.errorMessageInnerWrapper}>
        <p className={styles.errorText}>{t(text)}</p>
      </div>
      <div className={styles.errorArrow}></div>
    </div>
  )
}