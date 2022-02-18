import styles from '../../../styles/PromotionsPage/MainBlock.module.scss'
import { useTranslation } from 'next-i18next'

export const GetABonusBlock = ({ dataForMainBlock }) => {
  const { t } = useTranslation('promotionsPage')

  return (
    <div className={styles.getAbonusWrapper}>
      <div className={styles.getAbonusFrame}>
        <div className={styles.upperTextBlock}>
          <span className={styles.mainText}>{t(dataForMainBlock.upperText.mainText)}</span>
          <span className={styles.addText}>{t(dataForMainBlock.upperText.addText)}</span>
        </div>
        <div className={styles.lowerTextBlock}>
          <span className={styles.lowerMainText}>{t(dataForMainBlock.lowerText.lowerMainText)}</span>
          <span className={styles.lowerAddText}>{t(dataForMainBlock.lowerText.lowerAddText)}</span>
        </div>
      </div>
    </div>
  )
}