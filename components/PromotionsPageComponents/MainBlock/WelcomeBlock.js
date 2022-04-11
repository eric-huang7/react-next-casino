import styles from '../../../styles/PromotionsPage/MainBlock.module.scss'
import { showDepositModal } from '../../../redux/popups/action'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'next-i18next'

export const WelcomeBlock = ({ dataForMainBlock, locale, userData }) => {
  const { t } = useTranslation('promotionsPage')
  const dispatch = useDispatch()
  const isShowDepositModal = useSelector((state) => state.popups.isShowDepositModal)

  const closeDepositModalHandler = () => {
    if (userData.isAuthenticated) {
      if (!isShowDepositModal) {
        dispatch(showDepositModal(true))
      }
    }
  }

  return (
    <div className={styles.welcomeWrapper}>
      <span className={`${styles.welcomeMainText} ${styles[locale]}`}>{t(dataForMainBlock.welcomeMainText)}</span>
      <div className={styles.imageWrapper}>
        <img className={styles.welcomeImage} src={t(dataForMainBlock.welcomeMainImg)} alt="welcome bonus image"/>
        <span className={styles.welcomeValue}>{t(dataForMainBlock.welcomeValue)}</span>
        <span className={`${styles.welcomeAddText} ${styles[locale]}`}>{t(dataForMainBlock.welcomeAddText)}</span>
      </div>
      <div onClick={() => closeDepositModalHandler()} className={styles.depositButton}>
        <span className={styles.welcomeDepositButton}>{t(dataForMainBlock.depositButtonText)}</span>
      </div>
    </div>
  )
}
