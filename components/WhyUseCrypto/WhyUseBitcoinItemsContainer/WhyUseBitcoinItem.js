import styles from '../../../styles/WhyUsecrypto/WhyUseBitcoinItemsContainer.module.scss';

export const WhyUseBitcoinItem = ({t, itemHeading, itemTextInfo, itemIcon, classNeed}) => {


  return (
    <div className={styles.itemMainContainer}>
      <h3 className={styles.itemHeading}>{t(itemHeading)}</h3>
      <div className={`${styles.itemTextBlock} ${styles[classNeed]}`}>
        <div className={styles.upperAngle}></div>
        <div className={styles.upperAngleIconContainer}><img src={itemIcon} alt="benefits icon"/></div>
        <p>
          {t(itemTextInfo)}
        </p>
      </div>
    </div>
  )
}