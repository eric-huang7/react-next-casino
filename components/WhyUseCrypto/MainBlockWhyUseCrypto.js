import styles from '../../styles/WhyUsecrypto/MainBlockWhyUseCrypto.module.scss'
import useWindowDimensions from '../../hooks/useWindowDimensions'

export const MainBlockWhyUseCrypto = () => {
  const { width } = useWindowDimensions()
  let whyUseCryptoHeading = '/assets/img/whyUseCrypto/whyUseCryptoHeading.png'

  if (width > 600) {
    whyUseCryptoHeading = '/assets/img/whyUseCrypto/whyUseCryptoHeading.png'
  } else {
    whyUseCryptoHeading = '/assets/img/whyUseCrypto/whyUseCryptoHeading-mobile.png'
  }

  return (
    <div className={styles.mainBlockWrapper}>
      <div className={styles.mainBlockHeading}>
        <img src={whyUseCryptoHeading} alt="Why use crypto heading"/>
      </div>
      <div className={styles.mainBlockImg}>
        <img className={styles.mainBlockImg_bitcoinLightBulb} src="/assets/img/whyUseCrypto/bitcoinLightBulbIcon.png"
             alt="bitcoin light bulb icon"/>
      </div>
    </div>
  )
}