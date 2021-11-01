import styles from '../../styles/WhyUsecrypto/WhyUseBitcoinBlock.module.scss';

export const WhyUseBitcoinBlock = ({t}) => {

  let heading = 'Why use Bitcoin?'
  let info = 'We know it can be a little tricky to wrap your head around the virtual currency of Bitcoin. We think it’s the way forward in online payments and we want you to know why, so let’s break it down.'


  return (
    <div className={styles.whyUseBitcoinBlockWrapper}>
      <h2>{t('whyUseCryptoPage.whyUseBitcoinBlock.heading')}</h2>
      <p>&#160;&#160;{t('whyUseCryptoPage.whyUseBitcoinBlock.infoText')}</p>
    </div>
  )
}