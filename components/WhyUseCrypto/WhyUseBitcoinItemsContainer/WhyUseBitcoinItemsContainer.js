import styles from '../../../styles/WhyUsecrypto/WhyUseBitcoinItemsContainer.module.scss';
import whyUseBitcoinData from './whyUsebitcoinData';

export const WhyUseBitcoinItemsContainer = ({t}) => (
  <div className={styles.whyUseBitcoinMainWrapper}>
    <div className={styles.whyUseBitcoinItemsContainer}>
      {whyUseBitcoinData.map(item => (
        <div key={item.id} className={styles.itemMainContainer}>
          <h3 className={styles.itemHeading}>{t(item.heading)}</h3>
          <div className={`${styles.itemTextBlock} ${styles[item.className]}`}>
            <div className={styles.upperAngle}></div>
            <div className={styles.upperAngleIconContainer}>
              <img src={item.icon} alt="benefits icon"/>
            </div>
            <p>
              {t(item.textInfo)}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
)
