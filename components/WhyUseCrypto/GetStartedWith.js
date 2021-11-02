import styles from '../../styles/WhyUsecrypto/GetStartedWith.module.scss';

export const GetStartedWith = ({t}) => {


  return (
    <div className={styles.getStartedWithBlockWrapper}>
      <h2>{t('whyUseCryptoPage.getStartedWithBlock.heading')}</h2>
      <p>&#160;&#160;{t('whyUseCryptoPage.getStartedWithBlock.infoText')}</p>
    </div>
  )
}