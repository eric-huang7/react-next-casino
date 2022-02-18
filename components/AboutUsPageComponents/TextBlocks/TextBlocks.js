import styles from '../../../styles/AboutUs/TextBlocks.module.scss'
import { useTranslation } from 'next-i18next'

export const TextBlocks = () => {
  const { t } = useTranslation('common')
  return (
    <section className={styles.textBlockWrapper}>
      <div className={styles.textBlockInnerWrapper}>
        <div className={styles.slotsIdolBlock}>
          <div className={styles.frame}>
            <h2>{t('aboutUsPage.textBlocks.slotsIdolBlock.heading')}</h2>
            <p>{t('aboutUsPage.textBlocks.slotsIdolBlock.firstPar')}</p>
            <p>{t('aboutUsPage.textBlocks.slotsIdolBlock.secondPar')}</p>
            <p>{t('aboutUsPage.textBlocks.slotsIdolBlock.thirdPar')}</p>
          </div>
        </div>
        <div className={styles.funStuffBlock}>
          <div className={styles.frame}>
            <h2>{t('aboutUsPage.textBlocks.theFunStuf.heading')}</h2>
            <p>{t('aboutUsPage.textBlocks.theFunStuf.firstPar')}</p>
            <p>{t('aboutUsPage.textBlocks.theFunStuf.secondPar')}</p>
          </div>
        </div>
        <div className={styles.seriousStuff}>
          <div className={styles.frame}>
            <h2>{t('aboutUsPage.textBlocks.theSeriousStuff.heading')}</h2>
            <p>{t('aboutUsPage.textBlocks.theSeriousStuff.firstPar')}</p>
            <p>{t('aboutUsPage.textBlocks.theSeriousStuff.secondPar')}</p>
            <p>{t('aboutUsPage.textBlocks.theSeriousStuff.thirdPar')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}