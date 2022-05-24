import styles from '../../../styles/AboutUs/MainBlock.module.scss'
import { useTranslation } from 'next-i18next'

export const MainBlock = () => {
  const { t } = useTranslation('common')

  return (
    <section className={styles.mainSectionWrapper}>
      <div className={styles.mainItemsWrapper}>
        <div className={styles.aboutItems}>
          <div className={`${styles.minuteBlock} ${styles.aboutInnerItem}`}>
            <div>{t("aboutUsPage.mainBlock.providers")}</div>
          </div>
          <div className={`${styles.depositsBlock} ${styles.aboutInnerItem}`}>
            <div>{t("aboutUsPage.mainBlock.games")}</div>
          </div>
          <div className={`${styles.payoutsBlock} ${styles.aboutInnerItem}`}>
            <div>
              {t("aboutUsPage.mainBlock.flexibleSystem.flexible")}
              <span className={styles.smallSpan}>{t("aboutUsPage.mainBlock.flexibleSystem.cryptocurrency")}</span>
              {t("aboutUsPage.mainBlock.flexibleSystem.system")}
            </div>
          </div>
          <div className={`${styles.licensedBlock} ${styles.aboutInnerItem}`}>
            <div>{t("aboutUsPage.mainBlock.cashouts")}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
