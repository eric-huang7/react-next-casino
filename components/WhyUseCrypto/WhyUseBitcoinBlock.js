import styles from '../../styles/WhyUsecrypto/WhyUseBitcoinBlock.module.scss';

export const WhyUseBitcoinBlock = ({t}) => {

  return (
    <div className={styles.whyUseBitcoinBlockWrapper}>
      <h2>{t('whyUseCryptoPage.whyUseBitcoinBlock.heading')}</h2>
      <p>&#160;&#160;{t('whyUseCryptoPage.whyUseBitcoinBlock.infoText')}</p>
    </div>
  )
}